                        // task 1
var cources = ['html' , 'css' , 'js' , 'bootstrap']
var p = prompt("course name")
 var ind = cources.findIndex((ele )=> ele==p)
    if (ind !== -1){
    console.log('found')
    }
    else {
    cources.splice(2 , 0 , p)
    console.log(cources)
    }
//===========================================================
                        //task 2
var p = prompt("name")
var user = [
    {
    name: "Rwaida",
    job: " Developer",
    age: "20"
 },
   {
    name: "Amen",
    job: " Doctor",
    age: "40",
 },
    {
    name: "Adel",
    job: " Engineer",
    age: "30"
 }
]
 var ind= user.findIndex((ele) => ele.name==p )
 console.log(ind)





















