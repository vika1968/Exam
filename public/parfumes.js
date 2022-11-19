"use strict";
let imgsSmallBox = document.querySelectorAll(".gallery-container .box1 img");
imgsSmallBox.forEach(b => b.addEventListener("click", SmallImgTansfer));
function SmallImgTansfer(e) {
    let btnClicked = e.target.getAttribute('src');
    //------Transfer Big Image back----------------
    let imgBigBox = document.querySelector(".gallery-container .box2 img");
    if (imgBigBox != null) {
        bigImgTansfer();
    }
    //---------------------------------------------
    transferImg(btnClicked, ".box2 .transfer-img img", "box1");
    e.target.remove();
}
// -------Transfer big Image from right side to left side----------------
function bigImgTansfer() {
    let imgBigBox = document.querySelector(".gallery-container .box2 img");
    if (imgBigBox != null) {
        let btnClicked = imgBigBox.getAttribute('src');
        if (btnClicked != "") {
            transferImg(btnClicked, ".box2 .transfer-img img", "box2");
        }
    }
}
// -------Global function that runs transferring----------------
let transferImg = (imgSrc, imgToDelete, boxNumb) => {
    console.log(imgToDelete);
    if (imgToDelete != "" && imgToDelete != null) {
        if (boxNumb == "box1") {
            RemoveImages(imgToDelete);
            let boxToreplace = ".transfer-img";
            let box = document.querySelector(boxToreplace);
            let img = document.createElement("img");
            img.setAttribute("src", imgSrc);
            box.appendChild(img);
        }
        else {
            RemoveImages(".box2 .transfer-img img");
            let box = document.querySelector(".box1 #id_div_img" + imgSrc.replace(/\D/g, ''));
            let img = document.createElement("img");
            img.setAttribute("src", imgSrc);
            box.appendChild(img);
        }
    } //else    location.reload()
};
// -------Remove images during transferring----------------
let RemoveImages = (str) => {
    let Img = document.querySelector(str);
    if (Img != null) {
        Img.remove();
    }
};
// -----------Chat--------------
let form = document.querySelector(".form");
form.addEventListener("click", addChat);
let reset = document.querySelector(".reset");
reset.addEventListener("click", clearChat);
function addChat(ev) {
    ev.preventDefault();
    let myChat = document.querySelector("#myChat");
    if (myChat.value != "") {
        const textarea = document.querySelector("#des");
        textarea.value += myChat.value + "\n";
    }
}
function clearChat() {
    let myChat = document.querySelector("#myChat");
    myChat.value = "";
}
