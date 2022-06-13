using escolaNc.Interfaces;
using escolaNc.Modelos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class LoginController : ControllerBase
	{
		private readonly ILoginService _login;
		public LoginController(ILoginService login)
		{
			_login = login;
		}

		[HttpPost, Route("cadastro")]
		public IActionResult Cadastro([FromBody] Login login)
		{
			try
			{
				return Ok(_login.Cadastro(login));
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}

		[HttpPost, Route("login")]
		public IActionResult Login([FromBody] Login login)
		{
			try
			{
				return Ok(_login.Login(login));
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}
	}
}
