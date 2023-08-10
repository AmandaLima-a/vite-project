import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    width: 342px;
    height: 74px;
    margin-top: 60px;
    border: ${props => props.isBack ? '1px solid #fff' : 'none'};
    outline: none;
    
    color:#fff;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5;
    }

    img {
        transform: ${ props => props.isBack && 'rotateY(180deg)'};
    }
`