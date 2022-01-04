import { 
  IonAccordion,
  IonAccordionGroup,
    IonBackButton, 
    IonButtons, 
    IonCard, 
    IonCardContent,
    IonContent, 
    IonHeader, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import { Page } from '../../../types/global';
import technologycategories from '../../../etc/usedtechnologies.json';


const Technologies: React.FC<Page> = (props) => {

  const renderTechnologies = () => {

    let technologyElements: Array<JSX.Element> = [];


    technologycategories.forEach((category, index) => {
      technologyElements.push(
        <p key={`category-header-${index}`} className="listheader">{ category.letter }</p>
      );

      category.entries.sort((a, b) => a.name > b.name ? 1 : -1);

      technologyElements.push(
        <IonCard key={`category-${index}`} className="mt-0">
          <IonCardContent className="ion-no-padding">
            <IonAccordionGroup>
              {
                category.entries.map((entry, index) => (
                  <IonAccordion key={`entry-${category.letter}-${index}`} value={ entry.name }>
                    <IonItem slot="header">
                      <IonLabel>
                        { entry.name }
                      </IonLabel>
                    </IonItem>
                    <IonList slot="content">
                      <IonItem>
                        <p dangerouslySetInnerHTML={{ __html: entry.license_html }} className="text extrasmall pb-4"></p>
                      </IonItem>
                    </IonList>
                  </IonAccordion>
                ))
              }
            </IonAccordionGroup>
          </IonCardContent>
        </IonCard>
      );
    }); 


    return technologyElements;

  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Genutzte Technologien</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Genutzte Technologien</IonTitle>
        </IonToolbar>
      </IonHeader>

      { renderTechnologies() }

      </IonContent>
    </IonPage>
  );
};

export default Technologies;
