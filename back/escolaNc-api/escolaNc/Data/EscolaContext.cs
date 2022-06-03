using escolaNc.Models;
using Microsoft.EntityFrameworkCore;

namespace escolaNc.Data
{
	public class EscolaContext : DbContext
	{
		public EscolaContext(DbContextOptions<EscolaContext> options) : base(options) {}
		public DbSet<Usuario> Usuarios { get; set; }
		public DbSet<Servico> servicos { get; set; }
		public DbSet<Contratados> SERVICOS_CONTRATADOS { get; set; }
	}
}
