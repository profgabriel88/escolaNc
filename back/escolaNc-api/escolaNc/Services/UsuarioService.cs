using escolaNc.Data;
using escolaNc.Excecoes;
using escolaNc.Interfaces;
using escolaNc.Models;
using escolaNc.Utilitarios;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace escolaNc.Services
{
	public class UsuarioService : IUsuarioService
	{
		private EscolaContext _context;
		public UsuarioService(EscolaContext context)
		{
			_context = context;
		}
		public List<Usuario> RetornaUsuarios()
		{
			try
			{
				return _context.Usuarios.ToList();
			}
			catch (System.Exception)
			{
				throw new Excecao("Não foi possível acessar a base de dados");
			}
		}

		public Usuario InsereUsuario(Usuario usuario)
		{
			try
			{
				_context.Usuarios.Add(usuario);
				_context.SaveChanges();
				return usuario;
			}
			catch (System.Exception)
			{
				string cpf = Utilitarios.Utilitarios.formataCpf(usuario.cpf);
				throw new Excecao($"O usuário com o cpf {cpf} já existe na base de dados");
			}
		}
		public Usuario AtualizaUsuario(Usuario usuario)
		{
			if (!_context.Usuarios.Any(u => u.cpf == usuario.cpf))
				throw new Excecao("Usuário não encontrado no banco de dados");

			try
			{
				_context.Usuarios.Update(usuario);
				_context.SaveChanges();
				return usuario;
			}
			catch (System.Exception)
			{
				throw new Excecao("Não foi possível atualizar o usuário na base de dados");
			}
		}
		public bool RemoveUsuario(string cpf)
		{
			if (!_context.Usuarios.Any(u => u.cpf == cpf))
				throw new Excecao("Usuário não encontrado no banco de dados");

			try
			{
				var usuario = _context.Usuarios.Find(cpf);
				_context.Usuarios.Remove(usuario);
				_context.SaveChanges();
				return true;
			}
			catch (System.Exception)
			{
				throw new Excecao($"Não foi possível remover o usuário de cpf: {cpf} da base de dados");
			}
		}
	}
}

