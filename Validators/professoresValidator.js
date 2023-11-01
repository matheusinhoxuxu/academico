import * as Yup from 'yup';

const professoresValidator = Yup.object().shape({
  nome: Yup.string()
      .min(2, 'valor muito curto')
      .max(20, 'Valor muito grande')
      .required('Campo obrigátorio'),
  cpf: Yup.string(),
  matricula: Yup.number(),
  salario: Yup.string().strict(),
  email: Yup.string(),
  telefone: Yup.string(),
  cep: Yup.string().strict(),
  logradouro: Yup.string().strict(),
  complemento: Yup.string(),
  numero: Yup.string().strict(),
  bairro: Yup.string().strict(),

  })

  export default professoresValidator