using escolaNc.Interfaces;
using escolaNc.Modelos;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace escolaNc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContratacaoController : ControllerBase
    {
        private readonly IContratacaoService _contratacaoService;

        public ContratacaoController(IContratacaoService contratacaoService)
        {
            _contratacaoService = contratacaoService;
        }
        [HttpGet, Route("contratados")]
        public IActionResult RetornaContratados()
        {
            try
            {
                return Ok(_contratacaoService.RetornaContratados());
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{cpf}")]
        public IActionResult ContratadosCpf(string cpf)
        {
            try
            {
                return Ok(_contratacaoService.ContratadosCpf(cpf));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet, Route("servicos")]
        public IActionResult RetornaServicos()
        {
            try
            {
                return Ok(_contratacaoService.RetornaServicos());
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult ContrataServicos([FromBody] List<Contratados> lista)
        {
            try
            {
                return Ok(_contratacaoService.ContrataServicos(lista));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult ExcluiServico(int id)
        {
            try
            {
                return Ok(_contratacaoService.ExcluiServico(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
