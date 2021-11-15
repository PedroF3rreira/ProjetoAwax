let cont = 0;

function sliderShow () {
	
	setInterval(() =>{
		document.querySelector('.sliders').style.marginLeft = `${cont}vw`;
		cont -= 100;
		if(cont == -300){
			cont = 0
		}
	}, 3000);
	
}
function scrollLigth() {
	/*seleciona todos <a> com href recebendo #
	* percorre sobre todos os el encontrados 
	* adiciona evento click a cada um
	*/
	document.querySelectorAll("nav a[href^='#']").forEach(el =>{
		
		el.addEventListener('click',(e) =>{

			//previnindo funcionamento padrão do <a>
			e.preventDefault();

			//pega valor do atributo do elemento que foi clicado
			let id = e.target.getAttribute('href');

			//pega posição do elemento que contem o id 
			let targetoffset = document.querySelector(id).offsetTop;
			
			/*altera posição top do scroll date suavimente
			* com atributo smooth
			*/
			window.scrollTo({
				top: targetoffset -120,
				behavior:'smooth'
			})
		});
	})
	
}
sliderShow();
scrollLigth()