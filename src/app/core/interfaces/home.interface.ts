export interface IResumo {
  efetuadoRecebido?: IValor;
  aguardando?: IValor;
  valorTotal?: IValor;
}

export interface IValor {
  descricao?: string;
  valor?: string;
}

export interface Card {
  dia?: string,
  mes?: string,
  descricao?: string,
  statusPagamento?: boolean,
  descricaoStatus?: string,
  valor?: string,
  tipocard?: string
}