function darkMode () {
  document.querySelector('body').classList.add("dark")
  document.querySelector('.formulario').classList.add("dark")
  document.querySelector('button.sign-up').classList.add("dark")
};

function lightMode () {
  document.querySelector('body').classList.remove("dark")
  document.querySelector('.formulario').classList.remove("dark")
  document.querySelector('button.sign-up').classList.remove("dark")
};
