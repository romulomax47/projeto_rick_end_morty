import React from 'react';
import Header from '../../componets/Header';
import { Main, ContextMain } from './styles';
import TogetherWithUs from '../../componets/TogetherWithUs'
import Icon_google from '../../assets/imgs/icon-google2.png'
import Icon_apple from '../../assets/imgs/icon-apple.png'

function Home() {
   return (
      <>
         <Header />
         <Main>
            <dir className='wap'>
               <ContextMain>
                  <h1>Da um saalve,<br /> que eu te saalvo!</h1>
                  <p>Nascido aqui e feito pra nossa gente com o propósito de estimular iniciativas empreendedoras, o comércio local, a geração de empregos, além de valorizar o sentido pertencimento à comunidade.</p>
                  <div>
                     <img src={Icon_google} alt="Icon google play"/>
                     <img src={Icon_apple} alt="Icon apple store" />               
                  </div>
               </ContextMain>

               <div>
                  <img src="https://www.saalve.com/assets/images/image-primary.png" alt="" />
               </div>
            </dir>
         </Main>
         <TogetherWithUs/>


      </>
   );
}

export default Home;