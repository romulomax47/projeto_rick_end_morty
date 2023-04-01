import styled from "styled-components";

export const Container = styled.section`
   padding: 3rem 0;
   width:100%;
   background-color:#ededee;

   .wap{
      min-width: 90%;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: space-between;
   }
   h1{
      text-align:center;
      font-size:3rem;
      margin-bottom:2rem;
      font-weight:500;
      span{
         color:#0099dc;
         font-weight:bold;
      }
   }
   
`
export const Cards = styled.section`
   width:100%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   gap:3rem;
   padding:0 1rem;
     
   @media(min-width:765px){
      flex-direction:row;
   }
`