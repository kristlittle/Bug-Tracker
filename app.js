//JAVASCRIPT


const cards = document.querySelectorAll(".card");
const allLists = document.querySelectorAll(".status");

let draggableTodo = null;


cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
})

//drag action started
function dragStart()
{
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragStart");
        
}

//drag action stopped/ended
function dragEnd()
{
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragEnd");
        
}

allLists.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);

})
//
//drag over new block
function dragOver(e)
{
    e.preventDefault();
    //console.log("dragOver");   
}

//entereing new block
function dragEnter()
{
    this.style.border = "3px dashed #ddd";
    console.log("dragEnter");   
}

//drag leaving
function dragLeave()
{
    this.style.border = "none";
    console.log("dragLeave");   
}

//drag to be dropped 
function dragDrop()
{
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");   
}


// Modal pop up
const btn = document.querySelectorAll("[data-target-modal]");
const closeModal = document.querySelectorAll(".closeModal")






//<!--/* ** CODE SPRINT PROJECT -- BUG TRACKER  ** 
 //KRISTOFF L.  © Kristoff L. All Rights Reserved.-->