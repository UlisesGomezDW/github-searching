import styled, { keyframes } from "styled-components"

const animation = keyframes`
    100% {
      transform: translateX(100%);
    }
`

export const ItemBase = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f1f4f8;
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
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        animation: ${animation} 2s infinite;
        content: "";
    }
`

export const Base = styled.section`
    width: 100%;
    display: grid;
`
