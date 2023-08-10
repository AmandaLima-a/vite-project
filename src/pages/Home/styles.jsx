import styled from 'styled-components'
import Background from '../../assets/fundo1.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    
`

export const Img = styled.img`
    margin-top: 30px;
`

export const Titulo = styled.p`
    color: #EEE;
    letter-spacing: -0.408px;
    font-style: normal; 
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    margin-left: 25px;
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    padding: 15px 20px 15px 25px;
    margin-bottom: 34px;
    border-radius: 14px;
    border: none;
    outline: none;

    color: #fff;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
`

