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
     * Navigate to "More" page.
     */
    const onClick_showMorePage = () => {

        history.push('/more');

    }


    /**
     * 
     */
    const onClick_contract = (id: number) => {

        let payload = {
            id: id,
        }

        history.push('/contractdetails', payload)

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
                            category={category}
                            onClick={onClick_contract} />
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
            </IonContent>
        </IonPage>
    );
};


export default Contracts;
