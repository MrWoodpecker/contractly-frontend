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
import React from 'react';
import { Page } from '../../types/global';
import { useHistory } from 'react-router';
import config from '../../etc/config.json';


const AppInfos: React.FC<Page> = (props) => {

  const history = useHistory();


  const navigateToSubPage = (page: string) => {
    
    history.push('/more/appinfos/' + page);

  }

  const menus = [
    {
      name: null,
      items: [
        {
          name: 'Über die App',
          page: 'about'
        },
        {
          name: 'Häufige Fragen',
          page: 'faq'
        },
        {
          name: 'Genutzte Technolgien',
          page: 'technologies'
        },
        {
          name: 'Genutzte Services',
          page: 'services'
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
          <IonTitle>App-Informationen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">App-Informationen</IonTitle>
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

      <p className="text cen small">Version { config.version } ({ config.revision })</p>
      { config.env === "DEV" ? <p className="text cen small">DEV-VESION</p> : null }
      { config.env === "TEST" ? <p className="text cen small">TEST-VESION</p> : null }

      </IonContent>
    </IonPage>
  );
};

export default AppInfos;
