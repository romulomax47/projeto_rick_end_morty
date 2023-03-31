import React from 'react';
import Header from '../../componets/Header';
import { Main, ContextMain } from './styles';

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
                     {/* <span>Baixe já o seu</span> */}
                     {/* <i class="bi bi-google-play"></i> */}
                     <img src="https://www.saalve.com/assets/images/btn-download.png" alt="" />
                  </div>
               </ContextMain>

               <div>
                  <img src="https://www.saalve.com/assets/images/image-primary.png" alt="" />
               </div>
            </dir>
         </Main>

      </>
   );
}

export default Home;