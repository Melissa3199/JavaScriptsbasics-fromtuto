//strings
console.log('hello, world');

let email = 'melissa@firsttutaorial.co.uk';
console.log(email);

// string concatenation

let firstName= 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters

console.log(fullName[2]);

//string length

console.log(fullName.length);
//string methods

console.log(fullName.toUpperCase());
let res = fullName.toLowerCase();

console.log(res, fullName);

let index= email.indexOf('@');

console.log(index);

const author = 'Melissa';
const likes = '30';
const title = 'title';

//template string 

let result = `The blog called ${title} by ${author} has ${likes}`;
console.log(result);

//creating html templates

let html =  `
    <h2>${title}</h>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);


let ninjas = ['melissa','mel','melo'];

let result0 = ninjas.join(',');

console.log(result0);

console.log("melisssssssss");
console.log(ninjas[2]);

for(let i = 0 ; i<5 ; i++)
{
    console.log('in loop: ',i);

}



//functions

function greet(){
    console.log('hello there');
}

const speak = function(name='me', time='day'){
    console.log(`good ${time} ${name}!`);
};

greet();

speak('melissa','night');




const calcArea = function(radius){
    return 3.14 * radius**2;
    
};
const calcArea = (radius) => {
    return 3.14 * radius**2;

};

const calcArea = radius => {
    return 3.14 * radius**2;

};
const calcArea = () => {

};

const calcArea = (radius) =>  3.14 * radius**2;

const area = calcArea(5);
console.log('area is : ', area);

const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i<products.length ; i++){
        total = products[i] + products[i]*tax;
    }
    return total ;
};

const bill = (products,tax) => {
    let total = 0;
    for (let i = 0; i<products.length ; i++){
        total = products[i] + products[i]*tax;
    }
    return total ;

}

console.log(bill([10,15,30],0.2));


const myFunc = (callbackFunc) =>{
    let val = 50;
    callbackFunc(val);
}

myFunc(value=>{
    console.log(value);
});



let people = ['meli','mimi','momo','lulu','melissa'];


const logPerson = (person,index) =>{
    console.log(`${index} - hello ${person}`);
};


//people.forEach((i,person) => console.log(i,person)) ;


people.forEach(logPerson);

const ul = document.querySelector('.people');

const people = ['melissa','mimi','momo','lulu'];

let html = ``;
people.forEach(person=>{
    html += `<li style = "color: purple">${person}</li>`;

});




console.log(html);

ul.innerHTML = html;

//Objects literals 

const blogs = [
    {title : 'why mac and cheese rules', likes : 30},
    {title: '10 things to make with marmite', likes : 50}
];



let user = {
    name : 'melissa',
    age : 30,
    email : 'melissa@MediaList.co.uk',
    location : 'algiers',
    blogs : [
        {title : '5 reasons to go to school', likes : 30},
        {title: 'Everything you need to know about python', likes : 50}
    ] ,
    login : ()=>{
        console.log('logged in');
    },
    logout : ()=>{
        console.log('logged out');
    },

    logBlogs(){ //regular functions not arrow functions
        //console.log(this.blogs);
        console.log('this user has written the following blogs : ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes+' likes');
            
        })
    }

};

user.name = 'melissa';

console.log(user.name);

console.log(user['email']);

user['name']= 'hello';

console.log(user['name']);

const key = 'location';

console.log(user[key]);

user.login();
user.logBlogs();
user.logout();










