import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

import { Category } from '../../types/contracts';
import CustomItem from './CustomItem';


type type_Props = {
  category: Category
}
const CustomList: React.FC<type_Props> = (props) => {

  return (
    <React.Fragment>
      <p className="listheader">{ props.category.name }</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          { props.category.entries.map(entry => (
            <CustomItem
              contract={entry} />
          )) }
        </IonCardContent>
      </IonCard>
    </React.Fragment>
  );
};


export default CustomList;
