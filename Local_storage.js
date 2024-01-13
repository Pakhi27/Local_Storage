
let key=prompt("Enter value of key")
let value=prompt("Enter value of value")

localStorage.setItem(key,value)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

if(key=="red"||key=="blue"){
    localStorage.removeItem(key)
}

if(key==0)
{
    localStorage.clear()
}

//JSON.stringify(object)
//convert objects to strings
//JSON.parse(string)
//convert strings to objects

//To-Do App
let n=prompt("Enter number of works to do in a day")
let i=0;
while(i<n)
{
let a=prompt("Enter your work")
let b=prompt("Enter your time")

localStorage.setItem(a,b)
i++;
}

