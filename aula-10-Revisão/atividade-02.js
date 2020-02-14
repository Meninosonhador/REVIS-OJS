let precoUnitario, quantidade, totalproduto, totalGeral = 0


function calcularpreco(){
     precoUnitario = document.querySelector('#preco').value;
     quantidade = document.querySelector('#quantidade').value;
     totalproduto = precoUnitario * quantidade;
    document.querySelector('#total-produto').innerHTML = totalproduto;
}

function adicionarAocarrinho(){
    let produto = document.querySelector('#produto').value;
    let linha = "<tr>";
     linha += "<td>" + produto + "</td>";
     linha += "<td>" + quantidade + "</td>";
     linha += "<td>" + precoUnitario + "</td>";
     linha += "<td>" + totalproduto + "</td>";
     linha += "</tr>";
     document.querySelector("#lista-produtos").innerHTML +=linha;
    atualizarTotal();
    limparCampos();    
}

function atualizarTotal(){
    totalGeral += totalproduto;
    document.querySelector("#total-geral").innerHTML = totalGeral;
}

function limparCampos(){
    document.querySelector("#produto").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#quantidade").value = "";
    document.querySelector("#total-produto").innerHTML = "";
}

function BemVindo(){
    let dataCompleta = new Date();
    console.log(dataCompleta);
    console.log(dataCompleta.getDay());
    console.log(dataCompleta.getDate());
    console.log(dataCompleta.getMonth());
    console.log(dataCompleta.getFullYear());
    console.log(dataCompleta.getHours());
    console.log(dataCompleta.getMinutes());
    let hora = dataCompleta.getHours();
    if(hora < 12){
        document.querySelector("#mensagem").innerHTML = "Bom dia";
    }else if(hora < 19){
        document.querySelector("#mensagem").innerHTML = "Boa tarde";
    }else{
        document.querySelector("#mensagem").innerHTML = "Boa noite";
    }
}