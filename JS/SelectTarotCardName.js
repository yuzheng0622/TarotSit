function GetTarotSelectData()
{
	for(let i=0;i < TarotCard.length;i++)
	{
		for(let j=0;j<tarotInformation.length;j++)
		{
			if(tarotInformation[j].Number.includes("Big")){
				TarotCard[i].innerHTML += "<option value=\""+tarotInformation[j].Number+"\">" + tarotInformation[j].Name + "</option>";
			}
		}
	}
}
