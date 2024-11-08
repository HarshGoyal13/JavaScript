


// CONSTRUCTOR

// - NEW KEYWORD BEFORE THE FUNCTION CALLING, IS CREATING THIS FUNCTION AS A CONSTRUCTOR FUNCTION WHOSE JOB IS TO CREATE OBJECT

function User(user, age, gmail){
    this.username = user;
    this.age = age;
    this.gmail = gmail
};


User.prototype.descripition = function(){
    return `My Gmail is ${this.gmail}`;
}


let user1 = new User('Akash', 22, "akash@gmail.com")
let user2 = new User('harsh', 20, "harsh@gmail.com")

console.log(user1);

console.log(user2);





