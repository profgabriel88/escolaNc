import { FormsModule } from '@angular/forms';
import { Component,  OnInit, } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public edita: boolean = false;

  public nome = '';
  public idade = '';
  public cpf = '';
  public rg = '';
  public dt_nasc = '';
  public endereco = '';
  public cidade = '';

  constructor() { }

  ngOnInit() {

  }

  public editar (item: any) {
    this.edita = !this.edita;
    this.nome = item.nome;
    this.idade = item.idade;
    this.cpf = item.cpf;
    this.rg = item.rg ;
    this.dt_nasc = item.data_nasc;
    this.endereco = item.endereco;
    this.cidade = item.cidade;
  }

  salvar() {
    let item = {
      nome: this.nome,
      idade: parseInt(this.idade),
      cpf: this.cpf,
      rg: this.rg,
      data_nasc: this.dt_nasc,
      endereco: this.endereco,
      cidade: this.cidade
    };

    let i = this.usuarios.findIndex(x => x.cpf == this.cpf);

    this.usuarios.splice(i, 1, item);

    this.edita = false;
  }

  public setCpf (item: any) {
    this.cpf = item.cpf;
    this.nome = item.nome;

  }

  public excluir () {
    let i = this.usuarios.findIndex(x => x.cpf == this.cpf);
    this.usuarios.splice(i, 1);
  }

  public usuarios =
  [
    {
      "nome": "Fátima Lara Mirella Barros",
      "idade": 41,
      "cpf": "651.303.991-61",
      "rg": "34.853.872-8",
      "data_nasc": "17/04/1981",
      "endereco": "Rua Darcy Pio",
      "cidade": "Três Lagoas",
    },
    {
      "nome": "Marcos Vinicius Bryan Lucas Oliveira",
      "idade": 22,
      "cpf": "567.026.881-48",
      "rg": "39.673.954-4",
      "data_nasc": "20/03/2000",
      "endereco": "Rua Eduardo Santos Pereira",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Carolina Catarina Lavínia Carvalho",
      "idade": 53,
      "cpf": "740.375.051-93",
      "rg": "49.917.496-3",
      "data_nasc": "09/04/1969",
      "endereco": "Rua Cláudio Abramo",

      "bairro": "Conjunto Aero Rancho",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Joana Caroline Jennifer Brito",
      "idade": 50,
      "cpf": "269.115.991-48",
      "rg": "45.021.750-4",
      "data_nasc": "24/05/1972",
      "endereco": "Rua São Gonçalo",

      "bairro": "Vila Nasser",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Sandra Ayla Aparício",
      "idade": 25,
      "cpf": "070.557.051-77",
      "rg": "18.178.074-4",
      "data_nasc": "02/04/1997",
      "endereco": "Avenida Presidente Ernesto Geisel",

      "bairro": "Cabreúva",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Isadora Isabel Josefa da Cruz",
      "idade": 69,
      "cpf": "429.671.381-77",
      "rg": "24.575.859-8",
      "data_nasc": "15/01/1953",
      "endereco": "Rua Betim",

      "bairro": "Guanandi II",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Isabella Rosângela Jennifer Teixeira",
      "idade": 35,
      "cpf": "399.972.021-20",
      "rg": "24.503.701-9",
      "data_nasc": "19/01/1987",
      "endereco": "Rua Nazaré",

      "bairro": "Jardim Planalto 2ª Seção",
      "cidade": "Ponta Porã",
    },
    {
      "nome": "Carolina Pietra Beatriz da Silva",
      "idade": 73,
      "cpf": "288.486.541-18",
      "rg": "29.935.022-8",
      "data_nasc": "14/04/1949",
      "endereco": "Rua Anúncia Salvadora Colman",

      "bairro": "Vila São Braz",
      "cidade": "Dourados",
    },
    {
      "nome": "Maya Yasmin Nunes",
      "idade": 42,
      "cpf": "910.993.261-50",
      "rg": "27.306.802-7",
      "data_nasc": "16/02/1980",
      "endereeco": "Rua Perciliana Barbosa Ferreira",

      "bairro": "Jardim Paulo Coelho Machado",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Luana Marina Alícia Ferreira",
      "idade": 31,
      "cpf": "444.877.411-22",
      "rg": "19.931.115-8",
      "data_nasc": "12/03/1991",
      "endereco": "Rua Doutor Paulo Galhardi",

      "bairro": "Jardim Aeroporto",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Roberto Rodrigo Kevin Assunção",
      "idade": 79,
      "cpf": "645.418.051-46",
      "rg": "24.234.700-9",
      "data_nasc": "06/03/1943",
      "endereco": "Avenida Gury Marques 5464",

      "bairro": "Jardim Monumento",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Sandra Jennifer Alves",
      "idade": 61,
      "cpf": "644.600.851-19",
      "rg": "50.285.300-1",
      "data_nasc": "07/02/1961",
      "endereco": "Rua João Pedro de Souza 1025",

      "bairro": "Jardim Monte Líbano",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Juan Matheus Campos",
      "idade": 75,
      "cpf": "240.027.141-01",
      "rg": "43.975.005-2",
      "data_nasc": "26/02/1947",
      "endereco": "Avenida Aeroclube",

      "bairro": "Sobrinho",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Nina Rosa da Rosa",
      "idade": 32,
      "cpf": "822.757.931-00",
      "rg": "44.972.787-7",
      "data_nasc": "03/01/1990",
      "endereco": "Rua Torta"
    },
    {
      "nome": "Manuel Caio Ramos",
      "idade": 20,
      "cpf": "622.782.171-35",
      "rg": "16.371.188-4",
      "data_nasc": "14/01/2002",
      "endereco": "Rua Iturama",

      "bairro": "Residencial Ponta Porã I",
      "cidade": "Ponta Porã",
    },
    {
      "nome": "Débora Teresinha Vitória Corte Real",
      "idade": 42,
      "cpf": "507.223.031-73",
      "rg": "15.433.377-3",
      "data_nasc": "05/01/1980",
      "endereco": "Avenida Jose Villela de Andrade Junior",
      "numero": 813,
      "bairro": "Jardim do Corrego",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Alexandre Felipe Cauã Ribeiro",
      "idade": 26,
      "cpf": "372.083.101-90",
      "rg": "27.873.368-2",
      "data_nasc": "02/01/1996",
      "endereco": "Rua Liberato Leite de Faria Laguecho",
      "numero": 921,
      "bairro": "Jardim Flórida",
      "cidade": "Dourados",
    },
    {
      "nome": "Samuel Fernando Kevin Nascimento",
      "idade": 30,
      "cpf": "870.482.201-39",
      "rg": "35.097.708-2",
      "data_nasc": "15/05/1992",
      "endereco": "Rua Carmem Bazzano Pedra",
      "numero": 142,
      "bairro": "Residencial Oliveira III",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Raimunda Stella da Conceição",
      "idade": 47,
      "cpf": "326.881.731-97",
      "rg": "39.400.183-7",
      "data_nasc": "10/03/1975",
      "endereco": "Avenida Ricardo Brandão",
      "numero": 832,
      "bairro": "Chácara Cachoeira",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Esther Isabelle Monteiro",
      "idade": 24,
      "cpf": "432.896.731-20",
      "rg": "23.110.956-8",
      "data_nasc": "24/02/1998",
      "endereco": "Rua Casa Branca",
      "numero": 560,
      "bairro": "Vila Futurista",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Benjamin Anthony Alexandre Pereira",
      "idade": 78,
      "cpf": "379.928.751-50",
      "rg": "39.685.376-6",
      "data_nasc": "04/02/1944",
      "endereco": "Rua Álvaro Lins",
      "numero": 933,
      "bairro": "Núcleo Habitacional Universitárias",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Arthur Guilherme Moura",
      "idade": 70,
      "cpf": "582.786.671-79",
      "rg": "11.153.194-9",
      "data_nasc": "07/05/1952",
      "endereco": "Rua José da Silva",
      "numero": 164,
      "bairro": "Residencial Cedrinho",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Leandro Carlos Eduardo Kaique Rodrigues",
      "idade": 79,
      "cpf": "719.923.411-25",
      "rg": "38.531.387-1",
      "data_nasc": "05/04/1943",
      "endereco": "Rua Luiz Hilário Campo Leite",
      "numero": 271,
      "bairro": "Loteamento Cristo Redentor",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Diego César Moraes",
      "idade": 25,
      "cpf": "655.423.391-15",
      "rg": "27.264.492-4",
      "data_nasc": "26/02/1997",
      "endereco": "Rua Guilherme Rocha",

      "bairro": "Vivendas do Parque",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Mariana Priscila Nicole Sales",
      "idade": 56,
      "cpf": "584.061.181-64",
      "rg": "32.784.408-5",
      "data_nasc": "26/05/1966",
      "endereco": "Rua Avencas",

      "bairro": "Vila Morumbi",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Helena Alessandra Rezende",
      "idade": 31,
      "cpf": "921.209.411-22",
      "rg": "23.975.907-2",
      "data_nasc": "18/03/1991",
      "endereco": "Rua Olívia Moura",

      "bairro": "Vila Nova Capital",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Francisco Victor Caldeira",
      "idade": 73,
      "cpf": "492.838.131-97",
      "rg": "22.678.591-9",
      "data_nasc": "07/05/1949",
      "endereco": "Rua Baependi",

      "bairro": "Vila Marli",
      "cidade": "Campo Grande",
    },
    {
      "nome": "Márcio Augusto Lima",
      "idade": 48,
      "cpf": "432.302.191-71",
      "rg": "17.253.708-3",
      "data_nasc": "03/01/1974",
      "endereco": "Rua Anatalício Antunes Silva",

      "bairro": "Residencial Júlia de Oliveira Cardinal",
      "cidade": "Ponta Porã",
    },
    {
      "nome": "Regina Flávia Vieira",
      "idade": 44,
      "cpf": "327.028.151-03",
      "rg": "42.534.626-2",
      "data_nasc": "19/04/1978",
      "endereco": "Rua Marechal Deodoro",

      "bairro": "Dom Bosco",
      "cidade": "Corumbá",
    },
    {
      "nome": "Heitor Edson Bernardes",
      "idade": 78,
      "cpf": "726.945.471-09",
      "rg": "25.650.346-1",
      "data_nasc": "20/01/1944",
      "endereco": "Rua Tamanduá-mirim",

      "bairro": "Rancho Alegre III",
      "cidade": "Campo Grande",
    }
  ]
}
