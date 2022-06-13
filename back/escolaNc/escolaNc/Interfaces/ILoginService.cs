using escolaNc.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Interfaces
{
	public interface ILoginService
	{
		public bool Cadastro(Login login);
		public Login Login(Login login);
		public string GerarHash(string senha);
	}
}
