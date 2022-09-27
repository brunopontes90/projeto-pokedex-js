import React, { useEffect, useState } from "react";
import Axios from "axios";
import ListUsers from "./Components/List/ListUsers";
import axios from "axios";

function App() {
  const [values, setValues] = useState();
  const [listUsers, setListUsers] = useState();

  console.log("Pokemon: " + listUsers)

  const handleChangeValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  // PEGANDO OS DADOS;
  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then((response) => { setListUsers(response.data) });
  });

  // BOTÃO PARA ENVIAR OS DADOS
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/insert", {
      idpokemon: values.idpokemon,
      nomepokemon: values.nomepokemon,
      tipopokemon: values.tipopokemon,
      imagempokemon: values.imagempokemon,
    }).then((response) => {
      console.log(response);
    });
  }

  // BOTÃO PARA ATUALIZAR DADOS
  const handleEdit = () => {
    axios.put("http://localhost:3001/update", {
      idpokemon: values.idpokemon,
      nomepokemon: values.nomepokemon,
      tipopokemon: values.tipopokemon,
      imagempokemon: values.imagempokemon,
    });
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/delete/${listUsers.id}`);
  }

  return (
    <div className="m-2">
      <ListUsers
        listUsers={listUsers}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
