import React from 'react';

import { Container, Nav } from './styles';

function Header() {
   return (
      <Container>
         <div className='wap'>
            <div>
               <img src='https://www.saalve.com/assets/images/logo.png' />
            </div>
            <i class="bi bi-list"></i>

            {/* telas maiores que 768 */}
            <Nav>
               <ul>
                  <li>Quem somos</li>
                  <li>Parceiros</li>
                  <li>Contato</li>
               </ul>
            </Nav>
         </div>
      </Container>
   );
}

export default Header;