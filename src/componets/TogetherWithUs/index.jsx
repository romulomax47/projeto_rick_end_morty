import React from 'react';
import { Container, Cards } from './styles';
import Card from '../Card';

function TogetherWithUs() {
   return (
      <Container>
         <div className='wap'>
            <h1>Junti-se ao <span>Saalve</span></h1>
            <Cards>
               <Card icon='ke'/> 
               <Card icon ='store'/> 
               {/* <section>
                  <img src={Icon_store} alt="" />
                  <div>
                     <h3>Registre seu Comércio</h3>
                     <p>Descubra os benefícios dos +200 aliados da comunidade que já trabalham com a Saave</p>
                     <button>Saiba mais</button>
                  </div>
               </section> */}
            </Cards>
         </div>
      </Container>

   );
}

export default TogetherWithUs;