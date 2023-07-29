// indexOf returns the first index number at which the given element can be found.

let pets = ["cat","dog","parrot","Chickens","cat","wolfs"];
// gives 0
console.log(pets.indexOf("cat"));

// strats finding the index of cats from 2. 
console.log(pets.indexOf("cat",2));

// gives -1
console.log(pets.indexOf("snakes"));
