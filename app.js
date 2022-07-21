let index = 0;

function markIncomplete(event) {
    const card = document.querySelector('#' + `${event.currentTarget.parentNode.parentNode.id}`);
    card.classList.add('incomplete');
    card.classList.remove('in-progress');
    card.classList.remove('complete');
    moveElement(card);
}

function markComplete(event) {
    const card = document.querySelector('#' + `${event.currentTarget.parentNode.parentNode.id}`);
    card.classList.add('complete');
    card.classList.remove('in-progress');
    card.classList.remove('incomplete');
    moveElement(card);
}

function markInProgress(event) {
    const card = document.querySelector('#' + `${event.currentTarget.parentNode.parentNode.id}`);
    card.classList.add('in-progress');
    card.classList.remove('complete');
    card.classList.remove('incomplete');
    moveElement(card);
}

function moveElement(element){
    if(element.classList.contains('complete')) {
        const completeColumn = document.querySelector('.col-complete');
        completeColumn.append(element);
    }
    else if(element.classList.contains('in-progress')) {
        const inProgColumn = document.querySelector('.col-in-progress')
        inProgColumn.append(element);
    }
    else {
        const incompleteColumn = document.querySelector('.col-incomplete')
        incompleteColumn.append(element);
    }
}

function createCard(){

    // Creating card elements
    const card = document.createElement("div");
    const cardHeader = document.createElement("h3");
    const cardDescription = document.createElement("p");
    const buttonContainer = document.createElement("div");
    const buttonComplete = document.createElement("button");
    const iconBtnComplete = document.createElement("i");
    const buttonInProgress = document.createElement("button");
    const iconBtnInProgress = document.createElement("i");
    const buttonIncomplete = document.createElement("button");
    const iconBtnIncomplete = document.createElement("i");

    // Adding proper classes and IDs to elements
    card.classList.add('card', 'incomplete');

    card.setAttribute('id', 'card-'+`${index}`);
    index += 1;
    

    //card.setAttribute('id', 'card-4');
    cardHeader.classList.add('card-header');
    cardDescription.classList.add('card-description');
    buttonContainer.classList.add('button-container');
    buttonComplete.classList.add('card-button', 'btn-complete');
    buttonComplete.setAttribute('onclick', 'markComplete(event)');
    iconBtnComplete.classList.add('material-icons');
    iconBtnComplete.textContent = 'done';
    buttonInProgress.classList.add('card-button', 'btn-in-progress');
    buttonInProgress.setAttribute('onclick', 'markInProgress(event)');
    iconBtnInProgress.classList.add('material-icons');
    iconBtnInProgress.textContent = 'arrow_forward';
    buttonIncomplete.classList.add('card-button', 'btn-incomplete');
    buttonIncomplete.setAttribute('onclick', 'markIncomplete(event)');
    iconBtnIncomplete.classList.add('material-icons');
    iconBtnIncomplete.textContent = 'close';

    // Dummy content to test card
    cardHeader.textContent = 'Dummy Header'
    cardDescription.textContent = 'This is a dummy description for testing a card, please pay it no mind. It is but humble garbage.'

    // Appending elements together
    card.append(cardHeader);
    card.append(cardDescription);
    
    buttonComplete.append(iconBtnComplete);
    buttonInProgress.append(iconBtnInProgress);
    buttonIncomplete.append(iconBtnIncomplete);

    buttonContainer.append(buttonComplete);
    buttonContainer.append(buttonInProgress);
    buttonContainer.append(buttonIncomplete)
    
    card.append(buttonContainer);

    // Testing attachmemt to document
    const toDoColumn = document.querySelector('.col-incomplete');
    toDoColumn.append(card);
}