import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Lwctab extends NavigationMixin(LightningElement) {
    navigateToNewBuilding() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Building__c',
                actionName: 'new'
            }
        });
    }

    navigateToNewFlat() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Flat__c',
                actionName: 'new'
            }
        });
    }
   
}