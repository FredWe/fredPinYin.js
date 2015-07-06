function pinyin(cc){
	var str='';
	var s;
	for(var i=0;i<cc.length;i++){
	//alert(cc.charAt(i)+" = "+cc.charCodeAt(i));
		if(icibahy.indexOf(cc.charAt(i))!=-1&&cc.charCodeAt(i)>200){
			s=1;
			while(icibahy.charAt(icibahy.indexOf(cc.charAt(i))+s)!=","){
				str+=icibahy.charAt(icibahy.indexOf(cc.charAt(i))+s);
				s++;
			}

			str+=" ";
		}
		else{
			str+=cc.charAt(i);
		}
	}
	return str;
}
