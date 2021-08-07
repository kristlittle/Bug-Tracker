//JAVASCRIPT


const cards = document.querySelectorAll(".card");
const allLists = document.querySelectorAll(".list");

let draggableTodo = null;


cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
})

function dragStart()
{
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
    console.log("dragStart");
        
}




//<!--/* ** CODE SPRINT PROJECT -- BUG TRACKER  ** 
 //KRISTOFF L.  © Kristoff L. All Rights Reserved.-->