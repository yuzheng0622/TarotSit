
function GetCardTypeButtonOnclik(){
        CardType[0].onchange = function(){
            TarotCard[0].innerHTML = "";
            for(var j = 0; j<tarotInformation.length;j++){
                   if(tarotInformation[j].Number.includes(CardType[0].value)){
                        TarotCard[0].innerHTML += "<option value=\""+tarotInformation[j].Number+"\">" + tarotInformation[j].Name + "</option>";
                   }
            }
        }
        
        CardType[1].onchange = function(){
            TarotCard[1].innerHTML = "";
            for(var j = 0; j<tarotInformation.length;j++){
                   if(tarotInformation[j].Number.includes(CardType[1].value)){
                        TarotCard[1].innerHTML += "<option value=\""+tarotInformation[j].Number+"\">" + tarotInformation[j].Name + "</option>";
                   }
            }
        }

        CardType[2].onchange = function(){
            TarotCard[2].innerHTML = "";
            for(var j = 0; j<tarotInformation.length;j++){
                   if(tarotInformation[j].Number.includes(CardType[2].value)){
                        TarotCard[2].innerHTML += "<option value=\""+tarotInformation[j].Number+"\">" + tarotInformation[j].Name + "</option>";
                   }
            }
        }

        CardType[3].onchange = function(){
            TarotCard[3].innerHTML = "";
            for(var j = 0; j<tarotInformation.length;j++){
                   if(tarotInformation[j].Number.includes(CardType[3].value)){
                        TarotCard[3].innerHTML += "<option value=\""+tarotInformation[j].Number+"\">" + tarotInformation[j].Name + "</option>";
                   }
            }
        }

        CardType[4].onchange = function(){
            TarotCard[4].innerHTML = "";
            for(var j = 0; j<tarotInformation.length;j++){
                   if(tarotInformation[j].Number.includes(CardType[4].value)){
                        TarotCard[4].innerHTML += "<option value=\""+tarotInformation[j].Number+"\">" + tarotInformation[j].Name + "</option>";
                   }
            }
        }
}