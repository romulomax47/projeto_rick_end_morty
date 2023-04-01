import styled from "styled-components";


export const Main = styled.main`
   padding-top:1.5rem;
   height: fit-content;
   width: 100%;
   text-align:center;
   background-color: var(--bg-blue);
   display: flex;
   justify-content: center;
   align-items: center;
   .wap{
      max-width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
   font-size:1.5em;
   @media(min-width:765px){
      width: 50%;
   }
   h1{
      font-weight: 600;
      margin-bottom: 1rem;
      font-weight: 600;
      span{
         color:orange;
         font-weight: bold;
      }
      @media(min-width:765px){
      margin-top: 3rem;
      font-size: 3rem;     
   }
   }
   p{
      color:black;
      font-weight: bold;
      margin-bottom: 2rem;
   }
   div{
     display:flex;
     justify-content:space-between;
     gap:1rem;
     margin-bottom:1rem;
     img{
         width:40%;
      }
   }

`