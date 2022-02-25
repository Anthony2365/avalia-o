import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 48px;
    text-align: center;
    color: #FFC71C;
    max-width: 590px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.div`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border-right: 0;
        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, "#04d361")};
        }
    }
`;
export const Cards = styled.div`
margin-top: 10px

`;
export const Card = styled.div`
    max-width: 210px;
    img{
        width: 100%;
    }
   p{
    text-align: center;
    
   }
`;