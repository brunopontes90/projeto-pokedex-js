import React from "react";
import "./ListPokemon.css";
import { Link } from "react-router-dom";

function ListPokemon(props) {
    const { listPokemon, handleDelete, handleEdit } = props;

    const handleUserList = () => {
        return typeof listPokemon !== "undefined" && listPokemon.map((data, index) => {
            return (
                <div className="">
                    <div className="">
                        <img
                            src={data.imagempokemon}
                            className="img-pokemon"
                        />
                    </div>
                    <div className="d-flex ml-4">
                        <p className="">#{data.idpokemon}</p>
                        <p>{data.nomepokemon}</p>
                    </div>
                    <div className="">
                        <p>{data.tipopokemon}</p>
                    </div>
                </div>
            );
        })
    }
    return (
        <div className="container-fluid">
            <div className="ml-5 d-flex justify-content-center">
                <div className="">
                    <h1 className="">Pokémon</h1>
                </div>
                <div className="mt-2 ml-5">
                    <Link to={"/create"} className="btn btn-success">+</Link>
                </div>
            </div>
            {handleUserList()}
        </div>
    )
}

export default ListPokemon;