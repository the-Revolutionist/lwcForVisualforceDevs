import { LightningElement, api, wire } from 'lwc';

import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireGetRecordProperty extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    account;
}