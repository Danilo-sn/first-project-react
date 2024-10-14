import styled from "styled-components";
import background from "../../assets/Images/background1.svg"
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
    background: url("${background}");
    background-size: cover ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Imagen = styled.img`
    margin-top: 30px;
`;

export const ConteinerItens = styled.div`
    background: linear-gradient(157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(45px);
    padding: 50px 36px;
    min-height: 100vh
`;

export const Saldacao = styled.h1`
    color: #FFFFFF;
    font-size: 34px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
    `;

export const BtnVoltar = styled(Link)`
    background: transparent;
    width: 342px;
    height: 74px;
    margin-top: 100px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotateY(180deg);
    }
`;

export const Users = styled.li`
    color: #FFFFFF;
    background: #FFFFFF40;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 400;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 342px;
    height: 58px;
    padding: 0px 25px 0px 25px;
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;

    button{
        border: none;
        outline: none;
        cursor: pointer;
        background: none;
    }

`
