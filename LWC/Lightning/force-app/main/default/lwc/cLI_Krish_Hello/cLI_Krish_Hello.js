import { LightningElement, track, wire } from 'lwc';
import sayHello from '@salesforce/apex/CLIClass.sayHello';

export default class CLI_Krish_Hello extends LightningElement {
    @track
    greeting = 'Krishna!!!!!';
    @track Great = 'Second Day';
    @track richtext = "<h2>Default <s>Value</s></h2>";
    onchangeEvent(event) {
        this.Great = event.target.value;
    }
    @wire(sayHello) hellos;

    mapMarkers = [
        {
            location: {
                Street: '357 Wintlane',
                City: 'Columbus',
                State: 'IN',
            },

            title: 'The Krishna House',
            description:
                'Landmark, historic home & office of the United States president, with tours for visitors.',
        },
    ];

}