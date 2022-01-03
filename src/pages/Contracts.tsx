import { 
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
import { useHistory } from 'react-router';

/* Custom Components */
import CustomList from '../components/Contracts/CustomList';
import { useLanguageStore } from '../stores/language';
import SubHeader from '../components/Contracts/SubHeader';
import UserAvatar from '../components/Contracts/UserAvatar';

/* Stores */
import { useContractsStore } from '../stores/contracts';

/* Custom Types */
import { Page } from '../types/global';

/* etc */
import lang from '../etc/language.json';




const Contracts: React.FC<Page> = (props) => {

    const gl_language = useLanguageStore(state => state.language);
    const gl_categories = useContractsStore(state => state.categories);

    const history = useHistory();


    /**
     * Go to another page.
     * 
     * @param type 
     */
    const onClick_showMorePage = () => {

        history.push('/more');

    }


    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>{ lang.Pages.Contracts.Titles.Contracts[gl_language] }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{ lang.Pages.Contracts.Titles.Contracts[gl_language] }</IonTitle>
                        <UserAvatar onClick={onClick_showMorePage} />
                    </IonToolbar>
                </IonHeader>

                <SubHeader />

                {
                    gl_categories.map(category => (
                        <CustomList
                            category={category} />
                    ))
                }

                <IonCard>
                    <IonCardContent className="ion-no-padding">
                        <IonItem detail>
                            <IonLabel>
                                { lang.Pages.Contracts.Labels.AddNewContract[gl_language] }
                            </IonLabel>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

            {/* <IonModal
            isOpen={showDetailsModal}
            swipeToClose
            presentingElement={props.router || undefined}
            onDidDismiss={() => setShowDetailsModal(false) }>
                <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Netflix</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                <IonCard>
                    <IonCardContent className="ion-no-padding">
                    <IonItem detail>
                        <IonLabel>
                        Name
                        </IonLabel>
                        <IonNote slot='end'>
                        Netflix
                        </IonNote>
                    </IonItem>
                    <IonItem detail>
                        <IonLabel>
                        Category
                        </IonLabel>
                        <IonNote slot='end'>
                        Entertainment
                        </IonNote>
                    </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent className="ion-no-padding">
                    <IonItem detail>
                        <IonLabel>
                        Price
                        </IonLabel>
                        <IonNote slot='end'>
                        17,99 € per month
                        </IonNote>
                    </IonItem>
                    <IonItem detail>
                        <IonLabel>
                        Payment Method
                        </IonLabel>
                        <IonNote slot='end'>
                        PayPal
                        </IonNote>
                    </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent className="ion-no-padding">
                    <IonItem detail>
                        <IonLabel>
                        Vertragsstart
                        </IonLabel>
                        <IonNote slot='end'>
                        01.12.2015
                        </IonNote>
                    </IonItem>
                    <IonItem detail>
                        <IonLabel>
                        Mindestlaufzeit
                        </IonLabel>
                        <IonNote slot='end'>
                        keine
                        </IonNote>
                    </IonItem>
                    <IonItem detail>
                        <IonLabel>
                        Verlängerung nach MVL
                        </IonLabel>
                        <IonNote slot='end'>
                        keine
                        </IonNote>
                    </IonItem>
                    <IonItem detail>
                        <IonLabel>
                        Kündigungserinnerung
                        </IonLabel>
                        <IonNote slot='end'>
                        deaktiviert
                        </IonNote>
                    </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent className="ion-no-padding">
                    <IonItem detail>
                        <IonLabel>
                        <p>christian.arp@posteo.de</p>
                        <p>Kundennummer</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem detail>
                        <IonLabel>
                        <p>49 130 890 678</p>
                        <p>Buchungskonto</p>
                        </IonLabel>
                    </IonItem>
                    </IonCardContent>
                </IonCard>
                </IonContent>
            </IonModal> */}
            </IonContent>
        </IonPage>
    );
};


export default Contracts;
