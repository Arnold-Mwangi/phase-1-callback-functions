// Run the project by installing node.js then run the following command inside the project directory
        // node index.js
// When we pass a function into another function wherein it might be invoked, we refer to the passed function as a callback. The term derives from the fact that the function isn't invoked immediately — instead it's called back, or invoked at a later point. (As an example, callback functions are commonly used to respond to user actions; we may define a callback to execute the appropriate code when the user clicks an element on the page.)


// passing a function into a function
function iReturnObjects (thing){
    console.log(thing())
   
} 
//invoke it now using arrow functions
iReturnObjects(()=> ( {firstName: "Arnold", lastNAme:"Mwangi"}));


// Another Instance
// Remember am implimenting Arrow functions
function greet(name, msg){
    console.log( msg(name));
}
greet("Arnold Mwangi", (name)=>(`Hello there ${name} !!`))

//So far so good, lets know try accessing an array of data and display array items one by one

// define array of books with properties

const books = [
    {
        title: "How to become A Man",
        inventory: 8,
        price: 2000
    },
    {
        title: "Why Most Boys Are not Becoming Men",
        inventory: 13,
        price: 1500
    },
    {
        title: "Js for Beginners",
        inventory: 15,
        price: 5000

    },
    {
        title: "Python Fundamentals",
        inventory: 2,
        price: 5600
    }
]

// define a function to access the array and display it

const displayArray = (books)=> {
    if(Array.isArray(books)){
        books.forEach((item) => {
            const booksInfo = Object.values(item).join('');
            console.log(booksInfo);
        });
    }else{
        console.log("Invalid Input, I expected an Array")
    }
}


//uncomment the code below to see how the books are displayed
//displayArray (books);
// Great now lets display the books at an interval of 200ms
setInterval(() => displayArray(books), 2000)