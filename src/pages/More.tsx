import { 
  IonBackButton, 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { Page } from '../types/global';
import { useHistory } from 'react-router';
import React from 'react';


const More: React.FC<Page> = (props) => {

  const history = useHistory();


  const navigateToSubPage = (page: string) => {
    
    history.push('/more/' + page);

  }


  const menus = [
    {
      name: null,
      items: [
        {
          name: 'Profil erstellen',
          page: 'createaccount'
        },
        {
          name: 'App-Informationen',
          page: 'appinfos'
        },
        {
          name: 'Kontakt',
          page: 'contact'
        }
      ]
    },
    {
      name: null,
      items: [
        {
          name: 'Einstellungen',
          page: 'settings'
        }
      ]
    },
    {
      name: 'Rechtliches',
      items: [
        {
          name: 'Datenschutz',
          page: 'privacy'
        },
        {
          name: 'Impressum',
          page: 'imprint'
        }
      ]
    },
    {
      name: 'Contractly',
      items: [
        {
          name: 'Open-Source',
          page: 'opensource'
        }
      ]
    }
  ];


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

      {
        menus.map((menu, index) => (
          <React.Fragment>
            {
              menu.name ? <p className="listheader">{ menu.name }</p> : null
            }
            <IonCard className={`${index !== 0 ? 'mt-0' : ''}`}>
              <IonCardContent className="ion-no-padding">
                {
                  menu.items.map(item => (
                    <IonItem detail onClick={() => navigateToSubPage(item.page)}>
                      <IonLabel>
                        { item.name }
                      </IonLabel>
                    </IonItem>
                  ))
                }
              </IonCardContent>
            </IonCard>
          </React.Fragment>
        ))
      }
      </IonContent>
    </IonPage>
  );
};

export default More;
