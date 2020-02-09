import { LightningElement, track, api } from 'lwc';
import Id from '@salesforce/user/Id';

export default class InputFormat extends LightningElement {
    @track krishna = 'krishna';
    @api name='krishnamoorthi';
    phone='8127641234';
    userId = Id;
    //leadId = Ids;

    handleClick() {
        /* eslint-disable no-console*/
        console.log("I am inside JS File");
        this.name = 'Krishnamoorthi Nagendran';
        this.krishna = 'Moorthi';
    }

    //@track richtext = "<h2>Default <s>Value</s></h2>";
}