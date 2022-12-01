function searchFunction() {
	let input = document.getElementById('myInput').value;
	input = input.toLowerCase();
	let h2 = document.getElementsByClassName('h2');
	
	for (i = 0; i < h2.length; i++) {
		if (!h2[i].innerHTML.toLowerCase().includes(input)) {
			h2[i].style.display="none";
		}
		else {
			h2[i].style.display="";
		}
	}
}
