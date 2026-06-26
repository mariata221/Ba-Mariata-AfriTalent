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

// navbar au scroll
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