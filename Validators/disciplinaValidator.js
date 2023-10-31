import * as Yup from 'yup';

const disciplinasValidator = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Valor curto')
        .max(20, 'Valor Grande')
        .required('Campo obrigatório'),
    curso: Yup.string()
        .max(30)
        .required('Campo obrigatório')
})

export default disciplinasValidator