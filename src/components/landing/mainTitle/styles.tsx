import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
 0% { 
    transform: translateX(-200%);
    opacity: 0%;
  }
  60%{
    opacity: 100%;
  }

  100%{
    transform: translateX(0%)
    font-size: 70px;
    opacity: 100%;
  }
`;

const slideRight = keyframes`
 0% { 
    transform: translateX(200%);
    opacity: 0%;
  }
  60%{
    opacity: 100%;
  }
  100%{
    transform: translateX(0%)
    font-size: 70px;
    opacity: 100%;
  }
`;

const slideUp = keyframes`
 0% { 
    transform: translateY(100%);
    opacity: 0%;
  }

  100%{
    transform: translateY(0%)
    font-size: 70px;
    opacity: 100%;
  }
`;

const mainContAni = keyframes`
 0% { 
  margin: 250px auto;
  }
  100%{
    margin: 0px auto;
transform: scale(0.7)

  }
`;

export const MainTitleCont = styled.div`
  margin: 250px auto;
  width: fit-content;
  text-align: center;

  animation: ${mainContAni} 1.2s ease-out forwards;
  animation-delay: 3s;
  animation-fill-mode: forwards;

  h1 {
    font-size: 70px;
  }

  h1:first-child {
    animation: ${slideLeft} 1.2s ease-out forwards;
  }

  h1:nth-child(2) {
    animation: ${slideRight} 1.2s ease-out forwards;
  }

  h2 {
    animation: ${slideUp} 1.2s ease-out forwards;
    animation-delay: 1.5s;
    opacity: 0%;
    animation-fill-mode: forwards;
  }
`;
