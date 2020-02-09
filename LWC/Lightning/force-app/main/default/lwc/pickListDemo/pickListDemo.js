import { LightningElement, wire, track } from 'lwc';
import { getPicklistValues, getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import AccSource from '@salesforce/schema/Account.AccountSource';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class PickListDemo extends LightningElement {
    
    @track pickListAccValues;
    @track error;
    @track val;
    @track vali;
    @track valik;

    @track pickListValueByRT;
    @track pickListValueByRTAccSource;

    /*
    getPicklistValues -
        RecordtypeId - Required...but Dummy 
        fieldApiName - Required
*/
/*
    getPicklistValuesByRecordType
        recordTypeId - Required Type Id (Real One)
        objectApiName - API Name of your Object
*/

    //recordTypeId value is dummy.
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
        fieldApiName: AccSource
    }) 
    wired_AccountSource({data, error}) {
        if(data) {
            /* eslint-disable no-console */
            //console.log(` data values are ${data}` );
            console.log(` data values are `, data);
            console.log(data.values);
            this.pickListAccValues  = data.values;
            this.error = undefined;
        }
        if(error) {
            /* eslint-disable no-console */
            console.log(` data values are ${error}` );
            this.error  = data.values;
            this.pickListAccValues = undefined;
        }
    }

    onChange(event) {
        this.val = event.target.value;
        console.log(this.val);
    }

    //recordTypeId value is Real.
    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT, 
        recordTypeId: '0123k0000014Q6W'
    })
    wired_pickListByRT({data, error}) {
        if(data) {
            console.log('Welcome ', data);
            this.pickListValueByRT = data.picklistFieldValues.Industry.values;
            this.pickListValueByRTAccSource = data.picklistFieldValues.AccountSource.values;
        }
        if(error) {
            console.log(error);
        }
    }

    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    })
    wired_Object( {data, error} ) {
        if(data) {
            console.log('Object ', data);
        }
        if(error) {
            console.log(error);
        }
    }
}