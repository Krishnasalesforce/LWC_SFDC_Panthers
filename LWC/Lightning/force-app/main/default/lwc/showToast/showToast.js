import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class LightningToastExample extends NavigationMixin(LightningElement) {
    handleButtonClick() {
        const event = new ShowToastEvent({
            "title": "Success!",
            "variant": "success",
            "mode": "dismissable",
            "message": "Record {0} created! See it {1}!",
            "messageData": [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'Krish'
                }
            ]
        });
        this.dispatchEvent(event);
    }

    handleRecordClick() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0033k00003D1qKqAAJ',
                actionName: 'view',
            },
        }).then(url => {
            const event = new ShowToastEvent({
                "title": "error!",
                "variant": "error",
                "mode": "sticky",
                "message": "Record {0} created! See it {1}!",
                "messageData": [
                    'Salesforce',
                    {
                        url,
                        label: 'here'
                    }
                ]
            });
            this.dispatchEvent(event);
        });

    }
}
/*import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class MyComponent extends LightningElement {
    showToast() {
        const event = new ShowToastEvent({
            title: 'Get Help',
            message: 'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        });
        this.dispatchEvent(event);
    }
}*/