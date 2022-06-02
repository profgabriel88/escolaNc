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
				throw new Excecao("N�o foi poss�vel acessar a base de dados");
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
				throw new Excecao($"O usu�rio com o cpf {cpf} j� existe na base de dados");
			}
		}
		public Usuario AtualizaUsuario(Usuario usuario)
		{
			if (!_context.Usuarios.Any(u => u.cpf == usuario.cpf))
				throw new Excecao("Usu�rio n�o encontrado no banco de dados");

			try
			{
				_context.Usuarios.Update(usuario);
				_context.SaveChanges();
				return usuario;
			}
			catch (System.Exception)
			{
				throw new Excecao("N�o foi poss�vel atualizar o usu�rio na base de dados");
			}
		}
		public bool RemoveUsuario(string cpf)
		{
			if (!_context.Usuarios.Any(u => u.cpf == cpf))
				throw new Excecao("Usu�rio n�o encontrado no banco de dados");

			try
			{
				var usuario = _context.Usuarios.Find(cpf);
				_context.Usuarios.Remove(usuario);
				_context.SaveChanges();
				return true;
			}
			catch (System.Exception)
			{
				throw new Excecao($"N�o foi poss�vel remover o usu�rio de cpf: {cpf} da base de dados");
			}
		}
	}
}

