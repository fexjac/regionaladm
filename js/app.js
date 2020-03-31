var menuDocCadastros = document.getElementsByClassName('link-nav-arrow')[0];
//Busco os itens da classe link-nav-arrow e retorno o primeiro elemento
var menuDocVistorias = document.getElementsByClassName('link-nav-arrow')[1];
//Busco os itens da classe link-nav-arrow e retorno o segundo elemento
var listCadastros = document.getElementsByClassName('list-nav-second')[0];
//Dentro do elemento selecionado, busco a classe list-nav-second 
var listVistorias = document.getElementsByClassName('list-nav-second')[1];
//Dentro do elemento selecionado, busco a classe list-nav-second 

//Na classe selecicionada, aguardo o evento'click', ao click, utilizo o toggle e identifico se a class hide/arrow está ou nao selecionada alterando seu valor
menuDocCadastros.addEventListener('click', function(){
   listCadastros.classList.toggle('hide');
   menuDocCadastros.classList.toggle('arrow');
   
});

menuDocVistorias.addEventListener('click', function(){
    listVistorias.classList.toggle('hide');
    menuDocVistorias.classList.toggle('arrow');
    
 });