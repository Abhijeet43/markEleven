const bDate = document.querySelector("#bDate");
const luckyNum = document.querySelector("#luckyNum");
const button = document.querySelector("#btn-submit");
const outputE = document.querySelector("#outputDiv")
const closeBtn = document.querySelector("#close-notice")
const noticeDiv = document.querySelector(".notice")
const formEl = document.querySelector("#form")


function setUpOutput(msg,img){
    outputDiv.innerHTML = `<div class="output-container">${msg}</div><img class="output-img" src=${img} />`;  
}


formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    const dateString = (bDate.value).split("-").join("");
    let sum = 0;
   
    for(var i=0;i< dateString.length;i++){
        sum = sum + Number(dateString[i]); 
    }
    
    const luckyNo= Number(luckyNum.value);
    if(sum%luckyNo){
        setUpOutput("Sorry!! Your birthday is not lucky","./images/sad.svg");
    }
    else{
        setUpOutput("Yay!!Your birthday is lucky!","./images/happy.svg");
    }
})

closeBtn.addEventListener("click",()=>{
    noticeDiv.style.display="none"
})