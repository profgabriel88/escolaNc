using escolaNc.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ServicosController : ControllerBase
	{
		private readonly IServicoService _servicoService;
		public ServicosController(IServicoService servicoService)
		{
			_servicoService = servicoService;
		}
		[HttpGet]
		public IActionResult Index()
		{
			return Ok(_servicoService.RetornaServicos());
		}
	}
}
