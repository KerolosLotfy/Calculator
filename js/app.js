const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".box > div > div");
const equalButton = document.getElementById("equal");
const themeToggle = document.querySelector(".theme-toggle");

// Initialize theme from localStorage
(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
    }
  } catch (_) {
    // ignore storage errors
  }
})();

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playAudio();
    if (btn.id === "del") {
      let arr = screen.value.split("");
      arr.pop();
      screen.value = arr.join("");
    } else if (btn.id === "clear") {
      screen.value = "";
    } else if (btn.id === "equal") {
      screen.value = eval(screen.value);
    } else if (btn.id === "sqrt") {
      screen.value = Math.sqrt(eval(screen.value));
    } else if (btn.id === "half") {
      if (typeof eval(screen.value) === "number") {
        screen.value = eval(screen.value) / 2;
      } else {
        screen.value = "Error";
        screen.style.color;
      }
    } else {
      // Handle different button types
      if (btn.id.startsWith("n")) {
        // Number buttons (n1, n2, etc.)
        screen.value += btn.id.charAt(1);
      } else if (btn.id === "dot") {
        screen.value += ".";
      } else if (btn.id === "sum") {
        screen.value += "+";
      } else if (btn.id === "d") {
        screen.value += "-";
      } else if (btn.id === "multi") {
        screen.value += "*";
      } else if (btn.id === "dev") {
        screen.value += "/";
      }
    }
  });
});

//  function to play audio after button clicked
function playAudio() {
  document.querySelector("audio").play();
}

// trigger equal on Enter key
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && equalButton) {
    equalButton.click();
  }
});

// Theme toggle handling
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (_) {
      // ignore storage errors
    }
  });
}