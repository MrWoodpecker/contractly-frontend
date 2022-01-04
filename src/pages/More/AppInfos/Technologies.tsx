import { 
  IonAccordion,
  IonAccordionGroup,
    IonBackButton, 
    IonButtons, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
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


const Technologies: React.FC<Page> = (props) => {
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

      <p className="listheader">C</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          <IonAccordionGroup>
            <IonAccordion value="capacitor">
              <IonItem slot="header">
                <IonLabel>
                  Capacitor
                </IonLabel>
              </IonItem>
              <IonList slot="content">
                <IonItem>
                <p className="text extrasmall">
                  Copyright 2015-present Drifty Co.<br />
                  http://drifty.com/<br /><br />
                  MIT License<br /><br />
                  Permission is hereby granted, free of charge, to any person obtaining
                  a copy of this software and associated documentation files (the
                  "Software"), to deal in the Software without restriction, including
                  without limitation the rights to use, copy, modify, merge, publish,
                  distribute, sublicense, and/or sell copies of the Software, and to
                  permit persons to whom the Software is furnished to do so, subject to
                  the following conditions:<br /><br />
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the Software.<br /><br />
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
                </IonItem>
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCardContent>
      </IonCard>


      <p className="listheader">D</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          <IonAccordionGroup>
            <IonAccordion value="capacitor">
              <IonItem slot="header">
                <IonLabel>
                  dayjs
                </IonLabel>
              </IonItem>
              <IonList slot="content">
                <IonItem>
                <p className="text extrasmall">
                  MIT License<br /><br />
                  Copyright (c) 2018-present, iamkun<br /><br />
                  Permission is hereby granted, free of charge, to any person obtaining a copy
                  of this software and associated documentation files (the "Software"), to deal
                  in the Software without restriction, including without limitation the rights
                  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                  copies of the Software, and to permit persons to whom the Software is
                  furnished to do so, subject to the following conditions:<br /><br />
                  The above copyright notice and this permission notice shall be included in all
                  copies or substantial portions of the Software.<br /><br />
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                  SOFTWARE.
                </p>
                </IonItem>
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCardContent>
      </IonCard>


      <p className="listheader">I</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          <IonAccordionGroup>
            <IonAccordion value="ionic">
              <IonItem slot="header">
                <IonLabel>
                  Ionic
                </IonLabel>
              </IonItem>
              <IonList slot="content">
                <IonItem>
                  <p className="text extrasmall">
                    Copyright 2015-present Drifty Co.<br />
                    http://drifty.com/<br /><br />
                    MIT License<br /><br />
                    Permission is hereby granted, free of charge, to any person obtaining
                    a copy of this software and associated documentation files (the
                    "Software"), to deal in the Software without restriction, including
                    without limitation the rights to use, copy, modify, merge, publish,
                    distribute, sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so, subject to
                    the following conditions:<br /><br />
                    The above copyright notice and this permission notice shall be
                    included in all copies or substantial portions of the Software.<br /><br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </IonItem>
              </IonList>
            </IonAccordion>

            <IonAccordion value="ionicons">
              <IonItem slot="header">
                <IonLabel>
                  Ionicons
                </IonLabel>
              </IonItem>
              <IonList slot="content">
                <IonItem>
                  <p className="text extrasmall">
                    The MIT License (MIT)<br /><br />
                    Copyright (c) 2015-present Ionic (http://ionic.io/)<br /><br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:<br /><br />
                    The above copyright notice and this permission notice shall be included in
                    all copies or substantial portions of the Software.<br /><br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                    THE SOFTWARE.
                  </p>
                </IonItem>
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCardContent>
      </IonCard>


      <p className="listheader">J</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          <IonAccordionGroup>
            <IonAccordion value="ionic">
              <IonItem slot="header">
                <IonLabel>
                  Jest
                </IonLabel>
              </IonItem>
              <IonList slot="content">
                <IonItem>
                  <p className="text extrasmall">
                    MIT License<br /><br />
                    Copyright (c) Facebook, Inc. and its affiliates.<br /><br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:<br /><br />
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.<br /><br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                  </p>
                </IonItem>
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCardContent>
      </IonCard>


      <p className="listheader">P</p>
      <IonCard className="mt-0">
        <IonCardContent className="ion-no-padding">
          <IonAccordionGroup>
            <IonAccordion value="ionic">
              <IonItem slot="header">
                <IonLabel>
                  PubSub-JS
                </IonLabel>
              </IonItem>
              <IonList slot="content">
                <IonItem>
                  <p className="text extrasmall">
                    The MIT License (MIT)<br /><br />
                    Copyright © 2010 Morgan Roderick, http://roderick.dk/ 
                    &lt;morgan@roderick.dk&gt;<br /><br />
                    Permission is hereby granted, free of charge, to any person 
                    obtaining a copy of this software and associated documentation 
                    files (the “Software”), to deal in the Software without 
                    restriction, including without limitation the rights to use, 
                    copy, modify, merge, publish, distribute, sublicense, and/or 
                    sell copies of the Software, and to permit persons to whom 
                    the Software is furnished to do so, subject to the following 
                    conditions:<br /><br />
                    The above copyright notice and this permission notice shall 
                    be included in all copies or substantial portions of the 
                    Software.<br /><br />
                    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, 
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
                    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
                    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
                    USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </IonItem>
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        </IonCardContent>
      </IonCard>

        <IonCard>
            <IonCardTitle className="ion-padding">
                React
            </IonCardTitle>
            <IonCardContent className="ion-padding">
                <p className="text extrasmall">      
                  MIT License<br /><br />
                  Copyright (c) Facebook, Inc. and its affiliates.<br /><br />
                  Permission is hereby granted, free of charge, to any person obtaining a copy
                  of this software and associated documentation files (the "Software"), to deal
                  in the Software without restriction, including without limitation the rights
                  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                  copies of the Software, and to permit persons to whom the Software is
                  furnished to do so, subject to the following conditions:<br /><br />
                  The above copyright notice and this permission notice shall be included in all
                  copies or substantial portions of the Software.<br /><br />
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                  SOFTWARE.
                </p>
            </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Technologies;
