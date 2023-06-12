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
	data_mes_ano_mensal: string,
	vlrt_renda_mensal: string,
	vlrt_despesa_mensal: string,
	vlrt_cartao_mensal: string,
	vlr_saldo_conta_mensal: string,
	usuario?: {
		id_user: string,
		nome_user: string,
		email_user: string
	}
}

export interface IRecursoItens {
  id_recurso_itens: string,
  desc_recurso_itens: string,
  status_recurso_itens: string
}

export interface IUser {
  id_user: string,
  nome_user: string,
  email_user: string,
}

export interface IItensMes{
  id_itens_mes: string,
  desc_itens_mes: string,
  vlr_itens_mes: number,
  data_venc_itens_mes: string,
  data_pag_itens_mes: string,
  status_pag_itens_mes: string,
  tipo_item: ITipoItemMes,
  recurso_itens: IRecursoItens,
  cartao: ICartao,
  mensal: IMensal,
  id_user: IUser
}

export interface IItemMesC{
  id_itens_mes?: string,
	desc_itens_mes?: string,
	vlr_itens_mes?: string,
	data_venc_itens_mes?: string,
	data_pag_itens_mes?: string,
	id_tipo_item_mes?: string,
	id_recurso_itens?: string,
	id_cartao?: string,
  id_mensal?: string,
  status_pag_itens_mes?: string,
  error?: number
}

export interface IFormDespesa{
  categoria: string,
  dataPagDespesa: string,
  dataVencDespesa: string,
  descricaoDespesa: string,
  idCartao: string,
  idMensal: string,
  idRecurso: string,
  statusPagamento: string,
  tituloDespesa: string,
  valorDespesa: string,
  tituloRenda: string,
  valorRenda: string,
  dataVencRenda: string,
  dataPagRenda: string,
  descricaoRenda: string,
}

