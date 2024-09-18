interface Card {
    
    cardNo:  number;
    bank: String;
    cvv: number;

}



class Student {

    private studentId: string;
    private firstName:string;
    private age: number;

    constructor(studentId, firstName, age){
        this.studentId = studentId;
        this.firstName= firstName;
        this.age = age;
    }

    printRecord(){
        console.log(this.studentId, this.firstName,this.age);
    }
}

let student1 = new Student("101","Doremi",12);

// student1.studentId="101";
// student1.firstName= "Doremon";
// student1.age=12;
console.log(student1);
student1.printRecord();





// //------------------------------------------------------------------
// let pet = { type : "Dog" , name : "Bruno" , breed : "German Shepard"};

// console.log(pet.name)

// let pet2 = pet
// pet2 = {type:"cat" , name:"Tom", breed : "persian"};
// console.log(pet2);
// console.log(pet2.name)

// //-------------------------------------------------
// const add = (a:string | number | boolean ,b:number, c: number) => {
//     console.log(a , b , c);
//     //return a+b ;
// }
// const a=add;
// a(true,20,40);

// //-----------------------------------------------------------------------

// const add1 = (a: mytype ,b:number, c: number) => {
//     console.log(a , b , c);
//     //return a+b ;
// }
// const b=add1;
// b(true,20,40);

// type mytype = string | number| boolean;
// //-----------------------------------


// let firstname = "Shifa";
// // firstname = "Sageer";
// console.log(firstname);

// let loc='Trivandrum';
// console.log(loc)
// let pincode = 695582;
// console.log(pincode)

// var date = new Date();
// console.log(date.getDate());
// let language:any;
// language = [4,5,6,7,8];
// //language = "Malayalam";
// console.log(language);

// let no =7;

// if(no%2 == 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let nos =[23,34,45,56,67,78,89]
// nos.forEach((i) => {
//     console.log(i);
    
// });
// let fact=1;
// for(var i=1; i<=6;i++){
//     fact = fact *i;
// }

// console.log(fact);

// let fruits = ['apple','banana','oranges','leach','berries'];

// console.log(fruits);
// console.log(fruits.length);
// let score = ['Rohit',240, 45.76,130.4,'India',true];
// score.push('lives in mumbai');
// console.log(score);

// let company= ["ust" , 685573 , "Trivandrum" , 1000];

// const ev = nos.map((num) => {
//     return num + num ;
// })

// console.log(ev)

// let sum=0
// let newno = nos.reduce((num1,num2) => {
//     return num1+num2;

// });

// console.log(newno)

// let lessno = nos.filter((i) => i<40)

// console.log(lessno)

// let greatno = nos.filter((i) => i>40)

// console.log(greatno)

