import styled from "styled-components";
import background from "../../assets/Images/background.svg"



export const Conteiner = styled.div`
    background: url("${background}");
    background-size: cover ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
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
    padding: 50px 36px;
`;


export const Saldacao = styled.h1`
    color: #FFFFFF;
    font-size: 34px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
    `;

export const InputLabel = styled.p`
    color: #EEEEEE;
    font-size: 18px;
    font-weight: 700;
    padding-left: 25px;
    
    `;

export const Input = styled.input`
    color: #FFFFFF;
    background: #FFFFFF40;
    font-size: 24px;
    font-weight: 400;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    border-radius: 14px;
    border: none;
    outline: none;
    margin-bottom: 40px;
    
    `;

export const BtnCadastro = styled.button`
    background: #000000CC;
    width: 342px;
    height: 74px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: #FFFFFF;
    border: none;
    text-decoration: none;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 80px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;


