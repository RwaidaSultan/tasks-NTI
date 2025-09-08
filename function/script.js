function looping( startNum , endNum , breakNum , countinuNum){
  if( startNum == undefined|| endNum== undefined|| breakNum == undefined||countinuNum== undefined)
    console.log( " must enter 4 num");
  else{
  for(var i = startNum ; i<= endNum;i++) {
    if(i==breakNum){
        break;
      } 
        else if(i==countinuNum){
            continue;
      }
      console.log(i)
    }
  }
}
looping( 10 , 20 , 17 , 15)
console.log("=======")
looping( 5 , 10)
console.log("=======")
looping(5 , 10 , 8)
console.log("=======")
looping(5 , 10 , 8 , 7)