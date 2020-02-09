public with sharing class contactAuraService {
    public contactAuraService() {

    }

    @AuraEnabled(cacheable=true)
    public static list<sObject> getContactList(string name){
        string key = '%' + name + '%';
        string query = 'SELECT Id, Name, Phone, Email FROM Contact where Name like : key';    // 
        return Database.query(query);
    }

    @AuraEnabled(cacheable=true)
    public static list<sObject> getAccountList(string name){
        string key = '%' + name + '%';
        string query = 'SELECT Id, Name, Industry, Phone FROM Account where Name like : key';
        return Database.query(query);
    }
}
