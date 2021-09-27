import { LightningElement,track } from 'lwc';
import serachAccs from '@salesforce/apex/CustomSearch.retriveAccs';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent'

const columns = [
    {
        label: 'Contract Number',
        fieldName: 'Name',
        type: 'Auto Number',
        //typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}
    }, {
        label: 'Start Date',
        fieldName: 'Start_Date__c',
        type: 'Date',
    }, {
        label: 'End Date',
        fieldName: 'End_Date__c',
        type: 'Date',
    }, {
        label: 'Tenant',
        fieldName: 'Tenant_Name__c',
        type: 'Master-Detail(Tenant)'
    },
];
export default class SearchBar extends LightningElement {
    @track searchData;
    @track columns = columns;
    @track errorMsg = '';
    strSearchAccName = '';
    

    handleAccountName(event) {
        this.strSearchAccName = event.detail.value;
    }

    handleSearch() {
        if(!this.strSearchAccName) {
            this.errorMsg = 'Please enter tenant name to search.';
            this.searchData = undefined;
            return;
        }

        serachAccs({strAccName : this.strSearchAccName})
        .then(result => {
            /*result.forEach((record) => {
                record.AccName = '/' + record.Id;
            });*/

            this.searchData = result;
            
        })
        .catch(error => {
            this.searchData = undefined;
            window.console.log('error =====> '+JSON.stringify(error));
            if(error) {
                this.errorMsg = error.body.message;
            }
        }) 
    }

}

