let All = []
let Active = []
let complited = [];


(function (window) {
	'use strict';

let txtField = document.querySelector('#txtField')
let txtFromField = txtField.value;




function render() {
	 All = [];
	 All = JSON.parse(localStorage.getItem('allLi'))
	 console.log('before render' + All)

	if (All == null) {
		All = []
		console.log('local to')
		localStorage.setItem('allLi', JSON.stringify(All))
		All = JSON.parse(localStorage.getItem('allLi'))
	}
	else {

		All.forEach( (element) => {
			createLi(element)
		});
	}
	console.log('after render' + All)
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
	All = [];
	All = JSON.parse(localStorage.getItem('allLi'))

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
			  localStorage.setItem('allLi', JSON.stringify(All))
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
		 All.push(txtFromField);
		 localStorage.setItem('allLi', JSON.stringify(All));
		 createLi(txtFromField)
	}
})



})(window);


