const emojiControl = document.querySelector(".emoji-control");
const emojiInput = emojiControl.querySelector("input");
const emojiBoton = emojiControl.querySelector("button");
const emojiBar =  document.querySelector(".emoji-bar");

emojiBoton.addEventListener("click", emoji_toggleBar);
emojiBar.addEventListener("click", emoji_clickEmoji)

function emoji_toggleBar(){
    emojiBar.classList.toggle("oculto")
}

function emoji_clickEmoji(e){
    e.preventDefault();
    e.stopPropagation();
    
    if(e.target.tagName == "LI"){
        emojiInput.value = e.target.textContent;
        emoji_toggleBar();
    }
    
}