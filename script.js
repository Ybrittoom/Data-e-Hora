const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const relogio = setInterval( function tempo() {
    let HoraAtual = new Date();
    let hr = HoraAtual.getHours();
    let mn = HoraAtual.getMinutes();
    let sg = HoraAtual.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (mn < 10) mn = '0' + mn;

    if (sg < 10) sg = '0' + sg;

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = sg;

    const respostaSaudaçao = document.getElementById("respostaHora")
    if (hr >= 5 && hr < 12) {
        respostaSaudaçao.textContent = "Bom Dia!!"
    } else if (hr >= 12 && hr < 18) {
        respostaSaudaçao.textContent = "Boa Tarde!!"
    } else {
        respostaSaudaçao.textContent = "Boa Noite!!"
    }
},1000)

const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const ano = document.getElementById("ano")

const data = setInterval( function data() {
    let diaAtual = new Date();
    let d = diaAtual.getDay()
    let m = diaAtual.getMonth() + 1;
    let a = diaAtual.getFullYear();

    if ( d < 10) d = '0' + d;
    if ( m < 10) m = '0' + m;

    dia.textContent = d
    mes.textContent = m
    ano.textContent = a


    respostaData.textContent = ` A data de hoje é:${d}/${m}/${a}`;
},1000)