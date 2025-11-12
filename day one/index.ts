// function person(): {name:string;age:number;city:string}{
//     return{
//         name:"abhay",
//         age:23,
//         city:"Delhi"
//     }
// }
// console.log(person())

// ------------- Type aliases ---------------

// type Person = {
//     name:string;
//     age:number
// }

// function printPerson(person:Person){
//     console.log(`Name ${person.name} and age ${person.age}`)
// }

// const myPerson : Person ={name:"abhay",age:20}
// printPerson(myPerson)

// ---------------Optional Properties -------------

// type Person = {
//     name:string;
//     age:number;
//     city:string;
//     email?:string ;        
// }

// const person1 : Person = {name:"abhay",age:20,city:"Delhi"}
// const person2 : Person = {name:"Kartik",age:22,city:"Delhi", email:"kartik@gmail.com"}

// console.log(`Person 1 details are Name ${person1.name} age ${person1.age} city ${person1.city} email ${person1.email}
//                 person 2 detail are Name ${person2.name} age${person2.age} city ${person2.city} email ${person2.email}
//     `)  


// ------------------Intersection types ------------

// type Person = {
//     name:string;
//     age:number
// }

// type Employee = {
//     id:number;
//     department:string
// }

// let employee1 : Person&Employee ={
//     name:"Abhay",
//     age:25,
//     id:23,
//     department:"IT"
// }

// console.log(employee1)


//------------Unions -------------

// type Student = {
//     name:string;
//     age:number;
//     id: number | string
// }

// const student1 : Student = {
//     name:"Abhay",
//     age:25,
//     id:104
// }

// const student2 :Student ={
//     name:"Rakesh",
//     age:63,
//     id:"Malumnahi"
// }

// console.log(student1)
// console.log(student2)

//-----------literal Types -----------------

// let color : "red"|"green"|"blue" = "red"
// console.log(color)

// ------------Tuple ----------

// let myTuple :[string,number] = ["Abhay",20]
// let [first,second] = myTuple      // Destructuring the array
// console.log(first)
// console.log(second)

// -------------enum ----------------

// enum wheatherconditions {
//     Sunny = "sunny",
//     Cloudy = "cloudy ",
//     Rainy = "rainy",
//     Snowy ="Snowy"
// }

// const currentWheater = wheatherconditions.Sunny
// console.log(currentWheater)


//---------------class propertie anotation --------

// class Person {
//     name:string ;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name,
//         this.age =age
//     }
// }

// const rare = new Person ("Abhay" ,21)
// console.log(rare)


// --------------Access Modifiers ----------------
// class Person {
//     private name:string;
//     public city:string;
//     protected age : number;

//     constructor(name:string,city:string,age:number){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }

//     getname(){
//         return `name ${this.name} city ${this.city} age ${this.age} `
//     }
// }

// class Employee extends Person {
//     constructor(name:string,city:string,age:number){
//         super(name,city,age)
//     }
// }

// const abhay = new Employee ("abhay","city",21)
// console.log(abhay) 


// ---------- Getter & Setter -----------------

// class MyClass {
//     private _myProperty : number = 0;

//     get myProperty (){
//         return this._myProperty;
//     }

//     set myProperty(value:number){
//         if(value<0){
//             throw new Error ("value Can't be nagative")
//         }
//         this._myProperty = value
//     }
// }

// const value = new MyClass()

// console.log(`current value = ${value.myProperty}`)
// value.myProperty= 100;
// console.log(`current value = ${value.myProperty}`)


//---------------Interface ------------------------

//  interface Computer {
//     name:string,
//     ram:number,
//     hdd:number
//  }

//  const computerExample : Computer  = {
//     name :"Lenevo",
//     ram:12,
//     hdd:512
//  }

//  console.log(computerExample.hdd)

// interface Movie {
//     name:string,
//     ticketPrice:number,
//     imdbRating:number,
//     genre:string
// }

