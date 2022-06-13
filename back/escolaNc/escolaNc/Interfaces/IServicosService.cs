using escolaNc.Modelos;
using System.Collections.Generic;

namespace escolaNc.Interfaces
{
    public interface IServicosService
    {
        public List<Servico> RetornaServicos();
        public Servico IncluirServico(Servico servico);
        public Servico AtualizaServico(Servico servico);
        public bool RemoveServico(int id);
    }
}
