// Importar los módulos necesarios

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet, IonInput, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
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
            <IonList>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>Button</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Es un componente  que al presionarlo activa una función específica en un dispositivo o sistema.</IonCardContent>
                </IonCard> 
              </IonItem>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>FabButton</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Botón circular prominente que se encuentra en una posición fija y flota sobre la interfaz de usuario.</IonCardContent>
                </IonCard> 
              </IonItem>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>Card</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Una tarjeta en IU es un componente visual que muestra información de manera organizada y compacta, utilizando elementos como texto, imágenes y botones.</IonCardContent>
                </IonCard> 
              </IonItem>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>Icon</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Un icono es un símbolo gráfico que representa de manera visual una función, objeto o concepto en una interfaz de usuario.</IonCardContent>
                </IonCard>
              </IonItem>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>Input</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Elemento interactivo que permite al usuario ingresar datos o proporcionar información a través de campos de texto.</IonCardContent>
                </IonCard>
              </IonItem>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>List</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Componente visual que muestra un conjunto de elementos organizados verticalmente.</IonCardContent>
                </IonCard>
              </IonItem>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>UI Component</IonCardSubtitle>
                    <IonCardTitle>Pop Over</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>Proporcionando información o funcionalidad adicional sin interrumpir la experiencia principal de la interfaz.</IonCardContent>
                </IonCard>
              </IonItem>
            </IonList> 
        </IonContent>
      </IonPage>
    );    
};

export default Home;
