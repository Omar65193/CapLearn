// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton,IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const Tab4: React.FC = () => {  
  const texto = 'Capacitor haptics es un complemento de Capacitor que permite acceder a la funcionalidad de retroalimentación háptica (vibración) en dispositivos móviles. Este complemento proporciona métodos para controlar la vibración del dispositivo y brindar una experiencia táctil agradable a los usuarios. Prueba las vibraciones tocando los siguientes botones:';          
    const hapticsImpactMedium = async () => {
        await Haptics.impact({ style: ImpactStyle.Medium });
        await Haptics.vibrate();
    };
    
    const hapticsImpactLight = async () => {
        await Haptics.impact({ style: ImpactStyle.Light });
        await Haptics.vibrate();
    };
        
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Componente: Haptics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className='contenedor'>
            <p>{texto}</p>                                         
          </div>
          <div className="buttons">            
            <IonFabButton color="tertiary" onClick={hapticsImpactMedium}>1</IonFabButton>                  
            <IonFabButton color="dark" onClick={hapticsImpactLight}>2</IonFabButton>                          
        </div>         
        </IonContent>
      </IonPage>
    );    
};

export default Tab4;
