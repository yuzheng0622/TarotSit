//-----取得塔羅圖片-----
function GetTarotCardImage(cardSelectStatusValue,TarotImage,informationJSON)
{
	if(cardSelectStatusValue == cardStatusEnum.positiveEN)
	{
		let dir = TarotImageFile + informationJSON[0].Number +".png";
		TarotImage.innerHTML = "<img src=\""+dir+"\" width=\"15%\"\">";
	}
	else
	{
		let dir = TarotImageFile + informationJSON[0].Number +".png";
		TarotImage.innerHTML = "<img src=\""+dir+"\" width=\"15%\" style=\"transform:rotate(180deg);\">";
	}
}