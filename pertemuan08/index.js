let account = {
    name: "Putu",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary(){
      let sum = 0;
      this.expenses.forEach((item)=>{
        sum+=item.amount;
      })
      return `${sum}`;
    }
};
account.addExpenses('Beli Makanan', 15000);
account.addExpenses('Ongkos', 30000);
console.log(`Total pengeluaran ${account.name} adalah Rp. ${account.getAccountSummary()}`);