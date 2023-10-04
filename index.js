let valorConvertidoFinal = document.getElementById('valorConvertidoFinal');
let valorFromId = document.getElementById('valorFromId');
let valorInput = document.getElementById('valorInput');
let converterId = document.getElementById('converterId');
let nomeMoedaId = document.getElementById('nomeMoedaId');
let nomeMoedaIdRight = document.getElementById('nomeMoedaIdRight');

let idBrasilFrom = document.getElementById('idBrasilFrom');
let idEuaFrom = document.getElementById('idEuaFrom');
let idJapaoFrom =  document.getElementById('idJapaoFrom');

let from = document.getElementById('from');

if(from.value=='Real Brasileiro'){
    idBrasilFrom.style.zIndex = 1;
    idBrasilFrom.style.opacity = 1;

    idEuaFrom.style.zIndex = 0;
    idEuaFrom.style.opacity = 0;

    idJapaoFrom.style.zIndex = 0;
    idJapaoFrom.style.opacity = 0;
}


from.addEventListener('change',function(){
    console.log(from.value);

    if(from.value=='Real Brasileiro'){
        // mostra a bandeira do brasil
        idBrasilFrom.style.zIndex = 1;
        idBrasilFrom.style.opacity = 1;

        idEuaFrom.style.zIndex = 0;
        idEuaFrom.style.opacity = 0;

        idJapaoFrom.style.zIndex = 0;
        idJapaoFrom.style.opacity = 0;

        nomeMoedaId.innerHTML = 'Real Brasileiro';

        return;
    }

    if(from.value=='Dolar Americano'){
        // mostra a bandeira dos eua
        idBrasilFrom.style.zIndex = 0;
        idBrasilFrom.style.opacity = 0;

        idEuaFrom.style.zIndex = 1;
        idEuaFrom.style.opacity = 1;

        idJapaoFrom.style.zIndex = 0;
        idJapaoFrom.style.opacity = 0;

        nomeMoedaId.innerHTML = 'Dolar Americano';

        return;
    }

    if(from.value=='Iene'){
        // mostra a bandeira do japao
        idBrasilFrom.style.zIndex = 0;
        idBrasilFrom.style.opacity = 0;

        idEuaFrom.style.zIndex = 0;
        idEuaFrom.style.opacity = 0;

        idJapaoFrom.style.zIndex = 1;
        idJapaoFrom.style.opacity = 1;

        nomeMoedaId.innerHTML = 'Iene';

        return;
    }
})

let idBrasilTo = document.getElementById('idBrasilTo');
let idEuaTo = document.getElementById('idEuaTo');
let idJapaoTo = document.getElementById('idJapaoTo');

let to = document.getElementById('to');

if(to.value=='Real Brasileiro'){
    idBrasilTo.style.zIndex = 1;
    idBrasilTo.style.opacity = 1;

    idEuaTo.style.zIndex = 0;
    idEuaTo.style.opacity = 0;

    idJapaoTo.style.zIndex = 0;
    idJapaoTo.style.opacity = 0;
}

to.addEventListener('change',function(){
    console.log(to.value);

    if(to.value=='Real Brasileiro'){
        // mostra a bandeira do brasil
        idBrasilTo.style.zIndex = 1;
        idBrasilTo.style.opacity = 1;

        idEuaTo.style.zIndex = 0;
        idEuaTo.style.opacity = 0;

        idJapaoTo.style.zIndex = 0;
        idJapaoTo.style.opacity = 0;
        
        nomeMoedaIdRight.innerHTML = 'Real Brasileiro';

        return;
    }

    if(to.value=='Dolar Americano'){
        // mostra a bandeira dos eua
        idBrasilTo.style.zIndex = 0;
        idBrasilTo.style.opacity = 0;

        idEuaTo.style.zIndex = 1;
        idEuaTo.style.opacity = 1;

        idJapaoTo.style.zIndex = 0;
        idJapaoTo.style.opacity = 0;

        nomeMoedaIdRight.innerHTML = 'Dolar Americano';

        return;
    }

    if(to.value=='Iene'){
        // mostra a bandeira do japao
        idBrasilTo.style.zIndex = 0;
        idBrasilTo.style.opacity = 0;

        idEuaTo.style.zIndex = 0;
        idEuaTo.style.opacity = 0;

        idJapaoTo.style.zIndex = 1;
        idJapaoTo.style.opacity = 1;

        nomeMoedaIdRight.innerHTML = 'Iene';

        return;
    }


})

converterId.addEventListener('click',function(){

    // sempre executado
    let valorInserido = valorInput.value;
    valorInput.value = '';   
    valorFromId.innerHTML = `${valorInserido}.00`;

    // converter de real para dolar
    if((from.value=='Real Brasileiro')&&(to.value=='Dolar Americano')){        
        let valorJaConvertido = valorInserido / 5.17;  
        valorJaConvertido = valorJaConvertido.toFixed(2);  
        valorConvertidoFinal.innerHTML = valorJaConvertido;
    }

    //converter de dolar para real
    if((from.value=='Dolar Americano')&&(to.value=='Real Brasileiro')){
        let valorJaConvertido = valorInserido * 5.17;
        valorJaConvertido = valorJaConvertido.toFixed(2);
        valorConvertidoFinal.innerHTML = valorJaConvertido;
    }

    //converter de real para iene
    if((from.value=='Real Brasileiro')&&(to.value=='Iene')){
        let valorJaConvertido = valorInserido * 28.86;
        valorJaConvertido = valorJaConvertido.toFixed(2);
        valorConvertidoFinal.innerHTML = valorJaConvertido;
    }

    //converter de iene para real
    if((from.value=='Iene')&&(to.value=='Real Brasileiro')){
        let valorJaConvertido = valorInserido / 28.86;
        valorJaConvertido = valorJaConvertido.toFixed(2);
        valorConvertidoFinal.innerHTML = valorJaConvertido;
    }

    //converter de dolar americano para iene
    if((from.value=='Dolar Americano')&&(to.value=='Iene')){
        let valorJaConvertido = valorInserido * 149.14;
        valorJaConvertido = valorJaConvertido.toFixed(2);
        valorConvertidoFinal.innerHTML = valorJaConvertido;
    }

    //converter de iene para dolar americano
    if((from.value=='Iene')&&(to.value=='Dolar Americano')){
        let valorJaConvertido = valorInserido / 149.14;
        valorJaConvertido = valorJaConvertido.toFixed(2);
        valorConvertidoFinal.innerHTML = valorJaConvertido;
    }
    

})










