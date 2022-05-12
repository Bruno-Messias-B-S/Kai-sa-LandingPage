const d = (e) => document.querySelector (e)
const ds = (e) => document.querySelectorAll (e)

function swapImg(fileName) {
        d('.frame').setAttribute('src', fileName)

    if (fileName == 'https://www.youtube.com/embed/iEcbVEyZLHU') {
        d('.skill-title h4').innerHTML = "Passiva"
        d('.skill-name h4').innerHTML = "Segunda Pele"
        d('.skill-desc h4').innerHTML = "Os ataques básicos de Kai'Sa acumulam Plasma, causando Dano Mágico adicional crescente. Efeitos imobilizadores de aliados ajudam a acumular Plasma. Além disso, as aquisições de itens de Kai'Sa aprimoram suas habilidades básicas, deixando-as mais poderosas."
    } else if (fileName == 'https://www.youtube.com/embed/BdABVJ-uhF8') {
        d('.skill-title h4').innerHTML = "Q"
        d('.skill-name h4').innerHTML = "Chuva Icathiana"
        d('.skill-desc h4').innerHTML = "Kai'Sa dispara uma chuva de projéteis que correm atrás de alvos próximos. Arma Viva: Chuva Icathiana é aprimorada e lança mais mísseis."
    } else if (fileName == 'https://www.youtube.com/embed/-wTGY7XwUkA') {
        d('.skill-title h4').innerHTML = "W"
        d('.skill-name h4').innerHTML = "Exploradora do Vazio"
        d('.skill-desc h4').innerHTML = "Kai'Sa lança um projétil de longo alcance, marcando inimigos com sua passiva. Arma Viva: Exploradora do Vazio é aprimorada e aplica mais marcas passivas e tem o Tempo de Recarga reduzido ao acertar um Campeão."
    } else if (fileName == 'https://www.youtube.com/embed/K2JwZhvTni8') {
        d('.skill-title h4').innerHTML = "E"
        d('.skill-name h4').innerHTML = "Sobrecarga"
        d('.skill-desc h4').innerHTML = "Kai'Sa aumenta brevemente sua Velocidade de Movimento, depois aumenta sua Velocidade de Ataque. Arma Viva: Sobrecarga é aprimorada e concede Invisibilidade por um breve momento."
    } else if (fileName == 'https://www.youtube.com/embed/leoPEymrxt0') {
        d('.skill-title h4').innerHTML = "R"
        d('.skill-name h4').innerHTML = "Instinto Assassino"
        d('.skill-desc h4').innerHTML = "Kai'Sa avança em altíssima velocidade com longo alcance para um local próximo ao Campeão inimigo marcado com Plasma e recebe um escudo absorvente de dano por um curto período."
    }
}

ds('.btns').forEach( (item) => {
    item.addEventListener('click', (item2) => {
        let alvo = item2.currentTarget.classList

        ds('.btns').forEach( (index) => {
            if (alvo) {
                index.classList.remove('selected')
                alvo.add('selected')
            }
        })
    })
})

d('.k2').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-123px';
    d('.slide.first').style.marginLeft = '-11.12%';
})

d('.k1').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '0';
    d('.slide.first').style.marginLeft = '0';
    d('.slide.first').style.marginLeft = '0';
})

d('.k3').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-243px';
    d('.slide.first').style.marginLeft = '-22.24%';
})

d('.k4').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-363px';
    d('.slide.first').style.marginLeft = '-33.36%';
})

d('.k5').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-483px';
    d('.slide.first').style.marginLeft = '-44.48%';
})

d('.k6').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-603px';
    d('.slide.first').style.marginLeft = '-55.60%';
})

d('.k7').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-723px';
    d('.slide.first').style.marginLeft = '-66.72%';
})

d('.k8').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-843px';
    d('.slide.first').style.marginLeft = '-77.84%';
})

d('.k9').addEventListener('click', () => {
    d('.slide-mini.k1').style.marginLeft = '-963px';
    d('.slide.first').style.marginLeft = '-88.96%';
})

ds('.slide-mini').forEach( (a) => {
    a.addEventListener('click', (b) => {
        let alvo2 = b.currentTarget.classList

        ds('.slide-mini').forEach( (c) => {
            if(alvo2) {
                c.classList.remove('selected-skin')
                alvo2.add('selected-skin')
            }
        })
    })
})

function btnOpener() {
    if ( d('.open').style.width == '0px' ) {
        d('.open').style.width = '250px'
    } else {
        d('.open').style.width = '0px'
    }
}