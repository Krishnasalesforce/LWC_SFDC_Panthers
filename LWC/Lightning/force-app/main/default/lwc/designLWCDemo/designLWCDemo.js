import { LightningElement, api } from 'lwc';
import LWCLabel from '@salesforce/label/c.LWCLabel';
import trailhead from '@salesforce/resourceUrl/TrailHead';
import userId from '@salesforce/user/Id';
import isGuestUser from '@salesforce/user/isGuest';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
//import POSITION_OBJECTS from '@salesforce/schema/Position__c[]';
import NAME_FIELD from '@salesforce/schema/Account.Name';

import LANG from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import firstDayOfWeek from '@salesforce/i18n/firstDayOfWeek';
import timeZone from '@salesforce/i18n/timeZone';
import DIR from '@salesforce/i18n/dir';

export default class DesignLWCDemo extends LightningElement {
    @api greeting;
    @api heading;
    @api message;

    @api label = {
        LWCLabel, 
        trailhead,
        userId,
        isGuestUser,
        ACCOUNT_OBJECT,
        NAME_FIELD,
        LANG,
        locale,
        currency, firstDayOfWeek, timeZone, DIR
    };
}