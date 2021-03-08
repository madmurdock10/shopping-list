var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement("li");
	const zi = document.createElement("button");
	zi.innerHTML = "delete";
	li.appendChild(zi);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		verwijderr();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		verwijderr();
	}
}


function streepp() {
	var streep = document.querySelectorAll(".hi");
	for (var index = 0; index < streep.length; index++)  {
		streep[index].addEventListener("click", function() {
			this.classList.toggle("done");
		});
	}
}


function verwijderr () {
	var verwijder = document.querySelectorAll("li");
	for (var index=0; index < verwijder.length; index++) {
		verwijder[index].addEventListener("click", function() {
			this.classList.toggle("active");
		});
		verwijder[index].querySelector("button").addEventListener("click", function() {
			this.closest("li").remove();
		});
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

streepp();
verwijderr();