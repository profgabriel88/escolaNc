export class Servico {
  id: number = 0;
  descricao: string = '';
  preco: number = 0;

  public constructor(init?: Partial<Servico>) {
    Object.assign(this, init);
  }
}
