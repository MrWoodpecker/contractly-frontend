import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useRef } from 'react';

/* Custom Pages */
import Contracts from './pages/Contracts';
import More from './pages/More';
import OpenSource from './pages/More/OpenSource';
import Imprint from './pages/More/Imprint';
import Privacy from './pages/More/Privacy';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Custom CSS */
import './theme/global.scss';


setupIonicReact();


const App: React.FC = () => {

  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);


  return (
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet ref={ routerRef }>
            <Route 
              render={ () => <Contracts router={ routerRef.current } /> } 
              exact 
              path="/contracts" />
            <Route 
              render={ () => <More router={ routerRef.current } /> } 
              exact 
              path="/more" />
            <Route 
              render={ () => <OpenSource router={ routerRef.current } /> } 
              exact
              path="/more/opensource" />
            <Route 
              render={ () => <Imprint router={ routerRef.current } /> } 
              exact
              path="/more/imprint" />
            <Route 
              render={ () => <Privacy router={ routerRef.current } /> } 
              exact
              path="/more/privacy" />
            <Route exact path="/">
              <Redirect to="/contracts" />
            </Route>
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};


export default App;
