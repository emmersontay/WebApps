//String Array
//--Method 1--
let names = ['Emmerson', 'Isaiah', 'Xavier', 'Sophie', 'Alice'];
console.log(names);
console.log(names[0]);

for (let index = 0; index < names.length; index++) {
    const element = names[index];
}

names.forEach((e) => {
    console.log(e);
});

function someFunction(e) {
    console.log("function method");
}

let arrowFunction = () => {
    console.log(first);
};

console.log(NaN == null);

//--Method 2--
names.push('Emmy');
names[names.length] = 'Emmy';

names.pop();
console.log(names);

//Number Array
//--Method 1--
const ages = [19, 15, 21, 19, 18];
console.log(ages);
console.log(ages[4]);

//--Method 2--
console.log(ages.length);
console.log(ages.push(22));

//--Method 4--
console.log(ages.sort());
console.log(ages.find((elem) => elem > 10));
console.log(ages.join());
ages.forEach(element => {
    let str = ''
    str += element + ','
});

