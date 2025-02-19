
// bouton responsive quand on diminue la taille de l'écran
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Sélection de tous les liens du menu de nav
const navLinks = document.querySelectorAll('nav a');

// Parcourir chaque link dans nav 
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Bloque le comportement par défaut (chargement de page)
        const targetId = this.getAttribute('href'); // Récupère l'ID de la section cible -> href
        const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

        // Défilement fluide vers la section
        targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});


//ajout d'un bouton pour remonter en haut de la page

// Sélection du bouton
const backToTopButton = document.getElementById('backToTop');

// Affiche ou cache le bouton selon la position de défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Si l'utilisateur descend de 200px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Ajout de l'interactivité pour défiler vers le haut
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
});


// message de bienvenu en fonction de l'heure

document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessageElement = document.getElementById("welcome-message");
    const currentHour = new Date().getHours();
    let message;

    if (currentHour >= 5 && currentHour < 12) {
        message = "Bonjour ! Bienvenue sur mon CV en ligne !";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Bonne après-midi ! Explorez mon parcours.";
    } else {
        message = "Bonne soirée ! Découvrez mes expériences.";
    }

    welcomeMessageElement.textContent = message;
    welcomeMessageElement.style.textAlign = "center";
    welcomeMessageElement.style.color = "azure";
    welcomeMessageElement.style.marginTop = "10px";
});


//montrer mes compétences de maniere dynamique 

    document.addEventListener("DOMContentLoaded", function () {
        var ctx = document.getElementById("skillsChart").getContext("2d");
        var skillsChart = new Chart(ctx, {
            type: "bar", // ou "doughnut" pour un graphique circulaire
            data: {
                labels: ["JavaScript", "HTML & CSS", "Angular", "Python", "SQL / PL-SQL", "Java", "C"],
                datasets: [{
                    label: "Niveau de compétence (%)",
                    data: [80, 90, 70, 70, 85, 70, 60], // Adapte ces valeurs à tes compétences
                    backgroundColor: ["#007bff", "#28a745", "#ffc107", "#17a2b8", "#6610f2", "#fd7e14", "#dc3545"],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    });



//--------> Affichage de projets de manière interactive <----------

// Récupérer tous les projets
const projects = document.querySelectorAll('.project');

// Variables pour suivre l'index du projet actuel
let currentIndex = 0;

// Fonction pour afficher le projet actuel et cacher les autres
function showProject(index) {
    projects.forEach(project => {
        project.classList.remove('active');  
    });
    // Ajouter la classe 'active' au projet actuel
    projects[index].classList.add('active');
}

// Initialiser l'affichage avec le premier projet
showProject(currentIndex);

// Boutons de navigation
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Ajouter un écouteur d'événements pour le bouton "précédent"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
    showProject(currentIndex);
});

// Ajouter un écouteur d'événements pour le bouton "suivant"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
    showProject(currentIndex);
});

/* affichage interactive et progressive de sections*/

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

/*effet du header adapté au mobile*/
document.addEventListener("DOMContentLoaded", function () {
    // Bouton responsive pour le menu mobile
    const navToggle = document.getElementById("nav-toggle");
    const navLinksContainer = document.getElementById("nav-links");

    navToggle.addEventListener("click", function () {
        navLinksContainer.classList.toggle("active");
    });

    // Défilement fluide vers les sections
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinksContainer.classList.remove("active"); // Fermer le menu mobile après clic
        });
    });

    // Bouton retour en haut
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Message de bienvenue en fonction de l'heure
    const welcomeMessageElement = document.getElementById("welcome-message");
    const currentHour = new Date().getHours();
    let message;
    if (currentHour >= 5 && currentHour < 12) {
        message = "Bonjour ! Bienvenue sur mon CV en ligne !";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Bonne après-midi ! Explorez mon parcours.";
    } else {
        message = "Bonne soirée ! Découvrez mes expériences.";
    }
    welcomeMessageElement.textContent = message;
    welcomeMessageElement.style.textAlign = "center";
    welcomeMessageElement.style.color = "azure";
    welcomeMessageElement.style.marginTop = "10px";

   

    // Affichage interactif des projets
    const projects = document.querySelectorAll('.project');
    let currentIndex = 0;
    function showProject(index) {
        projects.forEach(project => {
            project.classList.remove('active');
        });
        projects[index].classList.add('active');
    }
    showProject(currentIndex);
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        showProject(currentIndex);
    });
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        showProject(currentIndex);
    });

    // Affichage progressif des sections
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Effet parallax pour le header
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.querySelector(".parallax-header").style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
});

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector(".parallax-header").style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });


  
