body=document.querySelector("body");

container=document.querySelector(".container");
input=document.querySelector(".input");
btn=document.querySelector(".btn");

const done=document.querySelector('.done');
const remove=document.querySelector('.remove');

btn.addEventListener("click",(e)=>{
   if(input.value==""){ console.log("no");}
   
   const newElement= document.createElement("div");
   newElement.className="display"
   newElement.innerHTML=`
   <h3>${input.value} </h3>
   <div class="btn2"> <button class="done" >Done</button>
   <button class="remove">remove</button> </div>`
   container.append(newElement)
})

container.addEventListener("click",(e)=>{
   if(e.target.className=="done")
   {
     const head=e.target.parentNode.previousElementSibling;
     head.style.textDecoration="line-through";
   }
   if(e.target.className=="remove")
   {
     const element=e.target.parentNode.parentNode;
     element.remove();
     
   }
})