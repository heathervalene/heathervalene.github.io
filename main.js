
const projectOne = 'images/MemoryGame.png';


/*----- cached elements -----*/






/*----- event listeners -----*/





/*----- functions -----*/


function handleCardClick(evt) {
    const clickedCard = evt.currentTarget;
    flipCard(clickedCard);
   
}


//function to flip the individual project card when clicked
const flipCard = () => {
cardInner.classList.toggle('flipped');
}


