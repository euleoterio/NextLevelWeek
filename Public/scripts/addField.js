// Procurar o botao
document.querySelector("#add-time")
// Quando cliner no botao
.addEventListener('click', cloneField)



// Executar uma ação
function cloneField(){
  // Duplicar os campos
  //.cloneNode(true) = pega tudo dentro do div
  //.cloneNode(false) = pega APENAS o div
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // Limpar os campos
  //pegar os campos
  const fields = newFieldContainer.querySelectorAll('input')
  
  //para cada campo, executar function
  // .forEach pega o field (a posição) do momento
  fields.forEach(function(field){
      field.value = "";
  })
  

  // Colocar na página
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
 
}
 
