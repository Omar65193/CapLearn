// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Browser } from '@capacitor/browser';
import { Keyboard } from '@capacitor/keyboard';


const Tab3: React.FC = () => {  
  const texto = 'El Capacitor Keyboard es un complemento de Capacitor que permite interactuar con el teclado del dispositivo en una aplicación móvil. Proporciona métodos para mostrar, ocultar y controlar el comportamiento del teclado virtual en la aplicación.';        
  const handleInputFocus = () => {
    Keyboard.show();
  };  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Componente: Keyboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className='contenedor'>
            <p>{texto}</p>           
            <IonInput label="Escribe aqui:" placeholder="Tu texto" onFocus={handleInputFocus}></IonInput>          
          </div>
        </IonContent>
      </IonPage>
    );    
};

export default Tab3;
