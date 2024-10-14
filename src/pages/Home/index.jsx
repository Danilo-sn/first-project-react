import people from "../../assets/Images/people.svg"
import arrow from "../../assets/Images/arrow.svg"

import {
  Conteiner,
  ConteinerItens,
  Imagen,
  Saldacao,
  InputLabel,
  Input,
  BtnCadastro,
} from "./Stylles";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {

  const [users, setUser] = useState([]);
  const name = useRef()
  const age = useRef()
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: name.current.value,
      age: age.current.value
    })

    setUser([...users, newUser])
    //setUser([...users, { id: Math.random(), name: name.current.value, age: age.current.value },])
    navigate('usuarios')

  };



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

      </ConteinerItens>

    </Conteiner>
  )
}

export default App
