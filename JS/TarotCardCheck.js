//將重點牌整理出來

function CheckHighLine(){
	var TarotImageSrc = document.querySelectorAll("[cardstatusimage]"); //Src卡圖

	//取得有多少正位、有多少逆位
	const { positiveValue, inverseValue } = GetTarotPositiveValueAndinverseValue(TarotImageSrc);

	//若正逆位都有的話
	GetTarotCardCheckCount(positiveValue,inverseValue,TarotImageSrc);
}

function GetTarotPositiveValueAndinverseValue(images){
 	let positiveValue = 0;
    let inverseValue = 0;

    images.forEach(img => {
        const status = img.getAttribute("cardstatusimage");
        if (status.includes("positive")) positiveValue++;
        if (status.includes("inverse")) inverseValue++;
    });

    return { positiveValue, inverseValue };
}

function GetTarotCardCheckCount(positiveValue,inverseValue,TarotImageSrc){

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