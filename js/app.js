let All = []
let Active = []
let complited = [];

(function (window) {
	'use strict';

let txtField = document.querySelector('#txtField')
let txtFromField = txtField.value;




function render() {


	All = JSON.parse(localStorage.getItem('AllLi'))
	if (All == null) {
		console.log('local to')
		localStorage.setItem('allLi', '[""]')
		All = localStorage.getItem('allLi')
	}
	else {
		All = JSON.parse(All)
		All.forEach( (element) => {
			createLi(element)
		});
	}
    //переводим с строки в масив (убираем "" там где было "[Значения]")

}
render()

function createLi(txt){
	let div = document.createElement('div')
	let li = document.createElement('li')
	let ul = document.querySelector('ul')

	li.innerHTML = `
	<div class="view">
	<input class="toggle" type="checkbox">
	<label>${txt}</label>
	<button class="destroy"></button>
	</div>
	<input class="edit" value="Rule the web">`
	let bttnDel = li.querySelector('button')

	ul.appendChild(li)
	let All = JSON.parse(localStorage.getItem('allLi'))
	All.push(txt);
	localStorage.setItem('allLi', JSON.stringify(All))
	li.addEventListener('click', (e) => {
		if (e.target == bttnDel) {
			console.log('Piymav')
			ul.removeChild(li)
			  console.log(All.indexOf(txt))
			  delete All[All.indexOf(txt)]
			  let Som = []
			  All.forEach( (e) => {
				  if ( e!== null) {
					  Som.push(e)

				  }
			  })
			  console.log( Som)
			  All = Som
			  console.log(All)

		}
	})

}

function deleteLi() {

}

document.addEventListener('keydown' , (e) => {
	if (e.key != 'Enter') {
		console.log('aaaaa')
		return;
	}
	else{
		 txtField = document.querySelector('#txtField')
		 txtFromField = txtField.value;
		 createLi(txtFromField)
	}
})



})(window);


