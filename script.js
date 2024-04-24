const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll("input-box");


function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.setAttribute("contenteditable","true");
    inputBox.className="input-box";
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
});
notesContainer.addEventListener("keyup",function(e){
    if(e.target.classList.contains("input-box")){
        updateStorage();
    }
})


// ---new version


