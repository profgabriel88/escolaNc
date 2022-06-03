using escolaNc.Interfaces;
using escolaNc.Models;
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
		public IActionResult RetornaClientesServicos()
		{
			return Ok(_contratacaoService.RetornaContratados());
		}

		[HttpGet("{cpf}")]
		public IActionResult BuscaUsuarioCpf(string cpf)
		{
			try
			{
				return Ok(_contratacaoService.BuscaUsuarioCpf(cpf));
			}
			catch (System.Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet, Route("busca/servicos")]
		public IActionResult RetornaServicos()
		{
			try
			{
				return Ok(_contratacaoService.RetornaServicos());
			}
			catch (System.Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost, Route("contrata/servicos")]
		public IActionResult ContrataServicos([FromBody] List<Contratados> lista)
		{
			try
			{
				return Ok(_contratacaoService.ContrataServicos(lista));
			}
			catch (System.Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
