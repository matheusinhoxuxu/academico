import * as Yup from 'yup';

const alunoValidator = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'valor muito curto')
        .max(20, 'Valor muito grande')
        .required('Campo obrigátorio'),
    cpf: Yup.string(),
    matricula: Yup.number(),
    email: Yup.string().strict(),
    telefone: Yup.string(),
    cep: Yup.string(),
    logradouro: Yup.string().strict(),
    complemento: Yup.string().strict(),
    numero: Yup.string(),
    bairro: Yup.string().strict(),

})

export default alunoValidator