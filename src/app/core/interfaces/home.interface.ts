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
  tiposComum: TiposComumCartao[];
  tiposCartao: TiposComumCartao[];
}

export interface TiposComumCartao {
  dia?: string,
  mes?: string,
  descricao?: string,
  statusPagamento?: boolean,
  descricaoStatus?: string,
  valor?: string,
  tipocard?: string
}