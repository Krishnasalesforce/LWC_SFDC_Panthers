import { LightningElement, track } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    @track count = 0;
    /* eslint-disable */
    constructor() {
        super();
        alert(' I am in constructor');
        alert(this.count);
        this.count = this.count +1;
    }

    //https://github.com/amitastreait/Static-Resource-LightningWebComponents

    connectedCallback() {
        alert(' I am in connectedCallback');
        alert(this.count);
        this.count = this.count +1;
    }

    disconnectedCallback() {
        alert(' I am in disconnectedCallback');
        alert(this.count);
        this.count = this.count +1;
    }

    //render() {
        //alert(' I am in render');
        //alert(this.count);
        //this.count = this.count +1;
    //}

    renderedCallback() {
        alert(' I am in renderedCallback');
        alert(this.count);
        this.count = this.count +1;
    }

    errorCallback(error, stack) {
        alert(' I am in errorCallback');
        alert(this.count);
        this.count = this.count +1;
    }


}