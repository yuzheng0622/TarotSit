//-----取得牌義-----
function GetTarotCardDescription(cardSelectStatusValue,CardInformation,informationJSON)
{
	let tarotName = informationJSON[0].Name;
	if(cardSelectStatusValue == cardStatusEnum.positiveEN)
	{
		CardInformation.innerHTML = tarotName + "-" + cardStatusEnum.positiveCN +"：" + informationJSON[0].InformationKeyY + "<hr style=\" height:5px;border:none;border-top:2px dotted #0000E3; border-width:5px;\" />";
	}
	else
	{
		CardInformation.innerHTML = tarotName + "-" + cardStatusEnum.reversedCN +"：" + informationJSON[0].InformationKeyS + "<hr style=\" height:5px;border:none;border-top:2px dotted #0000E3; border-width:5px;\" />";
	}
}
