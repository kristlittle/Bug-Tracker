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




