var courses = [ "html" , "css" , "js" , "bootstrap" ]
 var p = prompt( " enter courses")
 if( courses.includes(p)){
    console.log("found")
 } 
 else {
courses.push(p);
console.log(p)
 }
 console.log(courses)
