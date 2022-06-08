using escolaNc.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Interfaces
{
	public interface IRelatoriosService
	{
		public List<RelDetalhado> ServicosContratados();
	}
}
