// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Browser } from '@capacitor/browser';

const Tab2: React.FC = () => {  
  const texto = 'El Capacitor Browser es un complemento de Capacitor que permite abrir un navegador web en la aplicación móvil. Proporciona métodos para abrir una URL en el navegador predeterminado del dispositivo o en una ventana de navegador personalizada dentro de la aplicación.';      
  const openCapacitorSite = async () => {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Componente: Browser</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className='contenedor'>
            <p>{texto}</p>
            <IonButton onClick={openCapacitorSite}>Probar Browser</IonButton>           
          </div>
        </IonContent>
      </IonPage>
    );    
};

export default Tab2;
