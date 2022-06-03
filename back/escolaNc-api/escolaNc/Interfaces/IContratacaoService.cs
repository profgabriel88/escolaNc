using escolaNc.Models;
using System.Collections.Generic;

namespace escolaNc.Interfaces
{
	public interface IContratacaoService
	{
		public List<DetalhesContratados> RetornaContratados();
		public List<DetalhesContratados> BuscaUsuarioCpf(string cpf);
		public List<Servico> RetornaServicos();
	}
}
