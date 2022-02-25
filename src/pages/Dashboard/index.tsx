import React, {useState , FormEvent } from 'react';
import api from "../../services/api";

import {Title ,Form , Container , Card , Cards } from "./styles"

interface Pokemonapi{
    types: [];
    img: string;
}

const Dashboard: React.FC = () =>{
    const[newPokemon, setNewPokemon] = useState('');
    const [Pokemon, setPokemon] = useState<Pokemonapi[]>([]);

    const pesquisarPokemon = async () =>{

        try{
            const response = await api.get(`/pokemon/${newPokemon}`);
            const pokemonDados = response.data;
            setPokemon([...Pokemon, {types: pokemonDados.types.map((type: any) => type.type.name), img: pokemonDados.sprites.other.dream_world.front_default}]);
            console.log(pokemonDados)
        }catch(err){

        }
    
    }

    return(
        <Container>
            <Title>Procure seu Pokemon: </Title>

            <Form onSubmit={pesquisarPokemon}>
                <input type="number"placeholder="Digite o Pokémon" onChange={e => setNewPokemon(e.target.value)} />
                <button onClick={pesquisarPokemon}>Pesquisar</button>
            </Form>

                <Cards>
                {Pokemon.map((poke,index)=>(
                    <Card key={index}>
                        <p>
                            {poke.types.join(" | ")}
                        </p>

                    <img src={poke.img}  />
                    </Card>

                ))}
                </Cards>

        </Container>
    )
}

export default Dashboard;
