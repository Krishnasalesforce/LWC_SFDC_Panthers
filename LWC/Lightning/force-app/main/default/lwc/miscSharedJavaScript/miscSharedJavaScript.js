import { LightningElement, track } from 'lwc';
import { showToast, showAlert } from 'c/utilsJs';

export default class MiscSharedJavaScript extends LightningElement {
    @track name;
    handleClick() {
        this.name = 'Welcome';
        this.dispatchEvent(
            showToast('Error', 'sticky', 'Success!!!', 'Welcome to Shared Java Script')
        );
        showAlert();
    }
}