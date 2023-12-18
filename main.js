



/*----- cached elements -----*/


const allCards = document.querySelectorAll('.card');
const cardInner = document.querySelector('card-inner')



/*----- event listeners -----*/

document.addEventListener('DOMContentLoaded', allCards);

allCards.forEach((card) => {
    card.addEventListener('click', handleCardClick);
})



/*----- functions -----*/


function handleCardClick(evt) {
    const clickedCard = evt.currentTarget;
    flipCard(clickedCard);
   
}


//function to flip the individual project card when clicked
const flipCard = () => {
cardInner.classList.toggle('flipped');
}


