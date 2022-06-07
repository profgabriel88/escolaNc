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
	public class RelatoriosController : ControllerBase
	{
		private readonly IRelatoriosService _relService;

		public RelatoriosController(IRelatoriosService relService)
		{
			_relService = relService;
		}

		[HttpGet]
		public IActionResult Index()
		{
			return Ok(_relService.ServicosContratados());
		}
	}
}
