import {
  IonApp,
  IonContent,
  IonHeader,
  IonInput,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading,
} from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from './toast';
import { signupUser } from '../firebase';

const Signup: React.FC = () => {
  const history = useHistory()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const [busy, setBusy] = useState<boolean>(false);
  async function signup() {
    setBusy(true);
    if (password !== cPassword) {
      return toast('Confirmed password does not match');
    } else if (username === '' || password === '') {
      return toast('Username and password required');
    }
    const res = await signupUser(username, password);
    if (res) {
      history.replace('/login');
      toast('Signup successfully');
    }
    setBusy(false);
  }
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading duration={2000} message='Signing up...' isOpen={busy} />
      <IonContent className='ion-padding'>
        <IonInput
          placeholder='Username'
          onIonChange={(e: any) => setUsername(e.target.value)}
        ></IonInput>
        <IonInput
          type='password'
          placeholder='Password'
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonInput
          type='password'
          placeholder='Confirm Password'
          onIonChange={(e: any) => setCPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={signup} expand='block'>Signup</IonButton>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </IonContent>
    </IonApp>
  );
};

export default Signup;
