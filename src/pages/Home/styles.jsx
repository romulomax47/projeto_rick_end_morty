import styled from "styled-components";

export const Main = styled.main`
   height: fit-content;
   width: 100%;
   background-color: var(--bg-blue);
   display: flex;
   justify-content: center;
   align-items: center;
   .wap{
      max-width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      @media(min-width:765px){
      flex-direction: row;
      width: 100%;
   }
   }
   
   img{
      width:90%;
   }
   
`
export const ContextMain = styled.section`
   color: white;
   width: 100%;
   margin-bottom: 2rem;
   @media(min-width:765px){
      width: 50%;
   }
   h1{
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      @media(min-width:765px){
      margin-top: 3rem;
      font-size: 3rem;     
   }
   }
   p{
      color:black;
      font-weight: 600;
   }
   div{
     img{
         width: 150px;
      }
   }

`