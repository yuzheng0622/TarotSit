//將重點牌整理出來

function CheckHighLine(){
	var TarotImageSrc = document.querySelectorAll("[cardstatusimage]"); //Src卡圖
	var positiveValue = 0;
	var inverseValue = 0;

	for(let i=0;i<TarotImageSrc.length;i++){
		if(TarotImageSrc[i].getAttribute("cardstatusimage").includes("positive")){
			positiveValue = positiveValue + 1;
		}
		if(TarotImageSrc[i].getAttribute("cardstatusimage").includes("inverse")){
			inverseValue = inverseValue + 1;
		}
	}

	if(positiveValue != 0 && inverseValue != 0){
		// 若是正位<逆位，使用迴圈檢查，HighLine正位的圖片
		if(positiveValue < inverseValue){
			for(let i=0;i<TarotImageSrc.length;i++){
				if(TarotImageSrc[i].getAttribute("cardstatusimage").includes("positive")){
					TarotImageSrc[i].setAttribute("style","border:3px dashed #FF0000;");
					CardInformation[i].setAttribute("style","color:#FF0000;");
				}
			}
		}

		// 若是逆位<正位，使用迴圈檢查，HighLine逆位的圖片
		if( inverseValue < positiveValue){
			for(let i=0;i<TarotImageSrc.length;i++){
				if(TarotImageSrc[i].getAttribute("cardstatusimage").includes("inverse")){
					let oldStyle = TarotImageSrc[i].getAttribute("style");
					TarotImageSrc[i].setAttribute("style",oldStyle + "border:3px dashed #FF0000;");
					CardInformation[i].setAttribute("style","color:#FF0000;");
				}
			}
		}
	}
}