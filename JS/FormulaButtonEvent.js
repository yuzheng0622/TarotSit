//------------帶牌法事件------------



function FormulaButtonEvent(){
	FormulaCardInfo.innerHTML = "";
	
	let notRePeatNumber = [];
	//取得有帶牌法的數字，並且移除重複的數值
	let formulaNumberAry = CheckFormula(); //重複的屬性+數字
	let reTarotCard = GetFormulaContForTwoNumber(formulaNumberAry); //重複的純數字
	reTarotCard = reTarotCard.filter((value, index, self) => self.indexOf(value) === index); //將純數字重複變成不重複
	let TarotDescriptJsonData = SelectTarotDataForNumber(reTarotCard);
 	TarotDescriptJsonData = TarotDescriptJsonData.filter(item => !formulaNumberAry.some(formula => item.Number.includes(formula)));
	for(let i=0;i<TarotDescriptJsonData.length;i++)
	{
		let dir = TarotImageFile + TarotDescriptJsonData[i].Number +".png";
		FormulaCardInfo.innerHTML += "<img src=\""+dir+"\" width=\"15%\"\" CardImageNameRepeat = \"" + TarotDescriptJsonData[0].Number +"\">";
	}
}


function CheckFormula(){
		let checkT = GetFormulaCount();

		if(checkT !=null && checkT.length > 0)
		{
			let notRePeatNumberArray = GetFormulaContForTwoNumber(checkT);

			if(notRePeatNumberArray.length > 0)
			{
				FormulaButton.setAttribute("style"," ");
			}else{
				FormulaButton.setAttribute("style","display:none;");
			}

			return checkT;
		}
		else
		{
			FormulaButton.setAttribute("style","display:none;");
		}

		return checkT;
}


//---------取得所有牌的數字後，將只有兩張牌的相同數字取得出來，若相同的數字大於三張牌，就不是無視論的規則。--------------------
function GetFormulaContForTwoNumber(inputNumberArray){
	let notRePeatNumber = [];

	for(let i=0;i<inputNumberArray.length;i++)
	{
		let num = inputNumberArray[i].split('-')[1];
		notRePeatNumber.push(num);
	}
	console.log(notRePeatNumber);
	const countMap = notRePeatNumber.reduce((acc, item) => {
  		acc[item] = (acc[item] || 0) + 1;
 		return acc;
	}, {});

	const filteredArray = notRePeatNumber.filter(item => countMap[item] < 3);

	return filteredArray;
}


//-------------取得小牌的資訊-------------
function GetFormulaCount(){
	var TarotImageSrc = document.querySelectorAll("[cardimagename]"); //Src卡圖
	let tarotNumber = new Array();

	
	for(let i=0;i<TarotImageSrc.length;i++){
		const status = TarotImageSrc[i].getAttribute("cardimagename");
		if(!status.includes("Big"))
		{
			const statusSplit = status.split('-');
			tarotNumber.push(status);
		}
	}

	return tarotNumber;
}