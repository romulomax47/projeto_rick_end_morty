import React from 'react';
import Icon_ke from '../../assets/imgs/icon-ke.png'
import Icon_store from '../../assets/imgs/icon-shop.png'
import { Container, Cards } from './styles';

function TogetherWithUs() {
   return (
      <Container>
         <div className='wap'>
            <h1>Junti-se ao <span>Saalve</span></h1>
            <Cards>
               <section>
                  <img src={Icon_ke} alt="" />
                  <div>
                     <h3>Registre seu Comércio</h3>
                     <p>Descubra os benefícios dos +200 aliados da comunidade que já trabalham com a Saave</p>
                     <button>Saiba mais</button>
                  </div>
               </section>
               <section>
                  <img src={Icon_store} alt="" />
                  <div>
                     <h3>Registre seu Comércio</h3>
                     <p>Descubra os benefícios dos +200 aliados da comunidade que já trabalham com a Saave</p>
                     <button>Saiba mais</button>
                  </div>
               </section>
            </Cards>
         </div>
      </Container>

   );
}

export default TogetherWithUs;