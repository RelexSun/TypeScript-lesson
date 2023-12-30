var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        // method
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    };
    return Account;
}());
var account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);
