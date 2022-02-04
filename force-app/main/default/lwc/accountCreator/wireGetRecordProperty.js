import { LightningElement, api, wire } from 'lwc';

import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireGetRecordProperty extends LightningElement {
    @api recordId;
    data;
    error;
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({ data, error }) {
        console.log(`Execute logic each time a new value is provisioned`);
        if (data) {
            this.data = data;
            this.error = error;
        }else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }
}