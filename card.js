"use strict"

const herois = [
    'IronMan - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
];

const filtrarTitulo = item=>{
    const traco = item.indexOf("-") -1;
    return item.substring(0,traco);

}
const criarCard = item =>{
    const container = document.querySelector("main");
    const novoCard = document.createElement("div");
    novoCard.innerHTML = `
        <div class="card-container">
            <div class="titulo"><h1>${filtrarTitulo(item)}</h1></div>
            <div class="texto"><p>${item}</p></div>
        </div>
    `;
    container.appendChild(novoCard);
}

const carregarCard = herois => herois.forEach(criarCard);
carregarCard(herois);

