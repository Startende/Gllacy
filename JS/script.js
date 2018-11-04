function main(event){
	let body = document.body;
	let morojenka = document.querySelector('.ice-background');
	let count = 0;
	let elemId = event.target.id;
    for (let i = 0; i < morojenka.children.length; i++) {
 		morojenka.children[i].style.display='none'; 
 	}

	if(!!elemId && elemId == "theme-1"){
		body.style.backgroundColor="#849d8f";
		count = 0;
	}
	else if(!!elemId && elemId == "theme-2"){
		body.style.backgroundColor="#8996a6";
		count = 1;
	}
	else if(!!elemId && elemId == "theme-3"){
		body.style.backgroundColor="#9d8b84";
		count = 2;
	}
	morojenka.children[count].style.display='block';


}
document.querySelector('.radiobutton').addEventListener("click", (e) => main(e));