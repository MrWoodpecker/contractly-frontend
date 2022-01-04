import { 
    IonCard, 
    IonCardContent, 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonLabel,
    IonNote,
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonViewWillEnter
} from '@ionic/react';
import { useHistory } from 'react-router';

/* Custom Components */
import { useLanguageStore } from '../stores/language';

/* Stores */
import { useContractsStore } from '../stores/contracts';

/* Custom Types */
import { Page } from '../types/global';

/* etc */
import lang from '../etc/language.json';
import { useState } from 'react';
import { Contract } from '../types/contracts';




const ContractDetails: React.FC<Page> = (props) => {

    const [contract, setContract] = useState<Contract | undefined>();

    const gl_language = useLanguageStore(state => state.language);
    const gl_categories = useContractsStore(state => state.categories);
    
    const gl_getContractById = useContractsStore(state => state.getContractById);

    const history = useHistory<{ id: number } | undefined>();


    useIonViewWillEnter(() => {

        let payload = history.location.state;

        console.log(payload);
        if(payload) {
            setContract(gl_getContractById(payload.id));
        }

    });


    const onClick_editDetail = (type: 'NAME' | 'CATEGORY') => {
        if(type === 'NAME') {
            history.push('/contract/edit?type=name');
        } else if(type === 'CATEGORY') {
            history.push('/contract/edit?type=category');
        }
        
    }


    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Details</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent className="ion-no-padding">
                        <IonItem onClick={() => onClick_editDetail('NAME')} detail>
                            <IonLabel>
                                Name
                            </IonLabel>
                            <IonNote slot='end'>
                                { contract?.name }
                            </IonNote>
                        </IonItem>
                        <IonItem onClick={() => onClick_editDetail('CATEGORY')} detail>
                            <IonLabel>
                                Category
                            </IonLabel>
                            <IonNote slot='end'>
                                TODO:
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
                                { contract?.pricePerRange } € per { contract?.priceRange } { contract?.priceRangeType }
                            </IonNote>
                        </IonItem>
                        <IonItem detail>
                            <IonLabel>
                                Payment Method
                            </IonLabel>
                            <IonNote slot='end'>
                                TODO:
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
        </IonPage>
    );
};


export default ContractDetails;