// const movieExample : Movie ={
//     name:"it",
//     ticketPrice:400,
//     imdbRating:8,
//     genre:"Horror"
// }

// console.log(movieExample.name)
// console.log(movieExample.ticketPrice)
// console.log(movieExample.imdbRating)
// console.log(movieExample.genre)
    //------------------Interface for function -----------------------------

// interface MathOperation {
//     (x:number ,y:number) :number
// }

// const add :MathOperation = (a ,b)=>a+b
// const sub : MathOperation = (a,b) =>a-b

// let plus = add(10,23)
// let minus = sub(50,30)
// console.log(minus)
// console.log(plus)

// --------------------------------interface for method--------------

// interface Person {
//     name:string,
//     age:number,
//     city:string
//     greet():void
// }

// function introPerson (person:Person){
//     person.greet()
//     console.log(`Hello i am  ${person.name} ,i am ${person.age}years old and i live in ${person.city}`)
// }

// const abhay :Person={
//     name:"Abhay Kumar",
//     age:21,
//     city:"Delhi",
//     greet(){
//         console.log("What's upp")
//     }
// }

// const kartik :Person={
//     name:"Kartik Pandey",
//     age:18,
//     city:"Moscow,Russia",
//     greet(){
//         console.log("Hi! There")
//     }
// }

// introPerson(abhay)
// introPerson(kartik)


//--------------------------interface declarartion mersing -----------------

// interface Car {
//     name:string,
//     year:number
// }

// merging 

// interface Car{
//     model:string,
//     owner:string
// }

// const carInfo : Car ={
//     name:"Toyota",
//     year:2020,
//     model:"t4",
//     owner:"abhay"
// }

// console.log(carInfo.name)
// console.log(carInfo.model)
// console.log(carInfo.year)
// console.log(carInfo.owner)


//--------------Generics -----------------

// function printInfo <T> (x:T){
//     return x
// }

// const str = printInfo<string>("Hello")
// console.log(str)
// const num = printInfo <number> (123)
// console.log(num)
// const boolean = printInfo<boolean>(true)
// console.log(boolean)

// function getRandomKeyValuePair<T>(obj:{[key:string]:T}):{key:string,value:T}{
//     const keys = Object.keys(obj);
//     console.log(typeof keys)
//     const randKey = keys [Math.floor(Math.random()*keys.length) ];
//     return {key:randKey, value:obj[randKey]}
// }

// const stringob = {one:"abhay",second:"Kartik",third:"Krishna"}

// let gotstr = getRandomKeyValuePair<string>(stringob)
// console.log(gotstr)

// const numobj = {1:123,2:142,6:666}
// let gotnum = getRandomKeyValuePair<number>(numobj)
// console.log(gotnum)


//-------------------type narrowing , type guards ------------------------

// type Mytype = string|number

// function exampleFunction (value:Mytype):void{
//     if(typeof value === "string"){
//         console.log(value.toLocaleUpperCase())
//     }else{
//         console.log(value.toFixed(2))
//     }
// }

// exampleFunction("hello")
// exampleFunction(156)


//-------------------type narrowing , instance of guard ------------------------


// class Dog{
//     bark():void{
//         console.log("Woof!")
//     }
// }
 
// class Cat{
//     meow():void{
//         console.log("Meow !")
//     }
// }

// function instance (animal:Dog|Cat):void{
//     if(animal instanceof Dog){
//         animal.bark()
//     }else{
//         animal.meow()
//     }
// }

// instance(new Dog()) 
// instance(new Cat())



//-------------------type narrowing , Intersection Type ------------------------

type Manager = {
    department:string,
    role:string
}

type Employee = {
    id:number,
    name:string
}

type EmployeeWithManager = Manager & Employee

const manger :EmployeeWithManager = {
    id:132,
    name:"abhay",
    department:"It",
    role:"Handle It team"
}
console.log(manger.id)
console.log(manger.name)
console.log(manger.department)
console.log(manger.role)