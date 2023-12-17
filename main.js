/*----- constants -----*/

const memoryGame = 'images/memoryGame.png';



/*----- state variables -----*/



/*----- cached elements -----*/

const projectBoard = document.querySelector('.project-list');
const projectOne = document.getElementById('project_1');
const projectTwo = document.getElementById('project_2');
const projectThree = document.getElementById('project_3')
const projectFour = document.getElementById('project_4');
const allCards = document.querySelectorAll('.card');


/*----- event listeners -----*/


allCards.forEach((card) => {
    card.addEventListener('click', handleCardClick);
})



/*----- functions -----*/

//handle project card being clicked//
function handleCardClick(evt) {
    const clickedCard = evt.target;
}


//function to flip the individual project card when clicked//



//function to flip back the individual project card when clicked//