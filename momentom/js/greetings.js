const title = document.querySelector(".titleEvents h1");
const colors = ["palegreen", "cornflowerblue", "blueviolet", "tomato"];

const superEventHandler = {
    mouseEnter : function () {
        title.innerText = "The mouse is here!";
        title.style.color = colors[0];
    },
    mouseLeave : function () {
        title.innerText = "The mouse is gone!";
        title.style.color = colors[1];
    },
    windowResize : function () {
        title.innerText = "You just resized!";
        title.style.color = colors[2];
    },
    mouseContextmenu : function () {
        title.innerText = "That was a right click";
        title.style.color = colors[3];
    } 
}

title.addEventListener("mouseleave", superEventHandler.mouseLeave);
title.addEventListener("mouseenter", superEventHandler.mouseEnter);
window.addEventListener("contextmenu", superEventHandler.mouseContextmenu);
window.addEventListener("resize", superEventHandler.windowResize);
