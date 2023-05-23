// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet } from '@ionic/react';
import { camera, trash, close, home } from 'ionicons/icons';
import React, { useState } from 'react';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Toast } from '@capacitor/toast';

const Tab1: React.FC = () => {  
  const texto = 'Un Action Sheet en Ionic es un componente de interfaz de usuario que muestra una lista de acciones o opciones al usuario en forma de hoja deslizable desde la parte inferior de la pantalla. Es una forma común de presentar un conjunto de opciones o acciones contextualmente relevantes para que el usuario las seleccione.';
  const [showActionSheet, setShowActionSheet] = useState(false);

  const openActionSheet = () => {
    setShowActionSheet(true);
  };

  const closeActionSheet = () => {
    setShowActionSheet(false);
  };
    
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
                  text: 'Mensaje 1',
                  handler: () => {                   
                    closeActionSheet();
                    const showToast = async () => {
                      await Toast.show({
                        text: 'Este es un Toast',
                        duration: 'short',
                        position: 'center'
                      });
                    };
                    showToast();
                  }
                },
                {
                  text: 'Mensaje 2',
                  handler: () => {                    
                    closeActionSheet();
                    const showToast = async () => {
                      await Toast.show({
                        text: 'Este es un plugin',
                        duration: 'short',
                        position: 'center'
                      });
                    };
                    showToast();
                  }
                },
                {
                  text: 'Mensaje 3',
                  handler: () => {
                    closeActionSheet();
                    const showToast = async () => {
                      await Toast.show({
                        text: 'Este muestra un texto',
                        duration: 'short',
                        position: 'center'
                      });
                    };
                    showToast();
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
