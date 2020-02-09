/* eslint-disable no-alert */
/* eslint-disable no-console */
import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import firstName from '@salesforce/schema/Contact.FirstName';
import lastName from '@salesforce/schema/Contact.LastName';

const FIELDS = ['Contact.Name', 'Contact.Phone'];

export default class LoadContact extends LightningElement {
    @api recordId;
    @track contact;
    @track name;
    @track phone;
    //@wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS, layoutTypes: ['Full'], modes: ['View'] })
    wiredRecord({ error, data }) {
        if (error) {
            console.log('Error data ', error);
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading contact',
                    message,
                    variant: 'error',
                }),
            );
        } else if (data) { 
            this.contact = data;
            console.log('Con data ', data);
            console.log('Con Phone ', data.fields.Phone.value);
            console.log('Con Account Name ', data.fields.Account.value.fields.Name.value);
            //console.log('Con Name ', data.fields.Name.value);
            //this.name = this.contact.fields.Name.value;
            this.phone = this.contact.fields.Phone.value;
        }
    }

    get fname() {
        //firstName, lastName
        //alert('KRishna');
        return getFieldValue(this.contact, firstName);
    }

    get lname() {
        //alert('Moor');
        //firstName, lastName
        return getFieldValue(this.contact, lastName);
    }
}