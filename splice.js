// splice : changes the content of you array by adding or deleting and replacing elemnts from it.

const month = ["Jan","Mar","Apr","May"];
console.log(month);

month.splice(1,0,"Feb");
console.log(month);

month.splice(4,1);
console.log(month);

month.splice(3,0,"May","Jun");
console.log(month);
