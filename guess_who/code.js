const randomNumber = Math.floor(Math.random() * 24) + 1;
var fine = 0;
const listaimmagini = [
  { percorso: "./immagini/1.png", maschio: true, nero: true, occhiali: true, occhi: "bruni", capelli: "castani", cappello: false, },
  { percorso: "./immagini/12.png", maschio: false, nero: true, occhiali: true, occhi: "bruni", capelli: "castani", cappello: false },
  { percorso: "./immagini/3.png", maschio: true, nero: true, occhiali: true, occhi: "verdi", capelli: "bianchi", cappello: false },
  { percorso: "./immagini/4.png", maschio: true, nero: true, occhiali: false, occhi: "verdi", capelli: "castani", cappello: true },
  { percorso: "./immagini/23.png", maschio: false, nero: false, occhiali: true, occhi: "azzurri", capelli: "bianchi", cappello: false },
  { percorso: "./immagini/21.png", maschio: false, nero: false, occhiali: false, occhi: "bruni", capelli: "castani", cappello: false },
  { percorso: "./immagini/2.png", maschio: true, nero: true, occhiali: false, occhi: "bruni", capelli: "castani", cappello: true },
  { percorso: "./immagini/7.png", maschio: true, nero: false, occhiali: true, occhi: "bruni", capelli: "bianchi", cappello: false },
  { percorso: "./immagini/8.png", maschio: true, nero: false, occhiali: false, occhi: "verdi", capelli: "castani", cappello: true },
  { percorso: "./immagini/6.png", maschio: true, nero: true, occhiali: false, occhi: "azzurri", capelli: "biondi", cappello: true },
  { percorso: "./immagini/10.png", maschio: true, nero: false, occhiali: false, occhi: "verdi", capelli: "bianchi", cappello: true },
  { percorso: "./immagini/9.png", maschio: true, nero: false, occhiali: true, occhi: "bruni", capelli: "castani", cappello: false },
  { percorso: "./immagini/24.png", maschio: false, nero: false, occhiali: false, occhi: "azzurri", capelli: "castani", cappello: false },
  { percorso: "./immagini/11.png", maschio: true, nero: false, occhiali: true, occhi: "azzurri", capelli: "bianchi", cappello: false },
  { percorso: "./immagini/15.png", maschio: false, nero: true, occhiali: false, occhi: "bruni", capelli: "biondi", cappello: false },
  { percorso: "./immagini/14.png", maschio: true, nero: false, occhiali: false, occhi: "azzurri", capelli: "biondi", cappello: true },
  { percorso: "./immagini/5.png", maschio: true, nero: true, occhiali: true, occhi: "azzurri", capelli: "castani", cappello: false },
  { percorso: "./immagini/16.jpg", maschio: false, nero: true, occhiali: false, occhi: "verdi", capelli: "bianchi", cappello: false },
  { percorso: "./immagini/13.png", maschio: false, nero: false, occhiali: true, occhi: "verdi", capelli: "castani", cappello: false },
  { percorso: "./immagini/19.png", maschio: false, nero: true, occhiali: false, occhi: "azzurri", capelli: "biondi", cappello: false },
  { percorso: "./immagini/18.png", maschio: false, nero: true, occhiali: true, occhi: "azzurri", capelli: "castani", cappello: false },
  { percorso: "./immagini/20.png", maschio: false, nero: false, occhiali: false, occhi: "verdi", capelli: "bianchi", cappello: false },
  { percorso: "./immagini/17.jpg", maschio: false, nero: true, occhiali: false, occhi: "verdi", capelli: "castani", cappello: false },
  { percorso: "./immagini/22.png", maschio: false, nero: false, occhiali: false, occhi: "verdi", capelli: "bianchi", cappello: false },
];
const listadomande = [
  { percorso: "Il tuo personaggio ha la pelle scura?", nero: true },
  { percorso: "il tuo personaggio ha gli occhi azzurri?", occhi: "azzurri" },
  { percorso: "il tuo personaggio ha gli occhi verdi?", occhi: "verdi" },
  { percorso: "il tuo personaggio ha gli occhi bruni?", occhi: "bruni" },
  { percorso: "il tuo personaggio ha i capelli biondi?", capelli: "biondi" },
  { percorso: "il tuo personaggio ha i capelli castani?", capelli: "castani" },
  { percorso: "il tuo personaggio ha i capelli bianchi?", capelli: "bianchi" },
  { percorso: "il tuo personaggio è maschio?", maschio: true },
  { percorso: "il tuo personaggio ha un cappello?", cappello: true },
  { percorso: "il tuo personaggio ha gli occhiali?", occhiali: true },
];
document.addEventListener('DOMContentLoaded', () => {
  const id = [];
  for (let i = 1; i <= 24; i++) {
    id.push(i);
  }
  for (let i = 0; i < 24; i++) {
    let mainframe = document.querySelector('.mainframe');
    let button = document.createElement('button');
    button.classList.add("imm");
    button.id = "mybutton-" + id[i];
    button.setAttribute('onclick', 'vittoria()');
    let img = document.createElement('img');
    let immaginiElementi = [];
    img.src = listaimmagini[i].percorso;
    img.setAttribute('data-id', listaimmagini[i].caratteristica);
    img.classList.add("imgstyle");
    immaginiElementi.push(img);
    button.appendChild(img);
    mainframe.appendChild(button);
    button.setAttribute('onclick', `vittoria(${id[i]})`);
  }
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('active');
  });
});
function domande() {
  const id = [];
  for (let i = 1; i <= 10; i++) {
    id.push(i);
  }
  let i = 0;
  let domande = document.querySelector('.dropdown-content');
  for (i; i < 10; i++) {
    let lista = document.createElement('a');
    lista.textContent = listadomande[i].percorso;
    let listadomm = document.createElement('div');
    listadomm.id = "domanda-" + id[i];
    listadomm.setAttribute('onclick', `check(${id[i]})`);
    listadomm.appendChild(lista);
    domande.appendChild(listadomm);
  }
}
var tentativi = 2;
function vittoria(buttonId) {
  if (tentativi > 0) {
    if (buttonId === randomNumber) {
      console.log("Vittoria!");
      showPopup();
    } else {
      tentativi--;
      document.getElementById("valoreTentativi").innerText = tentativi;
      console.log("Prova ancora! Hai selezionato la casella:", buttonId);
      console.log("Ti rimangono", tentativi);
      fine = 0;
    }
    if (tentativi === 0) {
      showPopup2();
      console.log("hai perso");
    }
  }
}
var numdomande = 4;
console.log(randomNumber);
function check(domandaId) {
  if (numdomande > 0) {
    switch (domandaId) {
      case 1:
        let personaggio0 = listaimmagini[randomNumber - 1].nero;
        console.log(personaggio0);
        let domanda0 = listadomande[domandaId - 1].nero;
        console.log(domanda0);
        if (personaggio0 === domanda0) {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].nero == false) {
                button.style.display = "none";
              }
            }
          }
        } else {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].nero == true) {
                button.style.display = "none";
              }
            }
          }
        }
      break;
      case 2:
        let personaggio3 = listaimmagini[randomNumber - 1].occhi;
        console.log(personaggio3);
        let domanda3 = listadomande[domandaId - 1].occhi;
        console.log(domanda3);
        let occhiDaNascondere;
        if (personaggio3 === domanda3) {
          occhiDaNascondere = ["verdi", "bruni"];
        } else {
          occhiDaNascondere = ["azzurri"];
        }
        for (let i = 0; i < listaimmagini.length; i++) {
          const buttonId = "mybutton-" + (i + 1);
          const button = document.getElementById(buttonId);
          if (button && occhiDaNascondere.includes(listaimmagini[i].occhi)) {
            button.style.display = "none";
          }
        }
      break;
      case 3:
        let personaggio4 = listaimmagini[randomNumber - 1].occhi;
        console.log(personaggio4);
        let domanda4 = listadomande[domandaId - 1].occhi;
        console.log(domanda4);
        let occhiDaNascondere1;
        if (personaggio4 === domanda4) {
          occhiDaNascondere1 = ["azzurri", "bruni"];
        } else {
          occhiDaNascondere1 = ["verdi"];
        }
        for (let i = 0; i < listaimmagini.length; i++) {
          const buttonId = "mybutton-" + (i + 1);
          const button = document.getElementById(buttonId);
          if (button && occhiDaNascondere1.includes(listaimmagini[i].occhi)) {
            button.style.display = "none";
          }
        }
      break;
      case 4:
        let personaggio5 = listaimmagini[randomNumber - 1].occhi;
        console.log(personaggio5);
        let domanda5 = listadomande[domandaId - 1].occhi;
        console.log(domanda5);
        let occhiDaNascondere5;
        if (personaggio5 === domanda5) {
          occhiDaNascondere5 = ["azzurri", "verdi"];
        } else {
          occhiDaNascondere5 = ["bruni"];
        }
        for (let i = 0; i < listaimmagini.length; i++) {
          const buttonId = "mybutton-" + (i + 1);
          const button = document.getElementById(buttonId);
          if (button && occhiDaNascondere5.includes(listaimmagini[i].occhi)) {
            button.style.display = "none";
          }
        }
      break;
      case 5:
        let personaggio6 = listaimmagini[randomNumber - 1].capelli;
        console.log(personaggio6);
        let domanda6 = listadomande[domandaId - 1].capelli;
        console.log(domanda6);
        let capelliDaNascondere6;
        if (personaggio6 === domanda6) {
          capelliDaNascondere6 = ["castani", "bianchi"];
        } else {
          capelliDaNascondere6 = ["biondi"];
        }
        for (let i = 0; i < listaimmagini.length; i++) {
          const buttonId = "mybutton-" + (i + 1);
          const button = document.getElementById(buttonId);
          if (button && capelliDaNascondere6.includes(listaimmagini[i].capelli)) {
            button.style.display = "none";
          }
        }
      break;
      case 6:
        let personaggio7 = listaimmagini[randomNumber - 1].capelli;
        console.log(personaggio7);
        let domanda7 = listadomande[domandaId - 1].capelli;
        console.log(domanda7);
        let capelliDaNascondere7;
        if (personaggio7 === domanda7) {
          capelliDaNascondere7 = ["biondi", "bianchi"];
        } else {
          capelliDaNascondere7 = ["castani"];
        }
        for (let i = 0; i < listaimmagini.length; i++) {
          const buttonId = "mybutton-" + (i + 1);
          const button = document.getElementById(buttonId);
          if (button && capelliDaNascondere7.includes(listaimmagini[i].capelli)) {
            button.style.display = "none";
          }
        }
      break;
      case 7:
        let personaggio8 = listaimmagini[randomNumber - 1].capelli;
        console.log(personaggio8);
        let domanda8 = listadomande[domandaId - 1].capelli;
        console.log(domanda8);
        let capelliDaNascondere8;
        if (personaggio8 === domanda8) {
          capelliDaNascondere8 = ["biondi", "castani"];
        } else {
          capelliDaNascondere8 = ["bianchi"];
        }
        for (let i = 0; i < listaimmagini.length; i++) {
          const buttonId = "mybutton-" + (i + 1);
          const button = document.getElementById(buttonId);
          if (button && capelliDaNascondere8.includes(listaimmagini[i].capelli)) {
            button.style.display = "none";
          }
        }
      break;
      case 8:
        let personaggio = listaimmagini[randomNumber - 1].maschio;
        console.log(personaggio);
        let domanda = listadomande[domandaId - 1].maschio;
        console.log(domanda);
        if (personaggio === domanda) {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].maschio == false) {
                button.style.display = "none";
              }
            }
          }
        } else {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].maschio == true) {
                button.style.display = "none";
              }
            }
          }
        }
      break;
      case 9:
        let personaggio1 = listaimmagini[randomNumber - 1].cappello;
        console.log(personaggio1);
        let domanda1 = listadomande[domandaId - 1].cappello;
        console.log(domanda1);
        if (personaggio1 === domanda1) {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].cappello == false) {
                button.style.display = "none";
              }
            }
          }
        } else {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].cappello == true) {
                button.style.display = "none";
              }
            }
          }
        }
      break;
      case 10:
        let personaggio2 = listaimmagini[randomNumber - 1].occhiali;
        console.log(personaggio2);
        let domanda2 = listadomande[domandaId - 1].occhiali;
        console.log(domanda2);
        if (personaggio2 === domanda2) {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].occhiali == false) {
                button.style.display = "none";
              }
            }
          }
        } else {
          for (let i = 0; i < listaimmagini.length; i++) {
            const buttonId = "mybutton-" + (i + 1);
            const button = document.getElementById(buttonId);
            if (button) {
              if (listaimmagini[i].occhiali == true) {
                button.style.display = "none";
              }
            }
          }
        }
      break;
    }
  } else {
    alert("hai finito le domande!!");
    if (numdomande) numdomande++
  }
  numdomande--;
  document.getElementById("valoredomande").innerText = numdomande;
}
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}
function closePopup() {
  document.getElementById('popup','popup1','popup2').style.display = 'none';
}
function showPopup1() {
  document.getElementById('popup1').style.display = 'block';
}
function closePopup1() {
  document.getElementById('popup1').style.display = 'none';
}
function showPopup2() {
  document.getElementById('popup2').style.display = 'block';
}
function closePopup2() {
  document.getElementById('popup2').style.display = 'none';
} 