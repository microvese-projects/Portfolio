const projects = [
  {
    name: "Multi-Post Stories",
    featured: true,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/multi-post-stories.png",
      alt: "Background image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  }
]

const hamburgerIcon = document.querySelector('#hamburger-menu');
const hamburgerContentContainer = document.querySelector('.links');
const closeHamburgerBtn = document.querySelector('#close-hamburger > i');

function closeMenu() {
  hamburgerContentContainer.classList.remove('hamburger-content');
}

function navigationClose(link) {
  link.addEventListener('click', closeMenu);
}

function showMenu() {
  hamburgerContentContainer.classList.add('hamburger-content');
  // get nav-links in hamburger view
  const navLinks = document.querySelectorAll('.hamburger-content li:not(#close-hamburger)');
  navLinks.forEach(navigationClose);
}

hamburgerIcon.addEventListener('click', showMenu);
closeHamburgerBtn.addEventListener('click', closeMenu);

const activeCardContainer = document.querySelector(".projects-container");
const inactiveCardsContainers = document.querySelector(".inactive-cards-container");

function displayCards({name, featured, description, featuredImage, technologies}) {
  let card = document.createElement("div");
  let image = document.createElement("img");
  let projectHeading = document.createElement("h3");
  let descriptionP = document.createElement("p");
  let skills = document.createElement("ul");
  let seeProjectBtn = document.createElement("button");
  card.className = "project-card";
  image.setAttribute("src", featuredImage.link);
  image.setAttribute("alt", featuredImage.alt);
  projectHeading.className = "project-card-heading";
  projectHeading.textContent = name;
  descriptionP.className = "project-card-description";
  descriptionP.textContent = description.slice(0, 200);
  skills.className = "skills";
  skills.innerHTML = technologies.map(tech => `<li>${tech.split(" ")[0]}</li>`).join("");
  seeProjectBtn.className = "see-project";
  seeProjectBtn.textContent = "See Project";

  if(featured === false) {
    card.classList.add("inactive")
    card.appendChild(image);
    card.appendChild(projectHeading);
    card.appendChild(descriptionP);
    card.appendChild(skills);
    card.appendChild(seeProjectBtn);
  
    inactiveCardsContainers.appendChild(card)
  } 
  else {
    let projectInfo = document.createElement("div");
    card.classList.add("featured")
    projectInfo.className = "information";
    projectInfo.appendChild(projectHeading);
    projectInfo.appendChild(descriptionP);
    projectInfo.appendChild(skills);
    projectInfo.appendChild(seeProjectBtn);
    card.appendChild(image);
    card.appendChild(projectInfo);

    activeCardContainer.appendChild(card);
  }
  
}

projects.forEach(displayCards);