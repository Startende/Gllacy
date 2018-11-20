function main(event){
	let body = document.body;
	let elemId = event.target.id;
    
	if(elemId == "theme-1"){
		body.style.backgroundColor="#849d8f";
		document.querySelector('.gradient').style.backgroundImage="url('img/Мороженко1.png')";
		document.querySelector('.description').textContent="Крем-брюле и пломбир с малиновым джемом";
	}
	else if(elemId == "theme-2"){
		body.style.backgroundColor="#8996a6";
		document.querySelector('.gradient').style.backgroundImage="url('img/Мороженко2.png')";
		document.querySelector('.description').textContent="Шоколадный пломбир и лимонный сорбет";
	}
	else if(elemId == "theme-3"){
		body.style.backgroundColor="#9d8b84";
		document.querySelector('.gradient').style.backgroundImage="url('img/Мороженко3.png')";
		document.querySelector('.description').textContent="Пломбир с помадкой и клубничный щербет";
	}
	


}
document.querySelector('.radiobutton').addEventListener("click", (e) => main(e));