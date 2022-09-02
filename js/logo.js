const a = document.getElementById('a')
const aHolder = document.getElementById('a-holder')

aHolder.addEventListener('click', ()=>{
	if(aHolder.classList.contains('a-holder')){
		aHolder.style.top = "90%"
		aHolder.style.left = "96%"
		aHolder.style.transform = "translateX(450px)"
		setTimeout(() => {
			aHolder.style.top = "-10%"
			aHolder.style.left = "7.5%"
			aHolder.style.transform = "translateX(0)"
			aHolder.style.animation = "2s fade forwards"
			aHolder.classList.toggle('a-holder')
			a.classList.toggle('a')
		}, 1000);
	}	

	else {
		aHolder.style.top = "5%"
		aHolder.style.left = "7.5%"
		aHolder.style.animation = ''
		aHolder.classList.toggle('a-holder')
		a.classList.toggle('a')
	}
})

/*
aHolder.addEventListener('click', ()=>{
	if(aHolder.classList.contains('a-holder')){
		aHolder.classList.remove('a-holder')
		a.classList.remove('a')
		aHolder.style.top = '90%'
		aHolder.style.left = '96%'
		setTimeout(() => {
			aHolder.classList.add('a-holder-reverse')
			a.classList.add('a-reverse')
		}, 0);
	}

	else {
		aHolder.style.top = '5%'
		aHolder.style.left = '7.5%'
		aHolder.classList.remove('a-holder-reverse')
		a.classList.remove('a-reverse')
		setTimeout(() => {
			aHolder.classList.add('a-holder')
			a.classList.add('a')
		}, 0);
	}
})
*/