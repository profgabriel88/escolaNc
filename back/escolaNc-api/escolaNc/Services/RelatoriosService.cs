using escolaNc.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Data;
using escolaNc.Models;

namespace escolaNc.Services
{
	public class RelatoriosService : IRelatoriosService
	{
		public List<RelFaturamento> ServicosContratados()
		{
			var conexao = new SqlConnection("Data Source=DEV52\\SQL_2016; Initial Catalog=ESCOLA_NC; User ID=sa; Password=123456");
			var consulta = conexao.CreateCommand();
			consulta.CommandType = System.Data.CommandType.StoredProcedure;
			consulta.CommandText = "dbo.REL_SERVICOS_CONTRATADOS";

			conexao.Open();

			var dr = consulta.ExecuteReader();

			var dt = new DataTable();
			dt.Columns.Add("ID_SERVICO", typeof(int));
			dt.Columns.Add("DESCRICAO", typeof(string));
			dt.Columns.Add("ASSINANTES", typeof(int));
			dt.Columns.Add("VALOR", typeof(decimal));
			dt.Columns.Add("FATURAMENTO", typeof(decimal));
			

			try
			{ 
				while(dr.Read())
				{
					DataRow linha = dt.NewRow();
					for(int i = 0; i < dt.Columns.Count; i++)
					{
						linha[i] = dr.GetValue(i);
					}
					dt.Rows.Add(linha);
				}
			}
			catch (Exception e)
			{
				Console.WriteLine(e.Message);
			}
			finally
			{
				conexao.Close();
			}

			var query = from linha in dt.AsEnumerable()
						select new
						{
							linha
						};

			var retorno = new List<RelFaturamento>();
			foreach(var q in query)
			{
				retorno.Add(new RelFaturamento { 
					ID_SERVICO = q.linha.ItemArray[0].ToString(), 
					DESCRICAO = q.linha.ItemArray[1].ToString(),
					ASSINANTES = int.Parse(q.linha.ItemArray[2].ToString()),
					VALOR = decimal.Parse(q.linha.ItemArray[3].ToString()),
					FATURAMENTO = decimal.Parse(q.linha.ItemArray[4].ToString())
				});
			}	

			return retorno;
		}
	}
}
