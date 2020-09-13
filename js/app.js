const galleryBtn= document.getElementById("gallery__btn");
const template = document.querySelector(".gallery__figure");
const figure=document.getElementById("123");
const list= figure.closest("ul");

function createRequest(url,method) {
    return fetch(url,{header}).then(response=>{return response.json();});
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

// galleryBtn.addEventListener("click", event=>{
//     event.preventDefault();
//     loadImages();

// })
