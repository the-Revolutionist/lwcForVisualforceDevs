import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {LightningElement} from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';

export default class LdsCreateRecord extends LightningElement{
    handleButonClick() {
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: {
                [ACCOUNT_NAME_FIELD.fieldApiName]:'ACME'
            }
        }
        createRecord(recordInput)
            .then(account => {
              //*  code to execute if create operation IS successful
            })
            .catch(error => {
            //*  code to execute if create operation is NOT successful
        })
    }
}
