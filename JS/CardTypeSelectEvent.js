function GetCardTypeButtonOnclik(){
    for(var i=0;i<CardType.length;i++){
        CardType[i].onchange = function(){
            for(var j = 0; j<TarotCard.length;j++){
                console.log(TarotCard[j].value);
            }
                
        }
    }
}