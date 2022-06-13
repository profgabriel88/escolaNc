using escolaNc.Interfaces;
using escolaNc.Models;
using Microsoft.AspNetCore.Mvc;
using System;


namespace escolaNc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {

        private readonly IUsuarioService _usuarioService;

        public UsuariosController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        public IActionResult RetornaUsuarios()
        {
			try
			{
                return Ok(_usuarioService.RetornaUsuarios());
			}
			catch (Exception ex)
			{
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("InsereUsuario")]
        public IActionResult InsereUsuario([FromBody] Usuario usuario)
        {
            try
            {
                return Ok(_usuarioService.InsereUsuario(usuario));
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("AtualizaUsuario")]
        public IActionResult AtualizaUsuario([FromBody] Usuario usuario)
        {
            try
            {
                return Ok(_usuarioService.AtualizaUsuario(usuario));
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{cpf}")]
        public IActionResult RemoveUsuario(string cpf)
		{
            try
            {
                return Ok(_usuarioService.RemoveUsuario(cpf));
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
