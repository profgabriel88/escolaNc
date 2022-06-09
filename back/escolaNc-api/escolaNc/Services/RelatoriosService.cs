using escolaNc.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Data;
using escolaNc.Models;
using escolaNc.Data;

namespace escolaNc.Services
{
	public class RelatoriosService : IRelatoriosService
	{
		private readonly IAcessoBD _acesso;
		public RelatoriosService(IAcessoBD acesso)
		{
			_acesso = acesso;
		}
		public List<RelDetalhado> ServicosContratados()
		{
			var retorno = new List<RelDetalhado>();

			DataTable dt = _acesso.ExecutaProc("dbo.REL_SERVICOS_CONTRATADOS");

			foreach(DataRow r in dt.Rows)
			{
				retorno.Add(new RelDetalhado
				{ 
					ID_SERVICO = int.Parse(r.ItemArray[0].ToString()), 
					DESCRICAO = r.ItemArray[1].ToString(), 
					ASSINANTES = int.Parse(r.ItemArray[2].ToString()), 
					VALOR = decimal.Parse(r.ItemArray[3].ToString()), 
					FATURAMENTO = decimal.Parse(r.ItemArray[4].ToString()), 
				});
			}

			return retorno;
		}
	}
}
