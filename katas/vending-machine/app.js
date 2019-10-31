var items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25},
             {name:"Cheese and Onion Crisps", code:"B06", quantity:0, price:0.25}];
var money = 10.00;
function VendingMachine(items, money) {
  this.items = items;
  this.money = money;
};

VendingMachine.prototype.vend = function (selection, itemMoney){
    let theSelection;
    let index;
    let response;
  for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].code.toUpperCase() == selection.toUpperCase()) {
          theSelection = this.items[i];
          index = i;
      }
  }
  if (typeof theSelection === 'undefined') {
      return `Invalid selection! : Money in vending machine = ${(this.money).toFixed(2)}`;
  }

  if (theSelection.price > itemMoney) {
      return `Not enough money!`;
  }

  if (theSelection.quantity <= 0) {
      return `${theSelection.name}: Out of stock!`;
  }

  response = ((itemMoney - theSelection.price).toFixed(2) == 0.00)
  ? `Vending ${theSelection.name}`
  : `Vending ${theSelection.name} with ${(itemMoney - theSelection.price).toFixed(2)} change.`;

  this.items[index].quantity--;
  this.money+=theSelection.price;

  return response;
};

let vm = new VendingMachine(items, money);
console.log(vm.vend("A01",0.60));
console.log(vm.vend("A01",10.0));
console.log(vm.vend("Z01",0.41));
console.log(vm.vend("A02",0.40));
console.log(vm.vend("B06",4.60));
