let homens;
let mulheres;
let criancas;

let proteinas;
let carne;
let frango;
let linguica;

let arroz;
let farofa;
let pao ;

let cerveja;
let refrigerante;
let suco;

function calcular () {
    // Recebendo informaçoes do usuário
    // homens=parseInt(document.querySelector('[name="homem"]').value);
    homens=parseInt(document.querySelector(".homem").querySelector(".valor").innerHTML);

    // mulheres=parseInt(document.querySelector('[name="mulher"]').value);
    mulheres=parseInt(document.querySelector(".mulher").querySelector(".valor").innerHTML);

    // criancas=parseInt(document.querySelector('[name="crianca"]').value);
    criancas=parseInt(document.querySelector(".crianca").querySelector(".valor").innerHTML);

    // console.log(homens,mulheres, criancas);
    if (document.querySelector('#sim').checked){
        // console.log("tem acompanhamento");
        proteinas = 0.35*(homens+mulheres+criancas)
        carne=0.7*proteinas
        frango=0.15*proteinas
        linguica=0.15*proteinas    

        arroz= 0.1*(homens+mulheres+criancas)
        farofa=0.025*(homens+mulheres+criancas)
        pao=2*(homens+mulheres+criancas)
        
        cerveja=3*(homens+mulheres)
        if(criancas%2===0){
            refrigerante=criancas
        } else {
            refrigerante=criancas+1
        }
        suco=0.5*criancas

    } else {
        proteinas = 0.5*(homens+mulheres+criancas)
        carne=0.7*proteinas
        frango=0.15*proteinas
        linguica=0.15*proteinas    

        arroz= 0*(homens+mulheres+criancas)
        farofa=0.*(homens+mulheres+criancas)
        pao=0*(homens+mulheres+criancas)
        
        cerveja=5*(homens+mulheres)
        if(criancas%2===0){
            refrigerante=criancas
        } else {
            refrigerante=criancas+1
        }
        suco=0.5*criancas

        // console.log("nao tem acompanhamento");
    }
    console.log(`carne: ${carne.toFixed(1)}
frango: ${frango.toFixed(1)}
linguiça: ${linguica.toFixed(1)}
arroz: ${arroz.toFixed(1)}
farofa: ${farofa.toFixed(1)}
pao: ${pao}
cerveja: ${cerveja}
refrigerante: ${refrigerante}
suco: ${suco}
    `);
    if (parseFloat(carne.toFixed(1))<1){
        document.querySelector(".carne .quantidade").innerHTML=(parseFloat(carne.toFixed(1)) *1000).toFixed() + " g";
    }else {document.querySelector(".carne .quantidade").innerHTML=carne.toFixed(1) + " Kg";}
    if (parseFloat(frango.toFixed(1))<1){
        document.querySelector(".frango .quantidade").innerHTML=(parseFloat(frango.toFixed(1)) *1000).toFixed() + " g";
    }else {document.querySelector(".frango .quantidade").innerHTML=frango.toFixed(1) + " Kg";}
    if (parseFloat(linguica.toFixed(1))<1){
        document.querySelector(".linguica .quantidade").innerHTML=(parseFloat(linguica.toFixed(1)) *1000).toFixed() + " g";
    }else {document.querySelector(".linguica .quantidade").innerHTML=linguica.toFixed(1) + " Kg";}
    if (parseFloat(arroz.toFixed(1))<1){
        document.querySelector(".arroz .quantidade").innerHTML=(parseFloat(arroz.toFixed(1)) *1000).toFixed() + " g";
    }else {document.querySelector(".arroz .quantidade").innerHTML=arroz.toFixed(1) + " Kg";}
    if (parseFloat(farofa.toFixed(1))<1){
        document.querySelector(".farofa .quantidade").innerHTML=(parseFloat(farofa.toFixed(1)) *1000).toFixed() + " g";
    }else {document.querySelector(".farofa .quantidade").innerHTML=farofa.toFixed(1) + " Kg";}   
    document.querySelector(".pao .quantidade").innerHTML=pao.toFixed(0) + " UN";
    document.querySelector(".cerveja .quantidade").innerHTML=cerveja.toFixed(0) + " latas";
    document.querySelector(".refrigerante .quantidade").innerHTML=refrigerante.toFixed(0) + " L";
    document.querySelector(".suco .quantidade").innerHTML=suco.toFixed(0) + " L";
    
    
    
    

    document.querySelector(".popup-wrapper").classList.remove("escondido");
}

function fechar () {
    document.querySelector(".popup-wrapper").classList.add("escondido");
}



function decrementar(elemento) {
    let valorAtual = parseInt(elemento.parentElement.querySelector(".valor").innerHTML);
if ( valorAtual > 0) {
    valorAtual = valorAtual - 1;
    atualizarValor(elemento.parentElement.querySelector(".valor"),valorAtual);
}
}

function incrementar(elemento) {
    let valorAtual = parseInt(elemento.parentElement.querySelector(".valor").innerHTML)
    valorAtual = valorAtual + 1;
    atualizarValor(elemento.parentElement.querySelector(".valor"),valorAtual);
}

function atualizarValor(elemento,valorAtual) {
    elemento.innerHTML = valorAtual;
}