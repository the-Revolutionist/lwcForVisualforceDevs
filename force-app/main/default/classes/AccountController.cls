public with sharing class AccountController {
    public List<Account> getAllActiveAcounts() {
        return [SELECT Id,Name,Active__C FROM Account WHERE Active__C = 'Yes'];
    }
}
