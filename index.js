
var completedtasks=0;
var selectedImg;
const addTaskBtn=document.getElementsByClassName("addButton")[0];
const container=document.getElementsByClassName("sections")[0];
const completedSpan=document.getElementsByClassName("attemptcount1")[0];
//var divboxespanl=document.getElementsByClassName("divboxes");
const resultstatus=document.getElementById("result")
var divboxespanl;

addTaskBtn.addEventListener("click",reset);

window.addEventListener("load",()=>
{
  addBoxes();
})

function bindEvents() {
  let elementsel=this;
  let status=bindEventsStatus(elementsel);
  if(status==="success")
  {
    //alert("You won the Game")
    resultstatus.textContent="Congratulations! You won the Game."
  }
  else
  {
    if((completedtasks-1)==3)
        //alert("You lost the game");
        resultstatus.textContent="Sorry! You lost the Game."
  }

}
function bindEventsStatus(elementsel){
  elementsel.style.backgroundColor="transparent";

if(completedtasks===0)
{
 let selectedBox= elementsel.parentNode;
 let selectedImgtag=selectedBox.querySelector("img");
 selectedImg=selectedImgtag.getAttribute("src");
 //alert(selectedImg);
 completedtasks++;

}
else
{
  completedtasks++;
  completedSpan.textContent=completedtasks-1;
  let boxsel= elementsel.parentNode;
  let boxseltag=boxsel.querySelector("img");
  boxseltagmg=boxseltag.getAttribute("src");

  if(boxseltagmg===selectedImg)
  {
     return "success";
  }
  else
  {
    
    if((completedtasks-1)==3)
    {
      return "failure";
    }
  }
}


}

function reset() {
  completedtasks=0;
  resultstatus.textContent=""
  completedSpan.textContent=completedtasks;
  divboxespanl =document.querySelectorAll(".divboxes");
  console.log(divboxespanl);
  divboxespanl.forEach(element => 
    container.removeChild(element)
  );
  divboxespanl =document.querySelectorAll(".divboxes");
  console.log(divboxespanl);

  addBoxes();

}


 function addBoxes()
 {

  for (let index = 0; index < 3; index++) {
    let divboxes=document.createElement("div");
    divboxes.className="divboxes";
    for (let index1 = 0; index1 <6; index1++) {
      let divbox=document.createElement("div");
      let imgbox=document.createElement("img");
      let buttonbox=document.createElement("button");
      divbox.className="divbox";
      buttonbox.className="buttonbox";

      imgbox.setAttribute("width","100");
      imgbox.setAttribute("height","100");
      let imgpos=Math.floor(Math.random() * 6);
      imgbox.setAttribute("src","images/img"+(imgpos+1)+".png");
      divbox.style.backgroundColor="transparent";
      buttonbox.style.backgroundColor="white";
      buttonbox.style.width="100px"
      buttonbox.style.height="100px"
      buttonbox.onclick=bindEvents;
     
      divbox.style.width="100px"
      divbox.style.height="100px"

      //imgbox.style.display="none";
      divbox.appendChild(imgbox);
      divbox.appendChild(buttonbox);
      divboxes.appendChild(divbox);
      
    }
    container.appendChild(divboxes);
  }

 }
