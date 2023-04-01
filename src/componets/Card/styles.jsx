import styled from "styled-components";

export const Container = styled.section`
      width:100%;
      border: 1px solid gray;
      border-radius:10px;
      display:flex;
      flex-direction:column;
      @media(min-width:765px){
         width: 500px;
      }
      img{
            position:relative;
            background-color:var(--bg-blue);
            width:100%;
            border-radius:10px 10px 0 0;
         }
      div{
         padding: 0px 15px;
         h3{  
            margin-top:1rem;
            width:100%;
            text-align:center; 
            font-size:1.8rem;

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
`