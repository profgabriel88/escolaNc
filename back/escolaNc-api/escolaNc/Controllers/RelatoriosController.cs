using escolaNc.Interfaces;
using Microsoft.AspNetCore.Mvc;

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

		[HttpGet, Route("faturamento")]
		public IActionResult Faturamento()
		{
			return Ok(_relService.ServicosContratados());
		}

		[HttpGet, Route("inadimplentes")]
		public IActionResult Inadimplentes(string cpf)
		{
			return Ok(_relService.Inadimplentes(cpf));

		}
		[HttpGet, Route("inadimplentes/{cpf?}")]
		public IActionResult InadimplentesCpf(string cpf)
		{
			return Ok(_relService.Inadimplentes(cpf));

		}
	}
}
