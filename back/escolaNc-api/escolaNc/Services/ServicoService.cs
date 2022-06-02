using escolaNc.Data;
using escolaNc.Interfaces;
using escolaNc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Services
{
	public class ServicoService : IServicoService
	{
		private EscolaContext _context;
		public ServicoService(EscolaContext context)
		{
			_context = context;
		}
		public List<Servico> RetornaServicos()
		{
			return _context.servicos.ToList();
		}
	}
}
