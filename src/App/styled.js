import styled, { css } from 'styled-components'

export const Box = styled.span`
    height:8rem;
    width:8rem;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    ${props => props.pos === "top" && css`
        border-top:none;
    `}
    ${props => props.pos === "bottom" && css`
        border-bottom: none;
    `}
    ${props => props.side === "left" && css`
        border-left:none ;
    `}
    ${props => props.side === "right" && css`
        border-right:none;
    `}
`;