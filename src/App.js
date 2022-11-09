import React, { useState } from 'react';

export default function App() {
	const [phoneRegister, setPhoneRegister] = useState({
		user: '',
		phone: '',
	});
	const [phones, setPhones] = useState([]);
	const [search, setSearch] = useState('');

	const handleInputChange = (event) => {
		setPhoneRegister((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};
	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	const handleClick = () => {
		if (phoneRegister.user && phoneRegister.phone) {
			setPhones([...phones, phoneRegister]);
		} else {
			alert('É preciso adicionar nome e telefone');
		}
		setPhoneRegister({
			user: '',
			phone: '',
		});
	};
	const handleDelete = (user) => {
		setPhones(phones.filter((p) => p.user !== user));
	};

	const filter = (arr) => arr.filter((f) => f.user.includes(search));
	return (
		<div className="App">
      <br />
			<label htmlFor="user">Nome:</label>
			<input
				onChange={handleInputChange}
				value={phoneRegister.user}
				type="text"
				name="user"
				id="user"
			/>
			<br />
			<label htmlFor="phone">Telefone:</label>
			<input
				onChange={handleInputChange}
				value={phoneRegister.phone}
				type="text"
				name="phone"
				id="phone"
			/>
			<br />
			<button type="button" onClick={handleClick}>
				Enviar
			</button>
			<button type="button" onClick={() => setPhones([])}>
				Deletar todos
			</button>
			<br />
			<br />
			<label htmlFor="findPerson">Buscar por nome: </label>
			<input
				name="findPerson"
				type="text"
				id="findPerson"
				value={search}
				onChange={handleSearch}
			/>
			<br />
			{phones &&
				filter(phones).map((el, id) => (
					<div key={id}>
						<span>
							{el.user} - {el.phone}
						</span>
						<button onClick={() => handleDelete(el.user)}>Delete</button>
					</div>
				))}
		</div>
	);
}
