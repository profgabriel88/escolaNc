using escolaNc.Data;
using escolaNc.Excecoes;
using escolaNc.Interfaces;
using escolaNc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace escolaNc.Services
{
	public class LoginService : ILoginService
	{
		private readonly EscolaContext _context;
		public LoginService(EscolaContext context)
		{
			_context = context;
		}
		public bool Cadastro(Login login)
		{
			try
			{
				login.hash_senha = GerarHash(login.hash_senha);

				_context.USER_LOGIN.Add(login);
				return true;
			}
			catch
			{
				throw new Excecao("Usuário já cadastrado");
			}
		}

		public string GerarHash(string senha)
		{
			byte[] hashValue;
			using (SHA256 mySHA256 = SHA256.Create())
			{
				hashValue = mySHA256.ComputeHash(Encoding.ASCII.GetBytes(senha));
			}

			return Encoding.ASCII.GetString(hashValue);
		}
	}
}
