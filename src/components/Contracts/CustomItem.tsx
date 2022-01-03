import { IonItem, IonLabel, IonNote } from '@ionic/react';
import React from 'react';

import { Contract } from '../../types/contracts';


type type_Props = {
  contract: Contract
}
const CustomItem: React.FC<type_Props> = (props) => {

    return (
        <IonItem detail>
            <IonLabel>
                { props.contract.name }
            </IonLabel>
            <IonNote slot='end'>
                { props.contract.pricePerRange } €
            </IonNote>
        </IonItem>
    );
};


export default CustomItem;
