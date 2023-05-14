export interface IResumo {
  efetuadoRecebido?: IValor;
  aguardando?: IValor;
  valorTotal?: IValor;
}

export interface IValor {
  descricao?: string;
  valor?: string;
}