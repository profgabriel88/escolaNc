using escolaNc.Interfaces;
using escolaNc.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class UsuariosController : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

    private readonly IUsuarioService _usuarioService;

    public UsuariosController(IUsuarioService usuarioService)
    {
      _usuarioService = usuarioService;
    }

    [HttpGet]
    public IActionResult GetUsers()
    {
      return Ok(_usuarioService.RetornaUsuarios());
    }
  }
}
