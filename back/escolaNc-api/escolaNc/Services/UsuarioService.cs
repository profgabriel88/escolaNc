using escolaNc.Excecoes;
using escolaNc.Interfaces;
using escolaNc.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;


namespace escolaNc.Services
{
	public class UsuarioService : IUsuarioService
	{
		public List<Usuario> RetornaUsuarios()
		{
			List<Usuario> usuarios = new List<Usuario>();

			using (StreamReader r = new StreamReader("./Models/usuarios.csv"))
			{
				while (r.Peek() >= 0)
				{
					string u = r.ReadLine();
					string[] usuario = u.Split(",");
					usuarios.Add(new Usuario { nome = usuario[0], idade = int.Parse(usuario[1]), cpf = usuario[2], rg = usuario[3], data_nasc = usuario[4], endereco = usuario[5], cidade = usuario[6] });
				}
			}
			return usuarios;
		}

		public Usuario InsereUsuario(Usuario usuario)
		{
			//a fazer: insert no banco de dados do novo usuário
			throw new Excecao("Não foi possível inserir o usuário na base de dados");
		}
		public Usuario AtualizaUsuario(Usuario usuario)
		{
			//a fazer: update do usuário no bd
			throw new Excecao("Não foi possível atualizar o usuário na base de dados");
		}
		public bool RemoveUsuario(string cpf)
		{
			//a fazer: update do usuário no bd
			throw new Excecao($"Não foi possível remover o usuário de cpf: {cpf} da base de dados");
		}
	}
}
