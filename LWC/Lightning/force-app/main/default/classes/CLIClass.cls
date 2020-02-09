public with sharing class CLIClass {
    @AuraEnabled(cacheable=true)
    public static string sayHello(){
        system.debug('Working');
        return 'Wiring APEX to LWC!!!!!!!!!!!!!!!!!!!';
    }
    
}
