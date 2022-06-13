using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Interfaces
{
	public interface IAcessoBD
	{
		public DataTable ExecutaProc(string Procedure);
		public DataTable ExecutaProc(string Procedure, Dictionary<Object, Object> Parametros);
	}
}
