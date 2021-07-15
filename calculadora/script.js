const elementos = document.getElementsByClassName('elemento')

function limpar_campos(){
    tela.innerHTML = ''
}

function inserir_numero(elemento){
    var display = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = display + elemento;
}


for(const n of elementos){
    n.addEventListener('click', function(){
        inserir_numero(n.innerHTML)
    })
}

function apagar(){
    var resultado = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('tela').innerHTML

    if(resultado){
        document.getElementById('tela').innerHTML = eval(resultado)
    }
}

