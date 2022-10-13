import styled, { keyframes } from "styled-components"

const animation = keyframes`
    100% {
      transform: translateX(100%);
    }
`

export const ItemBase = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.color.skeleton.background};
    display: inline-block;
    position: relative;
    overflow: hidden;
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.color.skeleton.color} 0%,
            ${({ theme }) => theme.color.skeleton.opacity} 50%,
            ${({ theme }) => theme.color.skeleton.color} 100%
        );
        animation: ${animation} 2s infinite;
        content: "";
    }
`

export const Base = styled.section`
    width: 100%;
    display: grid;
`
