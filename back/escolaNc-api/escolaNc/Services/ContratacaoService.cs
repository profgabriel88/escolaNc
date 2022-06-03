using escolaNc.Data;
using escolaNc.Excecoes;
using escolaNc.Interfaces;
using escolaNc.Models;
using System.Collections.Generic;
using System.Linq;

namespace escolaNc.Services
{
	public class ContratacaoService : IContratacaoService
	{
		private readonly EscolaContext _context;

		public ContratacaoService(EscolaContext context)
		{
			_context = context;
		}

		public List<DetalhesContratados> BuscaUsuarioCpf(string cpf)
		{
			if (!_context.Usuarios.Any(u => u.cpf == cpf))
				throw new Excecao($"Cpf {cpf} não encontrado no sistema.");

			List<DetalhesContratados> contratados = new List<DetalhesContratados>();

			var query = from c in _context.SERVICOS_CONTRATADOS
						join u in _context.Usuarios
						on c.cpf_usuario equals u.cpf
						join s in _context.servicos
						on c.id_servico equals s.id
						where c.cpf_usuario == cpf
						select new
						{
							u.nome,
							u.cpf,
							s.descricao,
							s.preco,
							c.dt_contratacao
						};
			foreach (var q in query)
			{
				contratados.Add(new DetalhesContratados { nome = q.nome, cpf_usuario = q.cpf, descricao = q.descricao, preco = q.preco, dt_contratacao = q.dt_contratacao });
			}

			if (contratados.Count == 0)
			{
				var cliente = _context.Usuarios.FirstOrDefault(u => u.cpf == cpf);
				contratados.Add(new DetalhesContratados { nome = cliente.nome, cpf_usuario = cliente.cpf });
			}


			return contratados;
		}

		public bool ContrataServicos(List<Contratados> lista)
		{
			try
			{
				foreach(var contratado in lista)
				{
					 _context.SERVICOS_CONTRATADOS.Add(contratado);
				}
				_context.SaveChanges();
				return true;
			}
			catch (System.Exception ex)
			{ 
				return false;
			}
		}

		public List<DetalhesContratados> RetornaContratados()
		{
			List<DetalhesContratados> contratados = new List<DetalhesContratados>();
			var query = from c in _context.SERVICOS_CONTRATADOS
						join u in _context.Usuarios
						on c.cpf_usuario equals u.cpf
						join s in _context.servicos
						on c.id_servico equals s.id
						select new { 
							u.nome, 
							u.cpf,
							s.descricao,
							s.preco,
							c.dt_contratacao
						};

			foreach(var q in query)
			{
				contratados.Add(new DetalhesContratados { nome = q.nome, cpf_usuario = q.cpf, descricao = q.descricao, preco = q.preco, dt_contratacao = q.dt_contratacao });
			}

			return contratados;
		}

		public List<Servico> RetornaServicos()
		{
			return _context.servicos.ToList();
		}
	}
}
