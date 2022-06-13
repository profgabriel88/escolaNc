using escolaNc.Interfaces;
using escolaNc.Modelos;
using Microsoft.AspNetCore.Mvc;

namespace escolaNc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServicosController : ControllerBase
    {
        private readonly IServicosService _servicosService;
        public ServicosController(IServicosService servicosService)
        {
            _servicosService = servicosService;
        }
        [HttpGet]
        public IActionResult RetornaServicos()
        {
            try
            {
                return Ok(_servicosService.RetornaServicos());
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost, Route("inserir")]
        public IActionResult IncluiServico([FromBody] Servico servico)
        {
            try
            {
                return Ok(_servicosService.IncluirServico(servico));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost, Route("atualiza")]
        public IActionResult AtualizaServico([FromBody] Servico servico)
        {
            try
            {
                return Ok(_servicosService.AtualizaServico(servico));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveServico(int id)
        {
            try
            {
                return Ok(_servicosService.RemoveServico(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
