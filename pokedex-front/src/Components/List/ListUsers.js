import React from "react";
import { Link } from "react-router-dom";

function ListUsers(props) {
    const { listUsers, handleDelete, handleEdit } = props;

    const handleUserList = () => {
        return typeof listUsers !== "undefined" && listUsers.map((data, index) => {
            return (
                <tbody key={index}>
                    <tr className="text-center">
                        <th scope="row">#{data.idpokemon}</th>
                        <td>{data.nomepokemon}</td>
                        <td>{data.tipopokemon}</td>
                        <td>
                            <img
                                width={150}
                                src={data.imagempokemon}
                            />
                        </td>
                        <td>
                            <div>
                                <button
                                    className="btn btn-primary mr-3"
                                    onClick={() => handleEdit()}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete()}
                                >
                                    Excluir
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            );
        })
    }
    return (
        <div>
            <div className="d-flex justify-content-around">
                <div className="ml-5">
                    <h1 className="ml-5">Usuários</h1>
                </div>
                <div className="mt-2">
                    <Link to={"/create"} className="btn btn-success">+</Link>
                </div>
            </div>
            <table className="table">
                <thead className="thead-dark text-center">
                    <tr>
                        <th scope="col">Numero Pokedex</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                {handleUserList()}
            </table>

        </div>
    )
}

export default ListUsers;