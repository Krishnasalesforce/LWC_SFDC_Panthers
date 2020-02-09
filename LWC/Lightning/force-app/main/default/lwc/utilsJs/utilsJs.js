/* eslint-disable no-alert */
//import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const showToast =(variant = 'info', mode='dismissable', title, message) => {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        mode: mode,
        variant: variant
    });
    return event;
}

const showAlert =() => {
    alert('KRISHNA');
}

export { showToast, showAlert };