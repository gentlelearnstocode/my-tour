import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [input, setInput] = useState<string>('');
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Tour</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton routerLink='/login'>Login</IonButton>
        <IonButton routerLink='/signup'>Sign up</IonButton>
      </IonContent>
    </IonApp>
  );
};

export default Home;
