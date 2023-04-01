import React, { useState } from 'react';
import Icon_ke from '../../assets/imgs/icon-ke.png'
import Icon_store from '../../assets/imgs/icon-shop.png';
import { Container } from './styles';

function Card({ icon }) {

   return (
      <Container>
         <img src={icon != 'ke' ? Icon_ke : Icon_store} alt={'icon store'} />
         <div>
            <h3>Registre seu Comércio</h3>
            <p>Descubra os benefícios dos +200 aliados da comunidade que já trabalham com a Saave</p>
            <button>Saiba mais</button>
         </div>
      </Container>
   );
}

export default Card;