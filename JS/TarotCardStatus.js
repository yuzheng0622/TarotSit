//-----取得正逆位-----
function GetTarotCardStatus(common,cardSelectStatusValue,CardStatus,informationJSON)
{
	let tarotName = informationJSON[0].Name;
	if(cardSelectStatusValue == cardStatusEnum.positiveEN)
	{
		CardStatus.innerHTML = common + cardStatusEnum.positiveCN;
	}
	else
	{
		CardStatus.innerHTML = common + cardStatusEnum.reversedCN;
	}
}
