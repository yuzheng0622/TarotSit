function GetTarotSelectData()
{
	for(let i=0;i < TarotCard.length;i++)
	{
		TarotCard[i].innerHTML += "<option value=\""+""+"\">" + "請選擇" + "</option>";

		for(let j=0;j<tarotInformation.length;j++)
		{
			TarotCard[i].innerHTML += "<option value=\""+tarotInformation[j].Name+"\">" + tarotInformation[j].Name + "</option>";
		}
	}
}
