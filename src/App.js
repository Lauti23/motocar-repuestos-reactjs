import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardComponent from './components/Cards/Cards';



function App () {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className='main'>
        <CardComponent brand='HONDA' model='CRF 300L' price='$659.375' img='https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2020/12/Honda-CRF300L-2021-9-scaled.jpg'/>
        <CardComponent brand='HONDA' model='CRF 250R' price='$1.102.960' img='https://www.motofichas.com/images/phocagallery/Honda/crf250r-2022/02-honda-crf250r-2022-estudio.jpg'/>
        <CardComponent brand='HONDA' model='CRF 450R' price='$1.162.900' img='https://www.moto1pro.com/sites/default/files/fotosprincipales/01_369900_2023_honda_crf450r.jpg'/>

      </main>
    </>
  );
}

export default App;

