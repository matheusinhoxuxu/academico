import * as Yup from 'yup';

const cursoValidator = Yup.object().shape({
    nome: Yup.string()
    .min(2, 'valor muito curto')
    .max(20, 'Valor muito grande')
    .required('Campo obrigátorio'),
    duracao: Yup.number(),
    modalidade: Yup.string().strict().required('Campo obrigátorio'),
  })

  export default cursoValidator