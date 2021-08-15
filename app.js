//JAVASCRIPT


const cards = document.querySelectorAll(".card");
const allLists = document.querySelectorAll(".status");

let draggableTodo = null;


cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
})

//MOVING AND DRAGGIN CARDS FUNCTIONS.
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


// MODAL POP UP
const btns = document.querySelectorAll("[data-target-modal]");
const closeModal = document.querySelectorAll(".closeModal");
const overlay = document.getElementById("overlay");


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
       document.querySelector(btn.dataset.targetModal).classList.add("active");
       overlay.classList.add("active");
    });
});


closeModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});


window.onclick = (event) => {
    if (event.target == overlay)
    {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");  
    }   
}

// TODO CREATION.






//<!--/* ** CODE SPRINT PROJECT -- BUG TRACKER  ** 
 //KRISTOFF L.  © Kristoff L. All Rights Reserved.-->