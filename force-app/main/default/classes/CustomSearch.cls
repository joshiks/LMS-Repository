public inherited sharing class CustomSearch  {

        @AuraEnabled(Cacheable = true)
        public static list<Contract__c> retriveAccs(String strAccName) {
            strAccName = '%' + strAccName + '%';
            list<Contract__c> lstAccs = [SELECT  Name, Start_Date__c,End_Date__c,Tenant_Name__c  From Contract__c WHERE Tenant_Name__c IN (Select Id from Tenant__c where Name LIKE :strAccName)];
    
            if(lstAccs.isEmpty()) {
                throw new AuraHandledException('No Record Found..');
            }
            return lstAccs; 
        }
    } 
