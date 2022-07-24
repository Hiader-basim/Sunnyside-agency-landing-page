const open = document.querySelector(".open");
const list = document.querySelector(".list");
const Transform = document.querySelector(".Transform");

open.onclick = () =>{
        list.style.display = "block";
}
Transform.onclick = () =>{
        list.style.display = "none";
}