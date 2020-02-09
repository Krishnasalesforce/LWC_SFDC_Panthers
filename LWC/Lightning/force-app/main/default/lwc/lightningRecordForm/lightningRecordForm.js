/* eslint-disable no-alert */
import { LightningElement, api } from 'lwc';
import account_name from '@salesforce/schema/Account.Name';
import account_industry from '@salesforce/schema/Account.Industry';

export default class LightningRecordForm extends LightningElement {
    // The record page provides recordId and objectApiName
    @api recordId;
    @api objectApiName;

    fields= [account_name, account_industry];

    handleSuccess() {
        alert('Success');
    }

    //https://www.youtube.com/watch?v=t9yNaaegKh4&list=PLV3ll8m0Zlpog5kPVuyYc1d3CzbsNqPxK&index=12
}