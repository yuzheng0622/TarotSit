/*-----「送出」按鈕事件-----*/
function OutputButtonEvent()
{
	OutputButton.onclick = function()
	{
		ClearTarotInformationForSend();
		GetTarotInformation();
	}
}


function ClearTarotInformationForSend()
{
	for(let i=0;i<TarotCard.length;i++)
	{
		CardName[i].innerHTML = ""; //顯示名稱
		TarotImage[i].innerHTML = ""; //取得塔羅圖片
		CardStatus[i].innerHTML = ""; //取得正逆位
		CardInformation[i].innerHTML = ""; //取牌義	
		CardElement[i].innerHTML = ""; //取得元素
	}
}

/*-----顯示並取得塔羅資訊-----*/
function GetTarotInformation()
{
	tarotCount = 0;
	
	let elementCountArray = new Array(); //取得元素個數
	let descriptionCardNameArray = new  Array();
	
	for(let i=0;i<TarotCard.length;i++)
	{
		if(TarotCard[i].value != "" && TarotCard[i].value != null)
		{
			let informationJSON = SelectTarotData(TarotCard[i].value);
			let index = CardSelectStatus[i].selectedIndex;
			let cardSelectStatusValue = CardSelectStatus[i].options[index].value;
			let common = GetCommon(tarotCount);
			//顯示名稱
			CardName[i].innerHTML = common + informationJSON[0].Name ; 
			//取得塔羅圖片
			GetTarotCardImage(cardSelectStatusValue,TarotImage[i],informationJSON); 
			//取得正逆位
			GetTarotCardStatus(common,cardSelectStatusValue,CardStatus[i],informationJSON); 
			//取牌義
			GetTarotCardDescription(cardSelectStatusValue,CardInformation[i],informationJSON); 
			//取得元素
			let outputCardElement = GetTarotCardElement(common,cardSelectStatusValue,CardElement[i],informationJSON);
			
			elementCountArray.push(outputCardElement);
			
			tarotCount ++;
		}	
	}
	//取得元素數量
	GetElementCountHTML(elementCountArray);
}
