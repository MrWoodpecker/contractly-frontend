import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

import { Category } from '../../types/contracts';
import CustomItem from './CustomItem';


type type_Props = {
  category: Category,
  onClick: (id: number) => void;
}
const CustomList: React.FC<type_Props> = (props) => {

  return (
    <React.Fragment>
      <p className="listheader">{ props.category.name }</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          { props.category.entries.map(entry => (
            <CustomItem
              contract={entry}
              onClick={props.onClick} />
          )) }
        </IonCardContent>
      </IonCard>
    </React.Fragment>
  );
};


export default CustomList;
