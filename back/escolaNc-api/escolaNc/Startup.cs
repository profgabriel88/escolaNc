using escolaNc.Data;
using escolaNc.Interfaces;
using escolaNc.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace escolaNc
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<EscolaContext>(
				context => context.UseSqlServer(Configuration.GetConnectionString("Default"))	
			);
			services.AddScoped<PopulaBancoService>();
			services.AddCors();
			services.AddControllers();
			services.AddTransient<IUsuarioService, UsuarioService>();
			services.AddTransient<IServicoService, ServicoService>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env, PopulaBancoService popula)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				popula.Popula();
			}

			//app.UseHttpsRedirection();

			app.UseCors(
			  x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()
			);

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
