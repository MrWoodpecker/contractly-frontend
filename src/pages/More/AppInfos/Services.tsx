import { 
    IonBackButton, 
    IonButtons, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import { Page } from '../../../types/global';


const Services: React.FC<Page> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Genutzte Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Genutzte Services</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonCard>
            <IonCardHeader>
                <img style={{ margin: "0 auto", width: "50%", display: "block" }} src="assets/img/oeversetter.png" />
            </IonCardHeader>
            <IonCardTitle className="ion-padding">
                Översetter
            </IonCardTitle>
            <IonCardContent className="ion-padding">
                <p className="mb-6">
                    Neural Machine Translation from German to the low-resource 
                    language Low German.
                </p>
                <p className="mb-6">
                    https://www.översetter.de/
                </p>
            </IonCardContent>
        </IonCard>

        <IonCard>
            <IonCardHeader>
                <h1 className="text cen">Coolors</h1>
            </IonCardHeader>
            <IonCardTitle className="ion-padding">
                Coolors
            </IonCardTitle>
            <IonCardContent className="ion-padding">
                <p className="mb-6">
                    The super fast color schemes generator!
                </p>
                <p className="mb-6">
                    https://coolors.co/
                </p>
            </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Services;
