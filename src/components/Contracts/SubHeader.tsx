import { 
    IonCard, 
    IonCardContent
} from '@ionic/react';

/* Custom Stores */
import { useContractsStore } from '../../stores/contracts';
import { useLanguageStore } from '../../stores/language';
import { useSettingsStore } from '../../stores/settings';

import lang from '../../etc/language.json';


const SubHeader: React.FC = () => {

    const gl_language = useLanguageStore(state => state.language);
    const gl_priceRange = useSettingsStore(state => state.priceRange);
    const gl_getNumberOfContracts = useContractsStore(state => state.getNumberOfContracts);
    const gl_getTotalCostsOfContracts = useContractsStore(state => state.getTotalCostsOfContracts);


    return (
        <div className="subheader">
            <IonCard>
                <IonCardContent>
                <p style={{ fontSize: "1.2rem", fontWeight: 500 }}>{ gl_getTotalCostsOfContracts(gl_priceRange) } €</p>
                <p>
                    { 
                        gl_priceRange === 'WEEK' ? lang.Pages.Contracts.Labels.CostPerWeek[gl_language] :
                        gl_priceRange === 'MONTH' ? lang.Pages.Contracts.Labels.CostPerMonth[gl_language] :
                        gl_priceRange === 'YEAR' ? lang.Pages.Contracts.Labels.CostPerYear[gl_language] : ''
                    }
                </p>
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonCardContent>
                <p style={{ fontSize: "1.2rem", fontWeight: 500 }}>{ gl_getNumberOfContracts() }</p>
                <p>
                    { 
                        gl_getNumberOfContracts() === 1 ? lang.Pages.Contracts.Labels.Contract[gl_language] : lang.Pages.Contracts.Labels.Contracts[gl_language] 
                    }
                </p>
                </IonCardContent>
            </IonCard>
        </div>
    );
};


export default SubHeader;
