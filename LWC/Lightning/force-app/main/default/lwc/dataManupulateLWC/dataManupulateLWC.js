/* eslint-disable no-console */
/* eslint-disable no-alert */
import { LightningElement, track } from 'lwc';
import { createRecord, updateRecord, deleteRecord  } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ID_FIELD from '@salesforce/schema/Account.Id';
import active_FIELD from '@salesforce/schema/Account.Site';

export default class DataManupulateLWC extends LightningElement {
    @track accountId;
    @track accountUId;
    @track accountDId;
    @track name = '';
    @track name1;
    @track active; 
     handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
    }

    handleUNameChange(event) {
        this.name = event.target.value;
    }

    handleUAChange(event) {
        this.active = event.target.value;
    }

    
    createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(account => {
                this.accountId = account.id;
                this.accountUId = account.id;
                this.accountDId = account.id;
                //this.name1 = account.Name;
                //alert(this.name1);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }

    updateAccount() {
        /*const allValid = [...this.template.querySelectorAll('lightning-input')]
            .reduce((validSoFar, inputFields) => {
                inputFields.reportValidity();
                return validSoFar && inputFields.checkValidity();
            }, true);*/

        //if (allValid) {
            // Create the recordInput object
            const fields = {};
            fields[ID_FIELD.fieldApiName] = this.accountUId;
            console.log(this.accountUId);
            //fields[FIRSTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='FirstName']").value;
            //fields[LASTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='LastName']").value;
            console.log(this.name);
            console.log(this.active);
            fields[NAME_FIELD.fieldApiName] = this.name;
            fields[active_FIELD.fieldApiName] = this.active;

            const recordInput = { fields };
            console.log('fields', fields);
            console.log('fields', recordInput);
            updateRecord(recordInput)
                .then(() => {
                    //alert('Success');
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account updated',
                            variant: 'success'
                        })
                    );
                    // Display fresh data in the form
                    //return refreshApex(this.contact);
                })
                .catch(error => {
                    //alert('Error', error);
                    console.log(error);
                    /*this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error creating record',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );*/
                });
            //}
        /*else {
            // The form is not valid
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Something is wrong',
                    message: 'Check your input and try again.',
                    variant: 'error'
                })
             );
        }*/
    }


    deleteEvent() {
        deleteRecord(this.accountId)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record deleted',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }


}