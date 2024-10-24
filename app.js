"use strict";

const menuBtn = document.querySelector("#menuBtn");
const menuList = document.querySelector("#menuList");

menuBtn.addEventListener("click", ()=>{
    menuList.classList.toggle("ml-[-100%]")

    if(menuList.classList.contains("ml-[-100%]")){
        menuBtn.innerHTML=`<img src="./images/menuBtn.svg" alt="svg">`
    }else{
        menuBtn.innerHTML=`<img src="./images/x.svg" alt="svg">`
    }
});


