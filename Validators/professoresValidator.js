import * as Yup from 'yup';

const professoresValidator = Yup.object().shape({
  nome: Yup.string()
      .min(2, 'valor muito curto')
      .max(20, 'Valor muito grande')
      .required('Campo obrigátorio'),
  cpf: Yup.string().required('Campo obrigátorio'),
  matricula: Yup.number().required('Campo obrigátorio'),
  salario: Yup.string().strict(),
  email: Yup.string().required('Campo obrigátorio'),
  telefone: Yup.string().required('Campo obrigátorio'),
  cep: Yup.string().strict().required('Campo obrigátorio'),
  logradouro: Yup.string().strict(),
  complemento: Yup.string(),
  numero: Yup.string().strict(),
  bairro: Yup.string().strict(),

  })

  export default professoresValidator