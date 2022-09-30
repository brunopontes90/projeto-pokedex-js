import React, { useEffect, useState } from "react";
import Axios from "axios";
import ListPokemon from "./Components/List/ListPokemon";
import axios from "axios";
import Menu from "./Components/Layouts/Menu/Menu";

function App() {
  const [values, setValues] = useState();
  const [listPokemon, setListPokemon] = useState();

  const handleChangeValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  // PEGANDO OS DADOS;
  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then((response) => { setListPokemon(response.data) });
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
    axios.delete(`http://localhost:3001/delete/${listPokemon.id}`);
  }

  return (
    <div className="m-2">
      {/* <ListPokemon
        listPokemon={listPokemon}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      /> */}
      <Menu/>
    </div>
  );
}

export default App;
