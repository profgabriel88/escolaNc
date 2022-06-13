using escolaNc.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;

namespace escolaNc.Data
{
	public class AcessoBD : IAcessoBD
	{
		private readonly IConfiguration _configuration;
		public AcessoBD(IConfiguration configuration)
		{
			_configuration = configuration;
		}
		public DataTable ExecutaProc(string Procedure)
		{
			var conexao = new SqlConnection(_configuration.GetConnectionString("Default"));
			var consulta = conexao.CreateCommand();
			consulta.CommandType = System.Data.CommandType.StoredProcedure;
			consulta.CommandText = Procedure;

			conexao.Open();

			var dr = consulta.ExecuteReader();

			var dt = new DataTable();
			var dtSchema = dr.GetSchemaTable();

			foreach(DataRow row in dtSchema.Rows)
			{
				DataColumn col = new DataColumn()
				{
					ColumnName = row["ColumnName"].ToString(),
					Unique = Convert.ToBoolean(row["IsUnique"]),
					AllowDBNull = Convert.ToBoolean(row["AllowDBNull"]),
					ReadOnly = Convert.ToBoolean(row["IsReadOnly"])
				};
				dt.Columns.Add(col);
			}

			try
			{
				while (dr.Read())
				{
					DataRow linha = dt.NewRow();
					for (int i = 0; i < dt.Columns.Count; i++)
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

			return dt;
		}

		public DataTable ExecutaProc(string Procedure, Dictionary<Object, Object> Parametros)
		{
			var conexao = new SqlConnection(_configuration.GetConnectionString("Default"));
			var consulta = conexao.CreateCommand();
			consulta.CommandType = System.Data.CommandType.StoredProcedure;
			consulta.CommandText = Procedure;

			foreach(var p in Parametros)
			{
				consulta.Parameters.Add(p);
			}

			conexao.Open();

			var dr = consulta.ExecuteReader();

			var dt = new DataTable();
			var dtSchema = dr.GetSchemaTable();

			foreach (DataRow row in dtSchema.Rows)
			{
				DataColumn col = new DataColumn()
				{
					ColumnName = row["ColumnName"].ToString(),
					Unique = Convert.ToBoolean(row["IsUnique"]),
					AllowDBNull = Convert.ToBoolean(row["AllowDBNull"]),
					ReadOnly = Convert.ToBoolean(row["IsReadOnly"])
				};
				dt.Columns.Add(col);
			}

			try
			{
				while (dr.Read())
				{
					DataRow linha = dt.NewRow();
					for (int i = 0; i < dt.Columns.Count; i++)
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

			return dt;
		}
	}
}
