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
   position:relative;
   width:100%;
   display:flex;
   flex-direction:row;
   justify-content:center;
   gap:3rem;
   
   section{
      width:35%;
      border: 1px solid gray;
      border-radius:10px;
      display:flex;
      flex-direction:column;
      img{
            position:relative;
            background-color:var(--bg-blue);
            width:100%;
            border-radius:10px 10px 0 0;
            z-index:10;
         }
      div{
         padding: 0px 15px;
         h3{  
            margin-top:1rem;
            width:100%;
            text-align:center; 
            font-size:1.5rem;

         }
         p{
            margin-top:0.5rem;
            text-align:center;
            color:gray;
            font-weight:600;
         }
         button{
            margin:1rem 0;
            width:100%;
            padding: 15px 0;
            text-align:center;
            background-color:rgba(250,164,77, .5);
            border-radius:10px;
            color: rgb(255,140,0);
            font-size:1.5rem;
            font-weight:bold;
            cursor:pointer;
            &:hover{
               color:white;
               background-color:rgba(250,164,77, 1);
            }
            
         }
      }
    
      
   }
`