

var changePeriod = function(el) {
	var target = el.target;
	var selected = document.querySelectorAll(".period a.selected")[0];

	el.preventDefault();
	if (selected) {
		selected.classList.remove('selected');
	}

	target.classList.add('selected');
	var monthly = document.querySelectorAll(".price .monthly"),
		annually = document.querySelectorAll(".price .annually");

	if (target.classList.contains("monthly")) {
		for (i = 0; i < monthly.length; i++) {
			monthly[i].style.display = 'inline';
		}
		for (j = 0; j < annually.length; j++) {
			annually[j].style.display = 'none';
		}
	} else {
		for (i = 0; i < annually.length; i++) {
			annually[i].style.display = 'inline';
		}
		for (j = 0; j < monthly.length; j++) {
			monthly[j].style.display = 'none';
		}
	}
};

var links = document.querySelectorAll(".period a");

for (i = 0; i < links.length; i++) {
	links[i].addEventListener('click', changePeriod);
}