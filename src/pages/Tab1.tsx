// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet } from '@ionic/react';
import { camera, trash, close, home } from 'ionicons/icons';
import React, { useState } from 'react';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Toast } from '@capacitor/toast';
import { Geolocation } from '@capacitor/geolocation';

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

const Tab1: React.FC = () => {  
  const texto = 'Un Action Sheet en Ionic es un componente de interfaz de usuario que muestra una lista de acciones o opciones al usuario en forma de hoja deslizable desde la parte inferior de la pantalla. Es una forma común de presentar un conjunto de opciones o acciones contextualmente relevantes para que el usuario las seleccione.';
  const [showActionSheet, setShowActionSheet] = useState(false);

  const openActionSheet = () => {
    setShowActionSheet(true);
  };

  const closeActionSheet = () => {
    setShowActionSheet(false);
  };   
  var latitud = "No se obtuvo la latitud";
  var longitude = "No se obtuvo la longitud";
  var accuracy = "No se obtuvo la certeza";
  const printCurrentPosition = async () => {
    const res = await Geolocation.getCurrentPosition();
    if(res.coords.latitude!=undefined)
      latitud = "Latitud: "+res.coords.latitude.toString();
    if(res.coords.latitude!=undefined)
      longitude = "Longitud: "+res.coords.longitude.toString();
    if(res.coords.accuracy!=undefined)
      accuracy = "Certeza: "+res.coords.accuracy.toString();      
  };
  printCurrentPosition();
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Componente: Action Sheet</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className='contenedor'>
            <p>{texto}</p>
            <IonButton onClick={openActionSheet}>Probar Action Sheet</IonButton>
            <IonActionSheet
              isOpen={showActionSheet}
              onDidDismiss={closeActionSheet}
              buttons={[
                {
                  text: 'Mostrar mi latitud',
                  handler: () => {                   
                    closeActionSheet();
                    showToast(latitud);
                  }
                },
                {
                  text: 'Mostrar mi longitud',
                  handler: () => {                    
                    closeActionSheet();
                    showToast(longitude);
                  }
                },
                {
                  text: 'Mostrar la certeza',
                  handler: () => {
                    closeActionSheet();
                    showToast(accuracy);
                  }
                }
              ]}
            ></IonActionSheet>
          </div>
        </IonContent>
      </IonPage>
    );    
};

export default Tab1;
