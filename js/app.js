const galleryBtn= document.getElementById("gallery__btn");
const template = document.querySelector(".gallery__figure");
const figure=document.getElementById("123");
const list= figure.closest("ul");
var form=document.querySelector("#contactSubmision");
//Lorem Picsum API
function createRequest(url,method) {
    return fetch(url).then(response=>{return response.json();});
}

async function loadImages() {
    let i=0
    const images= await createRequest("https://picsum.photos/v2/list");
    console.log(images);
    for(const image of images){
        const newImage = document.importNode(figure, true);
        console.log(newImage);
        newImage.querySelector("img").src=image.download_url;
        newImage.querySelector(".gallery__img-caption > span").innerHTML=image.author;

        list.append(newImage);
        if(i==6) return;
        i++;
    
    }
}
function createNode(id,author,src) {
  
}
galleryBtn.addEventListener("click", event=>{
    event.preventDefault();
    loadImages();
});

//GET Data from inputs

form.addEventListener("click",(event) =>{
    event.preventDefault();
    let entry ={};
    let entryMsg =""
    formdata.querySelectorAll("input").forEach((elmt,idx) =>{
       const name= elmt.name;
       const value=elmt.value;
        entry = Object.assign({[name]:value},entry);
        console.log(entry,`${name}`);
        entryMsg += `${name}: ${value} \n`
    });
   entryMsg+= "Mensagem: " +formdata.querySelector("textarea").value;
   telgramBot(entryMsg);
});


//Telegram Bot
   function telgramBot(entryMsg){
    const BOT_ID="1281725584 ";
    const REQUEST_URL = new URL("https://api.telegram.org/bot917755688:AAEU2YVG_MT3EnlrYDSRPYuJzLy0WIWTMGY/sendMessage");
    REQUEST_URL.searchParams.set("chat_id",BOT_ID);
    REQUEST_URL.searchParams.set("text",entryMsg);

    fetch(REQUEST_URL,{method:"GET"}).then((response)=>{
        if (response.status>=200 && response.status<400) {
            alert("complete");
            form.style.outline="1rem green solid ";
            return;
        }else{
            alert("error", response.status );
        }
    }
        
    )
}

