//JAVASCRIPT


const cards = document.querySelectorAll(".card");
const allLists = document.querySelectorAll(".list");

//card & list listener
cards.addEventListener('dragstart', dragStart);
cards.addEventListener('dragend', dragEnd);

for (const list of allListss) {
    cards.addEventListener("dragover", dragOver);
    cards.addEventListener("dragenter", dragEnter);
    cards.addEventListener("dragleave", dragLeave);
    cards.addEventListener("drop", dragDrop);

}

//DRAG FUNSTIONS
//start dragging element
function dragStart(){
    console.log("Start");
}

//
function dragEnd(){
    console.log("Ended");
}

//
function dragOver(e){
    e.preventDefault();
    console.log("Over");
}

//drag element entering drop target range
function dragEnter(){
    console.log("Ended");
}

//drag element leaving drop target range
function dragLeave(){
    console.log("Leave");
}

//element dropped on target
function dragDrop(){
    console.log("Drop");
}



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
        const modals = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.add("active");
    });
});

//listen for overlay and close
window.onclick = (event) => {
    btn.addEventListener("click", () => {
        if(event.target == overlay) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => modal.classList.remove("active"));
            overlay.classList.remove("active");   
        }     
    })
};




/*
cards.forEach((card) => {
    eventOnCard (card);
    
    //card.addEventListener ("dragend", dragEnd);  
});


lists.forEach((list) =>{
    list.addEventListener('dragOver', (e)=> {
        let draggingCard = document.querySelectorAll('.dragging');
        list.appendChild(draggingCard);     
    });
})

function eventOnCard(card){
    cards.addEventListener('dragstart', (e) => {
        cards.classList.add('dragging');
        console.log("draggins Started")
    })

    cards.addEventListener('dragend', (e) => {
        cards.classList.remove('dragging');
        console.log("draggin Ended")
    })

}

*/




//<!--/* ** CODE SPRINT PROJECT -- BUG TRACKER  ** 
 //KRISTOFF L.  © Kristoff L. All Rights Reserved.-->