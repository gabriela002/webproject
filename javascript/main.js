const elemento = document.getElementById("nav");
// console.log(elemento);
function toggleButton() {
  elemento.classList.toggle("navAtiva");
}

const jacquin = document.querySelector(".jacquin");

const claude = document.querySelector(".claude");

const areaText = document.querySelector(".areaText");

// console.log(jacquin, claude, areaText);

window.addEventListener("scroll", ScrollAnimation);

function ScrollAnimation() {
  const alturaScroll = document.documentElement.scrollTop;

  const alturaPagina = window.innerHeight;

  const alturaJacquin = jacquin.offsetTop;

  const alturaClaude = claude.offsetTop;

  const alturaText = areaText.offsetTop;
  console.log(alturaJacquin - (alturaPagina - 300) < alturaScroll);
  if (alturaJacquin - (alturaPagina - 300) < alturaScroll) {
    jacquin.classList.add("imgAtiva");
  } else {
    jacquin.classList.remove("imgAtiva");
  }

  if (alturaClaude - (alturaPagina - 300) < alturaScroll) {
    claude.classList.add("imgAtiva");
  } else {
    claude.classList.remove("imgAtiva");
  }
  if (alturaText - (alturaPagina - 300) < alturaScroll) {
    areaText.classList.add("textAtiva");
  } else {
    areaText.classList.remove("textAtiva");
  }
}

fetch("https://api.github.com/users/gabriela002/repos")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("error ao carregar API");
    }
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
