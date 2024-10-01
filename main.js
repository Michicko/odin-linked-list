import LinkedList from "./linkedList.js";

const list = LinkedList;

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// list.prepend('elephant');
// list.prepend('bear');
// list.prepend('chicken')

// console.log(list.getList());
// console.log('toString: ',list.toString());
// console.log('size: ',list.size());
// console.log('head: ',list.head());
// console.log('tail: ', list.tail());
// console.log('at', list.at(2));
list.pop()
console.log(list.getList());
console.log('toString: ',list.toString());
console.log(list.contains('turtle'));
console.log(list.find('hamster'));
list.insertAt('rat', 2)
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());









// chicken => bear => snake