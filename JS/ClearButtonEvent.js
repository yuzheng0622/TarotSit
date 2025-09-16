/*-----「清除」按鈕事件-----*/
function ClearButtonEvent()
{
	ClearButton.onclick = function()
	{
		ClearTarotInformation();
		ClearTarotSelectData();
	}
}

/*-----清除塔羅資訊-----*/
function ClearTarotInformation()
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

function ClearTarotSelectData()
{
	for(let i=0;i<TarotCard.length;i++)
	{
		TarotCard[i].value = "";
		CardSelectStatus[i].value = "";
		CardType[i].value = "";
	}
}