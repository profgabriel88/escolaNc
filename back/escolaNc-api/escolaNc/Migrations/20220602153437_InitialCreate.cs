using Microsoft.EntityFrameworkCore.Migrations;

namespace escolaNc.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    cpf = table.Column<string>(nullable: false),
                    nome = table.Column<string>(nullable: true),
                    idade = table.Column<int>(nullable: false),
                    rg = table.Column<string>(nullable: true),
                    data_nasc = table.Column<string>(nullable: true),
                    endereco = table.Column<string>(nullable: true),
                    cidade = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.cpf);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
