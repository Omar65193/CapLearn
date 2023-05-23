// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet, IonInput, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


const Home: React.FC = () => {  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>¡Bienvenido!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>          
            <div className='main'>
                <span className='description'>CapLearn</span>
                <p className='card'>CapLearn es una aplicación educativa interactiva diseñada para ayudarte a aprender y comprender los conceptos básicos de Capacitor. Con esta aplicación, podrás explorar y experimentar con los diferentes Capacitors básicos, que son componentes fundamentales para el desarrollo de aplicaciones móviles multiplataforma.</p>
            </div>            
        </IonContent>
      </IonPage>
    );    
};

export default Home;
