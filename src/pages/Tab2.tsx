// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Browser } from '@capacitor/browser';
import { Network } from '@capacitor/network';
import { Toast } from '@capacitor/toast';

function showToast(message: string){
  const showToast = async () => {
    await Toast.show({
      text: message,
      duration: 'short',
      position: 'center'
    });
  };
  showToast();
}

const Tab2: React.FC = () => {  
  const texto = 'El Capacitor Browser es un complemento de Capacitor que permite abrir un navegador web en la aplicación móvil. Proporciona métodos para abrir una URL en el navegador predeterminado del dispositivo o en una ventana de navegador personalizada dentro de la aplicación.';      
  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    showToast(status.connectionType.toString()+": "+status.connected.toString());
  };
  logCurrentNetworkStatus();
  const openCapacitorSite = async () => {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Plugin: Browser</IonTitle>
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
