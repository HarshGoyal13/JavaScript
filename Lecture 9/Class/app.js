



// CONSTRUCTOR IS ALTERNATIVE WAY TO CREATE CLASS

// CLASSES ARE JUST SYNTANTICAL SUGAR OF CONSTRUCTOR



// CLASS SYNTAX

 class Person {
        constructor(username, age, gmail){
            this.username = username;
            this.age = age;
            this.gmail = gmail
        }
        getGmail(){
            console.log(`This is my gmail ${this.gmail}`)
        }
 }

let Person1 = new Person('Harsh', 55, "harsh@gmail.com");
Person1.getGmail();
console.log(Person1);



// INHERIT CLASS

// SUPER - THIS IS ALSO A CONSTRUCTOR, THAT'S HELP TO INHERTIT PROPERTIES FROM PARENT AND HELP TO ADD MORE PROPERTIES

class Student  extends Person{
    constructor(username, age, gmail, role){
        super(username, age, gmail);
       this.role = role;  
    }
}

let student2 = new Student("Kush", 12,"kush@gmail.com", "Kid");
console.log(student2)

