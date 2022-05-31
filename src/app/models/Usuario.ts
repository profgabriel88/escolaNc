export class Usuario {
  nome: string = '';
  idade: number = 0;
  cpf: string = '';
  rg: string = '';
  data_nasc: string = '';
  endereco: string = '';
  cidade: string = '';

  public constructor(init?: Partial<Usuario>) {
    Object.assign(this, init);
  }
}
