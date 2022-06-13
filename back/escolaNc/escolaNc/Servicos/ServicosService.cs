using escolaNc.Data;
using escolaNc.Excecoes;
using escolaNc.Interfaces;
using escolaNc.Modelos;
using System.Collections.Generic;
using System.Linq;

namespace escolaNc.Servicos
{
    public class ServicosService : IServicosService
    {
        private readonly EscolaContext _context;

        public ServicosService(EscolaContext context)
        { 
            _context = context;
        }
        public List<Servico> RetornaServicos()
        {
            try
            {
                return _context.SERVICO.ToList();
            }
            catch
            {
                throw new Excecao("Não foi possível acessar a base de dados");
            }
        }

        public Servico IncluirServico(Servico servico)
        {
            try
            {
                _context.SERVICO.Add(servico);
                _context.SaveChanges();
                return servico;
            }
            catch 
            {
                throw new Excecao("Não foi possível incluir o serviço na base de dados");
            }
            
        }

        public Servico AtualizaServico(Servico servico)
        {
            try
            {
                _context.SERVICO.Update(servico);
                _context.SaveChanges();
                return servico;
            }
            catch
            {
                throw new Excecao("Não foi possível atualizar o serviço na base de dados");
            }

        }

        public bool RemoveServico(int id)
        {
            try
            {
                var servico = _context.SERVICO.Find(id);
                _context.SERVICO.Remove(servico);
                _context.SaveChanges();
                return true;
            }
            catch 
            {
                throw new Excecao("Não foi possível excluir o serviço na base de dados.\nServiço contratado por pelo menos um cliente");
            }
            
        }
    }
}
