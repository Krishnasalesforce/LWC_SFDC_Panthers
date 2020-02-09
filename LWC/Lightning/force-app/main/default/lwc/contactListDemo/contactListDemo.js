import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/contactAuraService.getContactList';
import getAccountList from '@salesforce/apex/contactAuraService.getAccountList';

export default class ContactListDemo extends LightningElement {
    @track searchcontact;
    @track contacts;
    @track error;

    @track searchaccount;
    @track accounts;
    @track errora;

    @track selectAccount; 

    @wire(getContactList, {
        name : '$searchcontact'
    })
    wiredContact({error, data}){
        if(data) {
            /* eslint-disable no-console */
            console.log('data ' + data);
            this.contacts = data;
        }
        if(error) {
            this.error = error;
            /* eslint-disable no-console */
            console.log('error ' + error);
        }
    }

    handleChange(event) {
        event.preventDefault();
        /* eslint-disable no-console */
        console.log('value ' + event.target.value);
        this.searchcontact = event.target.value;    
        
    }

    handleAccountChange(event) {
        event.preventDefault();
        /* eslint-disable no-console */
        console.log('value ' + event.target.value);
        this.searchaccount = event.target.value;    
        
    }

    
    findAccounts() {
        getAccountList({
            name : this.searchaccount
        })
        .then(result => {
            this.accounts = result;
            /* eslint-disable no-console */
            console.log('result ', result);
        })
        .catch(error => {
            this.errora = error;
            /* eslint-disable no-console */
            console.log('result ', error);
        });
    }

    //@wire(getAccountList) accounts;

    handleselectRec(event) {
        const recordId  = event.detail;
        /* eslint-disable no-console */
        console.log('recordId ', recordId);

        //pass the recordId to account list and fect the accounts in two Ways.

        //1
        this.selectAccount = this.accounts.find(account => account.Id === recordId);
        //find(account => account.Id === recordId) Means each account of account Id 
        //Equals with recordId until it satisfy.

        //2 For Loop.
        /*for(let i = 0; i < this.accounts.length ; i++) {
            if(this.accounts[i].Id === recordId) {
                this.selectAccount = this.accounts[i];
            }
        }*/
    }
}