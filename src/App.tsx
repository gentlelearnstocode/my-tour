import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { getCurrentUser } from './firebase';
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/action';

const Routing: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Signup} exact />
        <Route path='/tour' component={Dashboard} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        dispatch(setUserState(user.email));
        window.history.replaceState({}, '', '/tour');
      } else {
        window.history.replaceState({}, '/', '/');
      }
      setBusy(false);
    });
  }, []);
  return <IonApp>{busy ? <IonSpinner /> : <Routing />}</IonApp>;
};

export default App;
