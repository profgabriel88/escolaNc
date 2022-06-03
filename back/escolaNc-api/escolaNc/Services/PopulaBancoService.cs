using escolaNc.Data;
using escolaNc.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Services
{
	public class PopulaBancoService
	{
		private EscolaContext _context;

		public PopulaBancoService(EscolaContext context)
		{
			_context = context;
		}

		//public void Popula ()
		//{
		//	if (_context.Usuarios.Any())
		//		return;

		//	using (StreamReader r = new StreamReader("./Models/usuarios.csv"))
		//	{
		//		while (r.Peek() >= 0)
		//		{
		//			string u = r.ReadLine();
		//			string[] usuario = u.Split(",");
		//			_context.Usuarios.AddRange(new Usuario { 
		//				nome = usuario[0].Trim(), 
		//				idade = int.Parse(usuario[1].Trim()), 
		//				cpf = usuario[2].Trim(), 
		//				rg = usuario[3].Trim(), 
		//				data_nasc = usuario[4].Trim(), 
		//				endereco = usuario[5].Trim(), 
		//				cidade = usuario[6].Trim()
		//			});
		//		}
		//	}
		//	_context.SaveChanges();
		//}
	}
}
