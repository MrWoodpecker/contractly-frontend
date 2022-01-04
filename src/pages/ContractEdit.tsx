import { 
    IonButton,
    IonCard, 
    IonCardContent, 
    IonContent, 
    IonHeader, 
    IonInput, 
    IonItem, 
    IonLabel,
    IonListHeader,
    IonNote,
    IonPage, 
    IonRadio, 
    IonRadioGroup, 
    IonTitle, 
    IonToolbar, 
    useIonViewDidEnter, 
    useIonViewWillEnter
} from '@ionic/react';
import { useHistory, useLocation } from 'react-router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

/* Custom Components */
import { useLanguageStore } from '../stores/language';

/* Stores */
import { useContractsStore } from '../stores/contracts';

/* Custom Types */
import { Page } from '../types/global';

/* etc */
import lang from '../etc/language.json';
import React, { useState } from 'react';
import { Contract } from '../types/contracts';



type InputName = {
    name: string
}

type InputCategory = {
    category: string
}
const ContractEdit: React.FC<Page> = (props) => {

    const history = useHistory();
    const { handleSubmit, control } = useForm<InputName | InputCategory>({
        defaultValues: {
            name: 'Netflix',
            category: 'ENTERTAINMENT'
        }
    });
    const url_type = new URLSearchParams(useLocation().search).get('type') as 'name' | 'category';

    const onSubmit: SubmitHandler<InputName> = data => {
        console.log(data)
        history.goBack();
    }

    useIonViewWillEnter(() => {
        console.log(url_type);
    });


    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    { url_type === 'name' ? <IonTitle>Name</IonTitle> : null }
                    { url_type === 'category' ? <IonTitle>Kategorie</IonTitle> : null }
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                {/* NAME */}
                { url_type === 'name' ?
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <IonCard>
                            <IonCardContent className="ion-no-padding">
                                <IonItem>
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field }) => 
                                            <IonInput 
                                                value={field.value}
                                                onIonChange={(e) => field.onChange(e)} />
                                        }
                                    />
                                </IonItem>
                            </IonCardContent>
                        </IonCard>

                        <IonButton className="ion-margin" type="submit" expand='block'>Save</IonButton>
                    </form> : null }

                {/* CATEGORY */}
                { url_type === 'category' ?
                    <React.Fragment>
                        <IonCard>
                            <IonItem detail>
                                <IonLabel>
                                    Kategorie hinzufügen...
                                </IonLabel>
                            </IonItem>
                        </IonCard>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <IonCard>
                                <IonCardContent className="ion-no-padding">
                                    <IonItem>
                                        <Controller
                                            name="category"
                                            control={control}
                                            render={({ field }) => 
                                                <IonRadioGroup 
                                                    value={field.value} 
                                                    onIonChange={e => field.onChange(e.detail.value)}>
                                                    <IonItem>
                                                        <IonLabel>Entertainment</IonLabel>
                                                        <IonRadio slot="end" value="ENTERTAINMENT" />
                                                    </IonItem>
                                        
                                                    <IonItem>
                                                        <IonLabel>Pay TV</IonLabel>
                                                        <IonRadio slot="end" value="PAYTV" />
                                                    </IonItem>
                                        
                                                    <IonItem>
                                                        <IonLabel>Mitgliedschaften</IonLabel>
                                                        <IonRadio slot="end" value="MEMBERSHIP" />
                                                    </IonItem>
                                                </IonRadioGroup>
                                            }
                                        />
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>

                            <IonButton className="ion-margin" type="submit" expand='block'>Save</IonButton>
                        </form> 
                    </React.Fragment> : null }

            </IonContent>
        </IonPage>
    );
};


export default ContractEdit;
