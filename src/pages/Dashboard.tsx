import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLoading,
} from '@ionic/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from '../firebase';
import Display from './tours/Display';

const Dashboard: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const username = useSelector((state: any) => state.user.username);
  const history = useHistory();
  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace('/');
  }
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading duration={2000} message='Logging out...' isOpen={busy} />
      <IonContent className='ion-padding'>
        <h3>Welcome! {username}</h3>
        <h4>Here are our tours</h4>
        <IonButton onClick={logout}>Logout</IonButton>
        <Display/>
      </IonContent>
    </IonApp>
  );
};

export default Dashboard;
