public with sharing class utilityLWC {
    public utilityLWC() {

    }

    @AuraEnabled(cacheable=true)
    public static Map<string, Integer> mapDemo(){
        Map<string, Integer> LWCMap = new Map<string, Integer>();
        //LWCMap.put('1', )
        LWCMap.put('Vignesh', 1);
        LWCMap.put('Rajkumar', 2);
        LWCMap.put('Rajesh', 3);
        LWCMap.put('Mokka', 4);
        return LWCMap;
        
    }

    @AuraEnabled(cacheable=true)
    public static Map<integer, Integer> mapDemos(){
        Map<integer, Integer> LWCMap = new Map<integer, Integer>();
        //LWCMap.put('1', )
        LWCMap.put(1000, 1);
        LWCMap.put(500, 2);
        LWCMap.put(2000, 3);
        LWCMap.put(2, 4);
        return LWCMap;
        
    }
}
