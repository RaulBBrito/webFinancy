export interface ITipoItemMes {
  id_tipo_item_mes?: string,
  desc_tipo_item_mes?: string,
  status_tipo_item_mes?: string
}

export interface ISelectChaveValor {
  chave?: string,
  valor?: string
}

export interface ICartao{
  id_cartao?: string,
  desc_cartao?: string,
  num_final_cartao?: string,
  data_venc_cartao?: string,
  data_corte_cartao?: string,
  bandeira_cartao?: string,
  vlr_limite_cartao?: string,
}

export interface IMensal{
  id_mensal?: string,
	data_mes_ano_mensal?: string,
	vlrt_renda_mensal?: string,
	vlrt_despesa_mensal?: string,
	vlrt_cartao_mensal?: string,
	vlr_saldo_conta_mensal?: string,
	id_user?: string
}