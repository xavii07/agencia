addEventListener("DOMContentLoaded", () => {

	let menuLista = document.querySelector(".menu__lista")
    const btnMenu = document.querySelector(".menu__icono") 

	//ocultar o hacer aparecer el menu con el icono y en celulares
    btnMenu.addEventListener("click", () => {
        menuLista.classList.toggle("mostrar") 
    })

	//ocultar o hacer aparecer el menu con los enlaces y en celulares
	let enlaces = document.querySelectorAll(".menu__enlaces")

	enlaces.forEach(enlace => {
		enlace.addEventListener("click", () => {
			menuLista.classList.toggle("mostrar")
		})
	})
})



//Mostrar boton para visitar el perfil de una modelo
const modelos = document.querySelectorAll(".modelo__foto")
const botones = document.querySelectorAll(".modelo__boton")
const nombres = document.querySelectorAll(".modelo__nombre")




modelos.forEach((modelo, i) => {
	modelo.id = i
	modelo.addEventListener("click", () => {

		botones.forEach((boton, i) => {
			boton.id = i

			if(boton.id === modelo.id) {
				boton.classList.toggle("ver")
				
				nombres.forEach((nombre, i) => {
					nombre.id = i
					if(nombre.id === modelo.id) {
						nombre.classList.toggle("ver")
					} else {
						nombre.classList.remove("ver")
					}
				})

			} else {
				boton.classList.remove("ver")
			}
		})
	})
})	


