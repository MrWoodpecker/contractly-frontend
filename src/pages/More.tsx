import { IonBackButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Page } from '../types/global';
import { useHistory } from 'react-router';


const More: React.FC<Page> = (props) => {

  const history = useHistory();


  const navigateToSubPage = (type: 'OPENSOURCE' | 'IMPRINT' | 'PRIVACY') => {
    
    if(type === 'OPENSOURCE') {
      history.push('/more/opensource');
    } else if(type === 'IMPRINT') {
      history.push('/more/imprint');
    } else if(type === 'PRIVACY') {
      history.push('/more/privacy');
    }

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>More</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">More</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonCard>
          <IonCardContent className="ion-no-padding">
            <IonItem detail>
              <IonLabel>
                Profil erstellen
              </IonLabel>
            </IonItem>
            <IonItem detail>
              <IonLabel>
                App-Informationen
              </IonLabel>
            </IonItem>
            <IonItem detail>
              <IonLabel>
                Kontakt
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent className="ion-no-padding">
            <IonItem detail>
              <IonLabel>
                Einstellungen
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <p className="listheader">Rechtliches</p>
        <IonCard className="mt-0">
          <IonCardContent className="ion-no-padding">
            <IonItem detail onClick={() => navigateToSubPage('PRIVACY')}>
              <IonLabel>
                Datenschutz
              </IonLabel>
            </IonItem>
            <IonItem detail onClick={() => navigateToSubPage('IMPRINT')}>
              <IonLabel>
                Impressum
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <p className="listheader">Contractly</p>
        <IonCard className="mt-0">
          <IonCardContent className="ion-no-padding">
            <IonItem detail onClick={() => navigateToSubPage('OPENSOURCE')}>
              <IonLabel>
                Open-Source
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default More;
