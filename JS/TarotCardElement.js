//-----取得元素-----
function GetTarotCardElement(common,cardSelectStatusValue,CardElement,informationJSON)
{
	let output = "";
	if(cardSelectStatusValue == cardStatusEnum.positiveEN)
	{
		CardElement.innerHTML = common + informationJSON[0].element;
		output = informationJSON[0].element;
	}
	else
	{
		output = GetTarotElementS(common,informationJSON[0].element,CardElement);
	}
	
	return output;
}

function GetTarotElementS(common,TarotElement,CardElement)
{
	let output = "";
	switch(TarotElement)
	{
		case cardStatusEnum.fire:
			CardElement.innerHTML = common + cardStatusEnum.water;
			output = cardStatusEnum.water;
			break;
		case cardStatusEnum.water:
			CardElement.innerHTML = common + cardStatusEnum.fire;
			output = cardStatusEnum.fire;
			break;
		case cardStatusEnum.wind:
			CardElement.innerHTML = common + cardStatusEnum.earth;
			output = cardStatusEnum.earth;
			break;
		case cardStatusEnum.earth:
			CardElement.innerHTML = common + cardStatusEnum.wind;
			output = cardStatusEnum.wind;
			break;
	}
	return output;
}
