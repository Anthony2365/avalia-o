import React, {useState , FormEvent } from 'react';
import api from '../../services/api';


interface Pokemonapi{
    forms:[
        {
            name: string;
        }
    ]
    types:[
        {
            type:{
                name: string;
            }
       
        },
        {
            type:{
                name:string;
            }
        }
    ]
}
const Dashboard: React.Fc = () =>{
    const[newPokemon, setNewPokemon] = useState('');
    const [Pokemon, setPokemon] = useState<Pokemonapi[]>([]);

    const pesquisarPokemon = async (event: FromEvent<HTMLFormElement>) =>{
        event.preventDefault();

        try{
            const response = await api.get(`${newPokemon}/json`);
            const pokemonDados = response.Data;

            setPokemon([...pokemonDados, pokemonDados]);

        }catch(err){

        }
    
    }

    return(
        <Container>
            <Title>Procure seu Pokemon: </Title>

            <Form onSubmit={pesquisarPokemon}>
                <input type="number"placeholder="Digite o Pokémon" onChange={e => setNewPokemon(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </Form>

        </Container>
    )
}
