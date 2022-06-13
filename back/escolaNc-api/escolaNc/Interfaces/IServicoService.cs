using escolaNc.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Interfaces
{
	public interface IServicoService
	{
		public List<Servico> RetornaServicos();
	}
}
