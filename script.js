let cards = document.getElementById("article").children;
let desc = ["naruto", "gon", "luffy", "ryuga", "kaneki"];
// console.log(cards);
let cardContent = document.createElement('h1');
const enlarge = (card_no) => {
    let counter = 0;
    for (let card of cards) {
        if(counter!=card_no)
            card.firstElementChild.classList.remove('onclick');
        counter++;
    }
    cards[card_no].firstElementChild.classList.toggle('onclick');
    if (cards[card_no].firstElementChild.classList.contains('onclick')) {
        cardContent.textContent = desc[card_no];
        cards[card_no].appendChild(cardContent);
        cardContent.classList.add('extraClass');
    }
    else {
        cards[card_no].removeChild(cards[card_no].getElementsByClassName('extraClass')[0]);
    }
};
