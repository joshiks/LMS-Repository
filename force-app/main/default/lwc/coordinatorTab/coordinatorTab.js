import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CoordinatorTab extends NavigationMixin(LightningElement) {
    navigateToNewTenant() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Tenant__c',
                actionName: 'new'
            }
        });
    }

    navigateToNewContract() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contract__c',
                actionName: 'new'
            }
        });
    }
}