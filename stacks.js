//DATA STRUCTURES: STACKS//

//////////////////////////////////////////////////////////////////////////////////

//a public stack
class Stack {

  items = [];  
  
  push = (element) => this.items.push(element); //add to the end
  pop = () => this.items.pop();                 //remove from the end
  isempty = () => this.items.length === 0;      //returns whether the stack is empty
  empty = () => this.items.length = 0;          //empties the stack
  size = () => this.items.length;
}

//a private stack (...it keeps secrets!)
class Stackie {

  #items = [];  //private and inaccessible with #
  
  push = (element) => this.#items.push(element); //add to the end
  pop = () => this.#items.pop();                 //remove from the end
  isempty = () => this.#items.length === 0;      //returns whether the stack is empty
  empty = () => this.#items.length = 0;          //empties the stack
  size = () => this.#items.length;
}


//////////////////////////////////////////////////////////////////////////////////

//EXAMPLES//

//using public stack
const flapjacks = new Stack();
for (let i=1; i<=10; i++) { flapjacks.push(i); } //fill the stack
console.log('Initial Stack:', flapjacks.items);

flapjacks.pop();
console.log('pop()', flapjacks.items);           //remove item from the end (top) of stack

flapjacks.items.shift();                         //removes item from the bottom of stack (not allowed!)
console.log('shift()', flapjacks.items);          

flapjacks.empty();                               //clears the stack!
console.log('empty()', flapjacks.items);

//using private stack
const complaints = new Stackie();
complaints.push('I am out of paper clips!');
complaints.push('I am out of paper!');
complaints.push('I am out of staples!');
complaints.push('I am out of complaints!');

console.log('Items are private!', complaints.items);
console.log('Size:', complaints.size());
console.log('isEmpty:', complaints.isempty());

complaints.pop();
console.log('Removed one with pop():', complaints.size());
