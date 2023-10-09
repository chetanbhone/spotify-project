  let todo=[];
  let req=prompt("please enter your request");



  while(true){

        if(req=="quite"){
            console.log("quiting app");
            break;
        }

     if(req=="list"){  
        console.log("-----------"); 
        for(i=0; i<todo.length; i++ ){
            console.log(i , todo[i]);
        }  

        console.log("-----------"); 
        
         
     }
     
     else if(req=="add"){
    let task=prompt("please enter your task you want to add");
        todo.push(task);
        console.log("task added");
         
     }

     else if(req=="delete"){
        let index=prompt("enter your index");
        todo.splice(index,1); 
        console.log("task deleted"); 
     }

     else{
      console.log("wrong request");
     }
    




     req=prompt("please enter your request");



 
  }

