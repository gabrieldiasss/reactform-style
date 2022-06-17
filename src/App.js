import './global.css'
import './styles.css'

function App() {

	return (
		<div className="app">
			<form>
				<h1>Criar publicação</h1>

				<div className='field' >
					<label className='label'>Slug</label>
					<input type="text" />
				</div>

				<div className='field' >
					<label className='label'>Título</label>
					<input type="text" />
				</div>

				<div className='field' >
					<label>Descrição</label>
					<input type="email" />
				</div>

				<div className='field' >
					<label>Conteúdo</label>
					<input type="password" />
				</div>

				<button>PUBLICAR</button>
			</form>
		</div>
	);
}

export default App;
