public with sharing class VisualStudioHelloWorld {
    
    @AuraEnabled
    public static list<contact> getcontactList() {	//string name
        //string n = '%'+ name+'%';
        list<contact> conList = [select Id, firstName, LastNAme, Name, Phone, Email 
                                 from contact 
                                 where email != null];// and name like n
        return conList;
    }
    
    @AuraEnabled
    public static list<contact> getcontactsList(string accountId) {	//
        list<contact> conList = [select Id, firstName, LastName, Name, Phone, Email 
                                 from contact 
                                 where accountId=: accountId];
        return conList;
    }
    
    @AuraEnabled
    public static contact createContact(contact con, Id accountId) {	//
        con.AccountId = accountId;
        system.debug(con);
        insert con;
        return con;
    }
}