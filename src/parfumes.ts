 
let imgsSmallBox  =  document.querySelectorAll(".gallery-container .row1 img") 
imgsSmallBox.forEach(b => b.addEventListener("click", SmallImgTansfer)) 

function SmallImgTansfer (e:any) {            
    let btnClicked = e.target.getAttribute('src')         

    //------Transfer Big Image back----------------
        let imgBigBox = document.querySelector(".gallery-container .row2 img")
        console.log(imgBigBox)
        if (imgBigBox != null){
            bigImgTansfer() 
    }         
    //---------------------------------------------
            
    transferImg(btnClicked,".row2 .transfer-img img", "box1")                    
    e.target.remove()           
}

// -------Transfer big Image from right side to left side----------------
function bigImgTansfer() {      
    let imgBigBox = document.querySelector(".gallery-container .row2 img")
  
    if (imgBigBox != null){
        let btnClicked = imgBigBox!.getAttribute('src') 
        if(btnClicked != ""){                 
             transferImg(btnClicked!,".row1 .transfer-img img", "box2")         
        }  
    }       
 }

// -------Global function that runs transferring----------------
let transferImg = (imgSrc: string, imgToDelete: string, boxNumb: string) => {     
    if(imgToDelete !="" && imgToDelete != null){
           
        if (boxNumb == "box1"){           
                Removeimages(imgToDelete)
                let boxToreplace = ".transfer-img"   
                let box =  document.querySelector(boxToreplace) 
                let img = document.createElement("img")
                img.setAttribute("src", imgSrc)    
                box!.appendChild (img)    
            }
        else{      
                Removeimages(".row2 .transfer-img img")               
                let box =  document.querySelector(".row1 #id_div_img" + imgSrc.replace(/\D/g, '')) 

                let img = document.createElement("img")
                img.setAttribute("src", imgSrc)    
                box!.appendChild (img)   
            }      
    }
} 

// -------Remove images during transferring----------------
let Removeimages = (str: string) => {
    let Img =  document.querySelector(str)      
      if (Img != null){      
        Img.remove()
     }    
}

// -----------Chat--------------
let form = document.querySelector(".form") as HTMLElement
form.addEventListener("click", addChat) 

let reset = document.querySelector(".reset") as HTMLElement
reset.addEventListener("click", clearChat) 

function addChat(ev:Event){ 
    ev.preventDefault()
    let myChat = document.querySelector("#myChat") as HTMLInputElement    
    if (myChat.value !=""){
        const textarea = document.querySelector("#des") as HTMLInputElement      
        textarea.value +=  myChat.value  + "\n" 
    }   
}

function clearChat(){   
    let myChat = document.querySelector("#myChat")  as HTMLInputElement
    myChat.value =""
}


