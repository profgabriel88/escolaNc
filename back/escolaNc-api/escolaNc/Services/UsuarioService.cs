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
			//a fazer: insert no banco de dados do novo usu�rio
			throw new Excecao("N�o foi poss�vel inserir o usu�rio na base de dados");
		}
		public Usuario AtualizaUsuario(Usuario usuario)
		{
			//a fazer: update do usu�rio no bd
			throw new Excecao("N�o foi poss�vel atualizar o usu�rio na base de dados");
		}
		public bool RemoveUsuario(string cpf)
		{
			//a fazer: update do usu�rio no bd
			throw new Excecao($"N�o foi poss�vel remover o usu�rio de cpf: {cpf} da base de dados");
		}
	}
}
