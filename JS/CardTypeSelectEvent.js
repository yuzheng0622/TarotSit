
function GetCardTypeButtonOnclik(){
        for (let i = 0; i < CardType.length; i++) 
        {
            CardType[i].onchange = () => updateTarotOptions(i);
        }
}

function updateTarotOptions(index) {
    TarotCard[index].innerHTML = "";
    for (let j = 0; j < tarotInformation.length; j++) {
        if (tarotInformation[j].Number.includes(CardType[index].value)) {
            TarotCard[index].innerHTML += `<option value="${tarotInformation[j].Number}">${tarotInformation[j].Name}</option>`;
        }
    }
}