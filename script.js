document.addEventListener("DOMContentLoaded", () => {
    const films = document.querySelectorAll(".films");
    const prevFilm = document.querySelector(".prev");
    const nextFilm = document.querySelector(".next");
    
    let curFilm = 0;
    
    function showFilm() {
      films.forEach((film, index) => {
        if (index === curFilm) {
          film.style.display = "block";
        } else {
          film.style.display = "none";
        }
      });
    }
    
    prevFilm.addEventListener("click", () => {
      curFilm--;
      if (curFilm < 0) {
        curFilm = films.length - 1;
      }
      showFilm();
    });
    
    nextFilm.addEventListener("click", () => {
      curFilm++;
      if (curFilm >= films.length) {
        curFilm = 0;
      }
      showFilm();
    });
    
    showFilm();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const link = document.querySelector('nav a[href="#work"]');
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const templatesLink = document.querySelector('nav a[href="#templates"]');
    if (templatesLink) {
      templatesLink.addEventListener('click', function (e) {
        e.preventDefault();
        const templatesSection = document.querySelector(this.getAttribute('href'));
        templatesSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const contactsLink = document.querySelector('nav a[href="#contacts"]');
    if (contactsLink) {
      contactsLink.addEventListener('click', function (e) {
        e.preventDefault();
        const contactSection = document.querySelector(this.getAttribute('href'));
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });




 