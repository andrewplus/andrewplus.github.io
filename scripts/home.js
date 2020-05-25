// Global variables
const tileCount = 5;
let inPage = false;

// Selectors
const titleElements = document.querySelectorAll(".title");
const nameElement = document.querySelector(".name");

// Launch animations
window.onload = () => {
    // tiles
    for (let id = 0; id <= tileCount; id++) {
        setTimeout(() => {
            element = document.querySelector("[data-tile-id='" + id + "']");
            element.classList.add("animated-in");
        }, 75 * (id+1));
    }
    // name
    setTimeout(() => {
        nameElement.classList.add("animated-in");
    }, 75 * (tileCount+2));
}

// Tile font size
const tileFontDivisor = 16;

const adjustTileTitles = (divisor=7) => {
    const tileWidth = document.querySelector(".size-baseline").offsetWidth;

    titleElements.forEach((element) => {
        element.style.fontSize = (tileWidth / divisor) + "px";
        element.style.letterSpacing = (tileWidth / 23) + "px";
    });
    nameElement.style.fontSize = (tileWidth / 9) + "px";
    nameElement.style.letterSpacing = (tileWidth / 23) + "px";
}

window.onresize = () => {
    adjustTileTitles(tileFontDivisor);
}

adjustTileTitles(tileFontDivisor);