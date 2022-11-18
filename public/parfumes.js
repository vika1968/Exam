"use strict";
let box2 = document.querySelector(".row2");
box2.addEventListener("click", bigImgClick);
// -------Transfer Small Image from left side to right side----------------
let imgsSmallBox = document.querySelectorAll(".gallery-container .row1 img");
for (let i = 0; i < imgsSmallBox.length; i++) {
    let btnClicked = imgsSmallBox[i].getAttribute('src');
    imgsSmallBox[i].addEventListener("click", () => {
        if (btnClicked != "" && document.querySelector(".row2 .transfer-img img") == null) {
            transferImg(btnClicked, ".row2 .transfer-img img", "box1");
            imgsSmallBox[i].remove();
        }
    });
}
// -------Transfer big Image from right side to left side----------------
function bigImgClick() {
    let imgBigBox = document.querySelector(".gallery-container .row2 img");
    if (imgBigBox != null) {
        let btnClicked = imgBigBox.getAttribute('src');
        if (btnClicked != "") {
            transferImg(btnClicked, ".row1 .transfer-img img", "box2");
        }
    }
}
// -------Function that runs transferring----------------
let transferImg = (imgSrc, imgToDelete, boxNumb) => {
    if (imgToDelete != "" && imgToDelete != null) {
        if (boxNumb == "box1") {
            Removeimages(imgToDelete);
            let boxToreplace = ".transfer-img";
            let box = document.querySelector(boxToreplace);
            let img = document.createElement("img");
            img.setAttribute("src", imgSrc);
            box.appendChild(img);
        }
        else {
            Removeimages(".row2 .transfer-img img");
            let box = document.querySelector(".row1 #id_div_img" + imgSrc.replace(/\D/g, ''));
            let img = document.createElement("img");
            img.setAttribute("src", imgSrc);
            box.appendChild(img);
        }
    }
};
// -------Remove images during transferring----------------
let Removeimages = (str) => {
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
