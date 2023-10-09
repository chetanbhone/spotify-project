const max =prompt("enter the maxium number");
const random=Math.floor(Math.random()*max) +1;  
let guess=prompt("guess the number ");

 while(true){

if(guess=="quite"){
    console.log("user quite");
    break;
   }

   if(guess==random ){
    console.log(" your are right congrats " + random);
    break;
   } 
   else if (guess<random){
      console.log(" hint : your guess was too small , please try again")
   }
   else{
      console.log(" hint : your numebr was too large , please try again");
   }



//    else{
//     console.log("number is not match here ....");
//    }
    guess=prompt("guess was wromg plzz try again");
 }