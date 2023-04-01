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
   div{
     margin-top:1rem;
     align-self:center;
     img{
      width:80%;
   } 
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
      font-size: 2em;
      span{
         color:orange;
         font-weight: bold;
      }
      @media(min-width:765px){
         width:400px;
         text-align:start;
         margin-top: 3rem;
         font-size: 3rem;    
   }
   }
   p{
      color:black;
      font-weight: bold;
      margin-bottom: 2rem;
         @media(min-width:765px){
            text-align:start;
            font-size: 1rem;
         }
   };

   div{
     display:flex;
     justify-content: space-between;
     gap:1.5rem;
     margin-bottom:1rem;

     @media(min-width:765px){
            justify-content:start;
            gap:2rem;
         }
     img{
         width:40%;
         @media(min-width:765px){
            width:30%;
            
         }
      }
   }

`