const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".box > div > div");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        playAudio();
        if (btn.id === "del") {
            let arr = screen.value.split("");
            arr.pop();
            screen.value = arr.join("");
        }
        else if (btn.id === "clear") {
            screen.value = "";
        }
        else if (btn.id === "equal") {
            screen.value = eval(screen.value)
        }
        else if (btn.id === "sqrt") {
            screen.value = Math.sqrt(eval(screen.value))
        }
        else if (btn.id === "half") {
            if (typeof eval(screen.value) === "number") {
                screen.value = eval(screen.value) / 2;
            } else {
                screen.value = "Error";
                screen.style.color
            }
        }
        else {

            screen.value += btn.innerText;
        }
    });
});



//  function to play audio after button clicked
function playAudio() {
    document.querySelector("audio").play();
}