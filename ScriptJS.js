const section = document.getElementsByTagName('section')[0] //Facilita Adicionar um ".appendChild"//
const divs = document.getElementsByTagName('div') //Facilita Acesso à DIV//
var players=[] //Armazena os "Nicknames"//
var JP1 = [] // Marca //
var JP2 = [] //Jogadas//
var fj=false

const bjogar = document.querySelector('input#bjogar')
bjogar.addEventListener('click',gerarJogo)

const pegaNickPlayers=()=>{ //Usado para Atualizar/Mostrar Vez jogador//
    document.getElementsByTagName('header')[0].appendChild(document.createElement('p'))
    players.push(document.querySelector('input#P1').value);
    players.push(document.querySelector('input#P2').value);
}
const apagaTelaInicio=()=>section.innerHTML='';
const atualizaCssDIV=()=>section.style.height="150px"; //Deixa Background-Section com tamanho DIVS//
const criaTabuleiro=()=>{ //Gera 9DIVS onde serão adicionados as Jogadas ("X","O")//
    for (let i=0;i<9;i++) {//Adiciona Quabra-Linha Cada 3DIVS//
        if (i%3==0 && i!=0) {section.appendChild(document.createElement('br'))}
        section.appendChild(document.createElement('div'));
    }
}
const mostraVezJogador=()=>{ //Esquema que Valida a vez do "X" ou "O"//
    if (players.length==2&&fj==false) {
        document.getElementsByTagName('p')[0].innerHTML=`Vez: ${players[0]}(X)`
        players.length++
    } else if (fj==false){
        document.getElementsByTagName('p')[0].innerHTML=`Vez: ${players[1]}(O)`
        players.length--
    }
}
const atualizaJogador=()=>mostraVezJogador(); //Facilita Visualização Código//
const Xganhou=()=>{
    document.getElementsByTagName('p')[0].innerHTML=`${players[0]}(X) GANHOU!`;
    fj=true
}
const Oganhou=()=>{
    document.getElementsByTagName('p')[0].innerHTML=`${players[1]}(O) GANHOU!`;
    fj=true
}
const verificaGanhador=()=>{
    //LinhasP1//
    if(JP1.indexOf(divs[0])!=-1&&JP1.indexOf(divs[1])!=-1&&JP1.indexOf(divs[2])!=-1){
        for(let i=0;i<3;i++) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    } else if(JP1.indexOf(divs[3])!=-1&&JP1.indexOf(divs[4])!=-1&&JP1.indexOf(divs[5])!=-1){
        for(let i=3;i<6;i++) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    } else if(JP1.indexOf(divs[6])!=-1&&JP1.indexOf(divs[7])!=-1&&JP1.indexOf(divs[8])!=-1){
        for(let i=6;i<9;i++) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    }
    //LinhasP2//
    if(JP2.indexOf(divs[0])!=-1&&JP2.indexOf(divs[1])!=-1&&JP2.indexOf(divs[2])!=-1){
        for(let i=0;i<3;i++) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    } else if(JP2.indexOf(divs[3])!=-1&&JP2.indexOf(divs[4])!=-1&&JP2.indexOf(divs[5])!=-1){
        for(let i=3;i<6;i++) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    } else if(JP2.indexOf(divs[6])!=-1&&JP2.indexOf(divs[7])!=-1&&JP2.indexOf(divs[8])!=-1){
        for(let i=6;i<9;i++) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    }
    //ColunasP1//
    if(JP1.indexOf(divs[0])!=-1&&JP1.indexOf(divs[3])!=-1&&JP1.indexOf(divs[6])!=-1){
        for(let i=0;i<=6;i+=3) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    } else if(JP1.indexOf(divs[1])!=-1&&JP1.indexOf(divs[4])!=-1&&JP1.indexOf(divs[7])!=-1){
        for(let i=1;i<=7;i+=3) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    } else if(JP1.indexOf(divs[2])!=-1&&JP1.indexOf(divs[5])!=-1&&JP1.indexOf(divs[8])!=-1){
        for(let i=2;i<=8;i+=3) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    }
    //ColunasP2//
    if(JP2.indexOf(divs[0])!=-1&&JP2.indexOf(divs[3])!=-1&&JP2.indexOf(divs[6])!=-1){
        for(let i=0;i<=6;i+=3) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    } else if(JP2.indexOf(divs[1])!=-1&&JP2.indexOf(divs[4])!=-1&&JP2.indexOf(divs[7])!=-1){
        for(let i=1;i<=7;i+=3) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    } else if(JP2.indexOf(divs[2])!=-1&&JP2.indexOf(divs[5])!=-1&&JP2.indexOf(divs[8])!=-1){
        for(let i=2;i<=8;i+=3) { //Estiliza DIVS//
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    }
    //DiagonaisP1//
    if(JP1.indexOf(divs[0])!=-1&&JP1.indexOf(divs[4])!=-1&&JP1.indexOf(divs[8])!=-1){
        for (let i=0;i<=8;i+=4) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    } else if(JP1.indexOf(divs[2])!=-1&&JP1.indexOf(divs[4])!=-1&&JP1.indexOf(divs[6])!=-1){
        for (let i=2;i<=6;i+=2) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Xganhou();
    }
    //DiagonaisP2//
    if(JP2.indexOf(divs[0])!=-1&&JP2.indexOf(divs[4])!=-1&&JP2.indexOf(divs[8])!=-1){
        for (let i=0;i<=8;i+=4) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    } else if(JP2.indexOf(divs[2])!=-1&&JP2.indexOf(divs[4])!=-1&&JP2.indexOf(divs[6])!=-1){
        for (let i=2;i<=6;i+=2) {
            divs[i].style.backgroundColor='white'; divs[i].style.color='black';
        } Oganhou();
    }
}

function gerarJogo() {
    pegaNickPlayers();
    apagaTelaInicio();
    atualizaCssDIV();
    criaTabuleiro();
    mostraVezJogador();
    escreveMarcaJogada();
}

function escreveMarcaJogada() {
    for (let i=0;i<9;i++) { //Adiciona Click para as DIVS//
        divs[i].addEventListener('click', function() {
            if (players.length==3 && divs[i].innerHTML=='' && fj==false) { //Verifica Vez "X" e se DIV=="Vazia"//
                //Escreve e Anota P1//
                divs[i].innerHTML="<br> X"
                JP1.push(divs[i])
                atualizaJogador();
                verificaGanhador();
            } else if (divs[i].innerHTML=='' && fj==false) { //Verifica se DIV=="Vazia"//
                //Escreve e Anota P2//
                divs[i].innerHTML="<br> O"
                JP2.push(divs[i])
                atualizaJogador();
                verificaGanhador();
            }
        })
    }
}