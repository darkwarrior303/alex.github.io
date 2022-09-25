let option = document.querySelectorAll('.selectiveMenu li')
let miniBox = document.querySelectorAll('.items .box .mini-box')
for(let a = 0; a<option.length; a++){
	option[a].addEventListener('click', function(){
		for(let b = 0; b<option.length; b++){
			option[b].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for(let c = 0; c<miniBox.length; c++){{
			miniBox[c].classList.remove('active')
			miniBox[c].classList.add('hide')

			if (miniBox[c].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
				miniBox[c].classList.remove('hide');
				miniBox[c].classList.add('active');
			}
		}}
	})
}

// hamburger section start
let icon = document.querySelector('.menu-icon')
console.log(icon)
let menuList = document.querySelectorAll('.menu-sec')

icon.addEventListener('click', function(){
	for(let i = 0; i<menuList.length; i++){
		menuList[i].classList.toggle('active')
	}
})
// hamburger section end