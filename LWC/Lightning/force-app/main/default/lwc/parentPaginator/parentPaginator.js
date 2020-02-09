import { LightningElement } from 'lwc';

export default class ParentPaginator extends LightningElement {

    handlePrevious() {
        const testmsgP = 'I am in Previous Loop';
        const preEvent = new CustomEvent('previous', { detail : { testmsgP } });   //custom event creation.
        this.dispatchEvent(preEvent);//Execute Events.
    }

    handleNext() {
        const testmsgN = 'I am in Next Loop';
        const nextEvent = new CustomEvent('next', { detail : { testmsgN } });
        this.dispatchEvent(nextEvent);
    }
}