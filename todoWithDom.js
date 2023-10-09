 let btn=document.querySelector("button");
 let inp=document.querySelector("input");
 let ul=document.querySelector("ul");

 btn.addEventListener("click" , function(){

      let item=document.createElement("li");
      item.innerText=inp.value;
      ul.appendChild(item);

      let delbtn=document.createElement("button");
      delbtn.innerText="delete";
      delbtn.classList.add("delete");

      item.appendChild(delbtn);
      
      inp.value="";


 } );



ul.addEventListener("click" , function (event){
    if(event.target.nodeName=="BUTTON"){    //by console.dir
        let listItem=event.target.parentElement;  // access the parent element 
        listItem.remove();
    }
});