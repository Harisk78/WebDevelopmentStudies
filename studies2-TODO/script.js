let list=document.getElementById("list");
let btn=document.getElementById("btn");
let inp=document.getElementById("inp");

btn.addEventListener("click",()=>{
    if(inp.value=='' || inp.value==null){
        alert("Enter Task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inp.value;
        list.appendChild(li);
        inp.value="";
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
});
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("strike");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
  
