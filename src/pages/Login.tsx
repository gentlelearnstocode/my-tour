import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLoading,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebase';
import { setUserState } from '../redux/action';
import { toast } from './toast';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [busy, setBusy] = useState<boolean>(false);
  async function login() {
    setBusy(true);
    const res: any = await loginUser(username, password);
    if (res) {
      dispatch(setUserState(res.user.email));
      history.replace('/tour');
      toast('Logged in successfully');
    }
    setBusy(false);
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading duration={2000} message='Logging in...' isOpen={busy} />
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
        <IonButton onClick={login} expand='block'>Login</IonButton>
        <p>
          Don't have an account yet? <Link to='/signup'>Signup</Link>
        </p>
      </IonContent>
    </IonApp>
  );
};

export default Login;
