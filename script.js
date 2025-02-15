function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "LÊ THỊ THANH THÚY"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

// Typewriter Effect for "THÚY AN"
const texts2 = [
    "NGUYỄN HOÀNG THỤY AN",
    "TRẦN BẢO CHÂU",
    "VÕ HỒNG THI",
    "TRẦN THỊ HUYỀN TRANG"
]
let textIndex2 = 0;
let charcterIndex2 = 0;
const textElements2 = document.querySelector(".typewriter-text-2");

function typeWriter2() {
    if (charcterIndex2 < texts2[textIndex2].length) {
        textElements2.innerHTML += texts2[textIndex2].charAt(charcterIndex2);
        charcterIndex2++;
        setTimeout(typeWriter2, speed);
    } else {
        setTimeout(eraseText2, 1000)
    }
}

function eraseText2() {
    if (textElements2.innerHTML.length > 0) {
        textElements2.innerHTML = textElements2.innerHTML.slice(0, -1);
        setTimeout(eraseText2, 50)
    } else {
        textIndex2 = (textIndex2 + 1) % texts2.length;
        charcterIndex2 = 0;
        setTimeout(typeWriter2, 500)
    }
}

window.onload = () => {
    typeWriter();
    typeWriter2(); // Start the second typewriter effect
}