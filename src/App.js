import './global.css'
import './styles.css'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
	slug: yup.string().required("Esse campo é obrigatório"),
	title: yup.string().required().min(6, "minimo de 6 caracteres"),
	description: yup.string().required(),
	content: yup.string().required()
}).required();

function App() {

	const { register, handleSubmit, formState:{ errors } } = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmitForm = data => fetch("http://localhost:3000/posts", {
		method: "POST",
		body: JSON.stringify({
			data
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		  }
	})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err))

	return (
		<div className="app">
			<form onSubmit={handleSubmit(onSubmitForm)} >
				<h1>Criar publicação</h1>

				<div className='field' >
					<label className='label'>Slug</label>
					<input type="text" {...register("slug")} />
					<p>{errors.slug?.message}</p>
				</div>

				<div className='field' >
					<label className='label'>Título</label>
					<input type="text" {...register("title")} />
					<p>{errors.title?.message}</p>
				</div>

				<div className='field' >
					<label>Descrição</label>
					<input type="text" {...register("description")} />
					<p>{errors.description?.message}</p>
				</div>

				<div className='field' >
					<label>Conteúdo</label>
					<input type="text" {...register("content")} />
					<p>{errors.content?.message}</p>
				</div>

				<button type='submit'>PUBLICAR</button>
			</form>
		</div>
	);
}

export default App;
