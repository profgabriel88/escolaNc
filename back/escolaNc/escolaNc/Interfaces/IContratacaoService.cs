using System.Collections.Generic;
using escolaNc.Modelos;

namespace escolaNc.Interfaces
{
    public interface IContratacaoService
    {
        public List<Detalhes> RetornaContratados();
        public List<Detalhes> ContratadosCpf(string cpf);
        public List<Servico> RetornaServicos();
        public bool ContrataServicos(List<Contratados> lista);
        public bool ExcluiServico(int id);
    }
}
