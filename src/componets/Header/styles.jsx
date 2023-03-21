import styled from "styled-components";

export const Container = styled.header`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 1rem;
   background-color: var(--color-gray);

   .wap{
      min-width: 90%;
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   img{
      width: 70px;   
   }
   i{
      font-size: 35px;
      cursor: pointer;

      @media(min-width: 768px){
         display: none;
      }
   }
`

export const Nav = styled.nav`
      display: none;
      ul{
      font-size: 1.2rem;
      list-style: none;
      display: flex;
      gap: 2rem;
      font-weight: 500;
      li{
         cursor: pointer;
         &:hover{
            color: var(--color-gray-hover);
         }
      }
   }
   @media(min-width: 768px){
      display: flex;
      } 
`