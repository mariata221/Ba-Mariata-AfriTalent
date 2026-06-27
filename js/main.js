// DARK MODE

const themetoggle = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

//changement de theme au dpart
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themetoggle.textContent = "☀️"
}

themetoggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // suvegarde de theme 
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themetoggle.textContent = "☀️"
  } else {
    localStorage.setItem("theme", "light");
    themetoggle.textContent = "🌙"
  }
})

// NAVBAR AU SCROLL
const navbar = document.querySelector(".navbar")
const navLinks = document.querySelectorAll(".nav-link")


window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')

    navLinks.forEach(link => {
      link.classList.add('append')
    })

  } else {
    navbar.classList.remove('scrolled')

    navLinks.forEach(link => {
      link.classList.remove('append')
    })
  }
})

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll',() => {
    if (window.scrollY >300) {
        backToTop.classList.add('show')
   }else {
        backToTop.classList.remove('show')
    }
}  
);
if (backToTop){
    backToTop.addEventListener('click', () =>{
        window.scrollTo({ top : 0,
             behavior: 'smooth'});
    }
    );
};
// CONTER ANIMES

const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const target = entry.target;
            const finalValue = parseInt(target.dataset.target);
            let current = 0;
            const increment = finalValue / 100;

            const timer = setInterval( () => {
                current += increment;
                if (current >= finalValue){ 

                current = finalValue;
                clearInterval(timer);
            }
            target.textContent = '+' + Math.floor(current);
        }, 20);
        countObserver.unobserve(target);
    }
});
 });
 counters.forEach(counter => countObserver.observe(counter));

// FADE-IN

 const fadeElements = document.querySelectorAll('.fade-in');
 if (fadeElements.length > 0) {
    const fade0bserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
        if (entry.isIntersecting){entry.target.classList.add('visible');
            fade0bserver.unobserve(entry.target);
        }
    });
 }, { threshold: 0.15});
 fadeElements.forEach((el) => fade0bserver.observe(el)); 
}

// BOUTONS FILTRAGE

const filterbuttons = document.querySelectorAll(".filtrage");
const cards = document.querySelectorAll(".card-freelance");

filterbuttons.forEach(button => {
  button.addEventListener("click", () => {

    filterbuttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.name;

    cards.forEach(card => {
      const cardCategory = card.dataset.name;

      if (category =="Tous"  || cardCategory === category) {
        card.style.display ="block";
      } else {
        card.style.display = "none"
      }
    })
  })
})

console.log("Le script fonctionne")
const form = document.getElementById("contactForm");

form.addEventListener("submit",function(e) {
  e.preventDefault();
  console.log("Formulaire soumis")

  let isValid = true;

  // CHAMPS
  const nom = document.getElementById("nom");
  const prenom = document.getElementById("prenom");
  const email = document.getElementById("email");
  const adresse = document.getElementById("adresse");
  const sujet = document.getElementById("sujet");
  const message = document.getElementById("message");

  console.log(nom);
  console.log(prenom);
  console.log(email);
  console.log(adresse);
  console.log(sujet);
  console.log(message);

  // MESSAGE D'ERREUR
  document.getElementById("err-prenom").textContent ="";
  document.getElementById("err-nom").textContent ="";
  document.getElementById("err-email").textContent ="";
  document.getElementById("err-adresse").textContent ="";
  document.getElementById("err-sujet").textContent ="";
  document.getElementById("err-message").textContent ="";

  // VALIDATION prenom
  if (prenom.value.trim() === "") {
    document.getElementById("err-prenom").textContent =" Le prenom est obligatoire";
    isValid = false;
  }
// Validation nom
  if (nom.value.trim() === "") {
    document.getElementById("err-nom").textContent =" Le nom est obligatoire";
    isValid = false;
  }


  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "") {
    document.getElementById("err-email").textContent =" L'email est obligatoire";
    isValid = false;
  } else if (!regexEmail.test(email.value.trim())) {
    
    document.getElementById("err-email").textContent ="Format d'email invalide";
    isValid = false;
  
  }

// VALIDATION adresse
  if (adresse.value.trim() === "") {
    document.getElementById("err-adresse").textContent =" L'adresse est obligatoire";
    isValid = false;
  }
// VALIDATION SUJET
  if (sujet.value.trim() === "") {
    document.getElementById("err-sujet").textContent =" Veuillez choisir un sujet";
    isValid = false;
  }
// VALIDATION MESSAGE
  if (message.value.trim() === "") {
    document.getElementById("err-message").textContent =" Le message est obligatoire";
    isValid = false;
  } else if(message.value.trim().length < 20) {
    document.getElementById("err-message").textContent =" Le message doit contenir au moins 20 caracteres";
    isValid = false;
  }

  // VALIDATION AVEC SUCCES
  if (isValid) {
    document.getElementById("success-message").style.display = "block";
    form.reset();
    setTimeout(() => {
      document.getElementById("success-message").style.display = "none"
    }, 5000 );
    
  }
});