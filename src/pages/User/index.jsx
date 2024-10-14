import avatar from "../../assets/Images/avatar.svg"
import arrow from "../../assets/Images/arrow.svg"
import trash from "../../assets/Images/lixeira.svg"

import {
  Conteiner,
  ConteinerItens,
  Imagen,
  Saldacao,
  BtnVoltar,
  Users
} from "./Stylles";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {

  const [users, setUser] = useState([]);


  useEffect(() => {

    async function listUsers() {

      const { data: registeredUsers } = await axios.get("http://localhost:3001/users");
      setUser(registeredUsers)
    }

    listUsers()


  }, []);

  async function deleteUser(userID) {
    await axios.delete(`http://localhost:3001/users/${userID}`)

    const newUser = users.filter((user) => user.id !== userID);
    setUser(newUser)

  }

  return (

    <Conteiner>
      <Imagen alt="logo-imagen" src={avatar} />
      <ConteinerItens>
        <Saldacao>Usuários</Saldacao>
        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p className="name_user">{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={trash} alt="lata-de-lixo" /></button>
            </Users>
          ))}
        </ul>
        <BtnVoltar to={"/"}><img src={arrow} alt="seta" />Voltar </BtnVoltar>
      </ConteinerItens>

    </Conteiner>
  )
}

export default User
