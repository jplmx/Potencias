function ejecuta(){
	x=document.f_ciclos.x.value;
	y=document.f_ciclos.y.value;
	if (x.length==0){
		alert("Error, se debe inidcar el valor inicial");
		document.f_ciclos.x.style.background="red";
	}
	else{
		x=parseInt(x);
		if ((x<=0)||(x>=11)) {
			alert("Error. El numero debe estar entre 1 y 10");
			document.f_ciclos.x.style.background="red";
		}
		else{
			if (y.length==0){
				alert("Error, se debe inidcar el segundo valor");
				document.f_ciclos.y.style.background="red";
			}
			else{
				if ((y<=0)||(y>=6)) {
					alert("Error. El numero debe estar entre 1 y 5");
					document.f_ciclos.y.style.background="red";
				}
				else{
					alert("Todo va bien");
					res_texto="";
					res="";
					ctrl=1;
					mult1=1;
					mult2=1;
					
					while (ctrl<=y){
						if (ctrl==y) res_texto=res_texto+x;
						else res_texto=res_texto+x+"*";
						mult1=x*x;
						mult1=mult2;
						mult2=mult2*x;
						
						res=mult2;
						ctrl=ctrl+1;
					}
				document.f_ciclos.res_texto.value=res_texto;
				document.f_ciclos.res.value=res;
				}
			}
		}		
	}
}
function campo_v1(){
	document.f_ciclos.x.style.background="blue";
}
function campo_v2(){
	document.f_ciclos.y.style.background="blue";
}