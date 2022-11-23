 
let imgsSmallBox  =  document.querySelectorAll(".gallery-container .box1 img") 
imgsSmallBox.forEach(b => b.addEventListener("click", SmallImgTansfer)) 

function SmallImgTansfer (e:any) {            
    let btnClicked = e.target.getAttribute('src')      

    //------Transfer Big Image back----------------
        let imgBigBox = document.querySelector(".gallery-container .box2 img")       
        if (imgBigBox != null){
             bigImgTansfer()            
        }       
    //---------------------------------------------
       
    transferImg(btnClicked,".box2 .transfer-img img", "box1")                    
    e.target.remove()            
}

// -------Transfer big Image from right side to left side----------------
function bigImgTansfer() {      
    let imgBigBox = document.querySelector(".gallery-container .box2 img")
  
    if (imgBigBox != null){
        let btnClicked = imgBigBox!.getAttribute('src') 
        if(btnClicked != ""){                 
             transferImg(btnClicked!,".box2 .transfer-img img", "box2")         
        }  
    }       
 }

// -------Global function that runs transferring----------------
let transferImg = (imgSrc: string, imgToDelete: string, boxNumb: string) => {  
    console.log(imgToDelete)        
    if(imgToDelete !="" && imgToDelete != null){
           
        if (boxNumb == "box1"){           
                RemoveImages(imgToDelete)                
                let div =  document.querySelector(".transfer-img") 
                let img = document.createElement("img")
                img.setAttribute("src", imgSrc)    
                div!.appendChild (img)                
            }
        else{      
                RemoveImages(".box2 .transfer-img img")               
                let div =  document.querySelector(".box1 #id_div_img" + imgSrc.replace(/\D/g, '')) 
                let img = document.createElement("img")
                img.setAttribute("src", imgSrc)    
                div!.appendChild (img) 
                img!.addEventListener("click", SmallImgTansfer)
            }      
    }
} 

// -------Remove images during transferring----------------
let RemoveImages = (str: string) => {
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
    let myChat = document.querySelector("#myChat") as HTMLInputElement
    myChat.value =""
}


