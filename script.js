let para = document.querySelector("p");
let span = document.querySelector("span");
let button = document.querySelector("button");


function randomquotes(){
    const randomnumber = Math.floor((Math.random() * 100)+1);
    const url = `https://dummyjson.com/quotes/${randomnumber}`;
    fetch(url).then(res => res.json()).then(data=>{
         para.innerHTML =`" ${data.quote} "`
         span.innerHTML = `- ${data.author} -`
         console.log(data);
    });
}

button.addEventListener("click",()=>{
    window.location.reload();
});


randomquotes();






