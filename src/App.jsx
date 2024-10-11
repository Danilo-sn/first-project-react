import people from "./assets/Images/people.svg"
import arrow from "./assets/Images/arrow.svg"
import trash from "./assets/Images/lixeira.svg"

import {
  Conteiner,
  ConteinerItens,
  Imagen,
  Saldacao,
  InputLabel,
  Input,
  BtnCadastro,
  Users
} from "./Stylles";
import { useRef, useState } from "react";

function App() {

  const [users, setUser] = useState([]);
  const name = useRef()
  const age = useRef()

  function addNewUser() {

    setUser([...users, { id: Math.random(), name: name.current.value, age: age.current.value },])

  };

  function deleteUser(userID) {

    const newUser = users.filter((user) => user.id !== userID);
    setUser(newUser)

  }

  return (

    <Conteiner>
      <Imagen alt="logo-imagen" src={people} />
      <ConteinerItens>
        <Saldacao>Olá!</Saldacao>
        <InputLabel>Nome</InputLabel>
        <Input ref={name} placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        <Input ref={age} placeholder="Idade"></Input>
        <BtnCadastro onClick={addNewUser}>Cadastrar <img src={arrow} alt="seta" /></BtnCadastro>
        <ul>
          {users.map((user) => (

            <Users key={user.id}>
              <p className="name_user">{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={trash} alt="lata-de-lixo" /></button>
            </Users>

          ))}
        </ul>
      </ConteinerItens>

    </Conteiner>
  )
}

export default App
