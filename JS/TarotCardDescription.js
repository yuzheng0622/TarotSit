//-----取得牌義-----
function GetTarotCardDescription(cardSelectStatusValue,CardInformation,informationJSON)
{
	let tarotName = informationJSON[0].Name;
	if(cardSelectStatusValue == cardStatusEnum.positiveEN)
	{
		CardInformation.innerHTML = tarotName + "-" + cardStatusEnum.positiveCN +"：" + informationJSON[0].InformationKeyY+ "<br>";
	}
	else
	{
		CardInformation.innerHTML = tarotName + "-" + cardStatusEnum.reversedCN +"：" + informationJSON[0].InformationKeyS + "<br>";
	}
}
