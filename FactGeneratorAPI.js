let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
     let fact = await getfacts();  //to rsolve the promise we use async and await
     console.log(fact);
     let p= document.querySelector("#result");
     p.innerHTML=fact;
});



let url="https://catfact.ninja/fact";

async function getfacts(){

  try{
 
    let res= await axios.get(url);
    return res.data.fact;

  } catch(err){
     console.log(err);
     return "No fact found";
  }

}