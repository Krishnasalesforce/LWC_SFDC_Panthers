import { LightningElement, track, wire } from 'lwc';
import mapDemo from '@salesforce/apex/utilityLWC.mapDemo';
import mapDemos from '@salesforce/apex/utilityLWC.mapDemos';

export default class LogicalLWC extends LightningElement {
    @track greeting = 'Welcome to Krishna!!!!!';
    @track message = 'HCL';
    //@track records;
    @track error;
    @track maps;

    @track contacts = [
        {   
            Id : '001',
            Name : 'Anvesh'
        },
        {        
            Id : '002',
            Name : 'Anirudh'    
        },
        {        
            Id : '003',
            Name : 'Vamshi'    
        },
        {        
            Id : '004',
            Name : 'Karthik'    
        }
    ];

    //eslint-disable no-console

    //@wire(mapDemo) records;


    handleClick() {
        mapDemos().then(result => {
            console.log(result);
            const options = [];
            for(let key in result) {
                if(key) {
                    options.push({
                        key : key,
                        value : result[key]
                    })
                }
            }
            console.log(options);
            this.maps = options;
        })
        .catch(error => {
            this.error = error;
        })

        mapDemo().then(result => {
            console.log(result);
            const options = [];
            for(let key in result) {
                if(key) {
                    options.push({
                        key : key,
                        value : result[key]
                    })
                }
            }
            console.log(options);
            this.records = options;
        })
        .catch(error => {
            this.error = error;
        })
    }

    /* eslint-disable no-console */
    //console.log(' records' + this.records);

/*
    @wire(mapDemo) 
    wiredAccounts({ error, data }) {
        if (data) {
            this.records1 = data;
            //this.error = undefined;
        } else if (error) {
            this.error = error;
            //this.accounts = undefined;
        }
    }*/



    /*eslint-disable no-console*/
    //console.log(this.records);
    
}