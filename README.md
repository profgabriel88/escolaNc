# EscolaNc

Projeto desenvolvido para ser utilizado como base no programa Escola Nota Control (programa de estágio).
O projeto foi utilizado para ensinar aos estagiários como se cria uma API usando .NET Core 3.1/C# e como se realiza o
acesso a partir de um frontend criado usando o Framework Angular. O resultado é uma aplicação web no modelo
MVC.

O banco de dados utilizado foi o MS Sql Server. na pasta sql encontram-se os scripts necessários para rodar
o sistema. É necessário alterar a string de conexão no arquivo apssetings.Development.json.

Para executar o projeto:

Abra o terminal e navegue até o diretorio escolaNc/front> 
npm install para instalar as dependências do projeto
npm start ou ng serve

Execute o arquivo escola-api.sln em back/escolaNc-api utilizando o Visual Studio
Execute projeto.

Acesse http://localhost:4200

Desenvolvido por: Gabriel Dai

-------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
