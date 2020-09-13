const hireUS = document.querySelector(".contact #hireus");
const formdata = document.querySelector(".contact form");
const close = document.querySelector(".contact__close");
const nav =document.querySelector("nav");

const form=document.querySelector("#contactSubmision");

document.getElementById("menu").addEventListener("click", ()=>{
nav.classList.toggle("nav__slide");
});

function execusao(params) {
    hireUS.classList.toggle("makeVisibleNone");
    hireUS.classList.toggle("makeVisibleGrid");

    formdata.classList.toggle("makeVisibleNone");
    formdata.classList.toggle("makeVisibleGrid");
    
    if(formdata.classList.contains("makeVisibleNone")){
        console.log("contem");
        formdata.classList.add("displayNone");
        hireUS.classList.remove("displayNone");

    }else{
        formdata.classList.remove("displayNone");
        hireUS.classList.add("displayNone");

    }
    
}
hireUS.addEventListener("click", execusao);
close.addEventListener("click", execusao);


//APP
form.addEventListener("click",(event) =>{
    let entry ={};
    let entryMsg =""
    event.preventDefault();
    formdata.querySelectorAll("input").forEach((elmt,idx) =>{
       const name= elmt.name;
       const value=elmt.value;
        entry = Object.assign({[name]:value},entry);
        console.log(entry,`${name}`);
        entryMsg += `${name}: ${value} \n`
    });
   entryMsg+= "Mensagem: " +formdata.querySelector("textarea").value;
   console.log(entryMsg)
});
