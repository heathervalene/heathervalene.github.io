/*----- constants -----*/

const memoryGame = 'images/MemoryGame';



/*----- state variables -----*/



/*----- cached elements -----*/


const allCards = document.querySelectorAll('.card');
const cardFront = document.getElementById('card-front');
const backCard = document.getElementById('card-back');


/*----- event listeners -----*/


allCards.forEach((card) => {
    card.addEventListener('click', handleCardClick);
})



/*----- functions -----*/

//handle project card being clicked//
function handleCardClick(evt) {
    const clickedCard = evt.currentTarget;
    flipCard(clickedCard);
   
}


//function to flip the individual project card when clicked
const flipCard = (card) => {
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

const flipBack = () => {
 allCards.forEach((card) => {
    card.classList.remove('flipped');
 })

}

