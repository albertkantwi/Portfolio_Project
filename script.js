const mainMenu = document.querySelector('.nav-bar');
const openMenu = document.querySelector('.humburger');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.nav-link');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

const projects = [
  {
    id: 'page1',
    name: '',
    description: '',
    featuredImage: 'images/desk-pages1.png',
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://albertkantwi.github.io/Portfolio_Project/" target="blank">See Live</a>',
  },
  {
    id: 'page2',
    name: 'Data Dashboard<br>Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://albertkantwi.github.io/Portfolio_Project/" target="blank">See Live</a>',
  },
  {
    id: 'page3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://albertkantwi.github.io/Portfolio_Project/" target="blank">See Live</a>',
  },
  {
    id: 'page4',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://albertkantwi.github.io/Portfolio_Project/" target="blank">See Live</a>',
  },
  {
    id: 'page2',
    name: 'Data Dashboard<br>Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://albertkantwi.github.io/Portfolio_Project/" target="blank">See Live</a>',
  },
  {
    id: 'page3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://albertkantwi.github.io/Portfolio_Project/" target="blank">See Live</a>',
  },
]

const projectsContainer = document.getElementById('pages-container');



const allProjects = [
  {
    id: "middle-page",
    title: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    id: "page1",
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    id: "page2",
    title: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    id: "page3",
    title: 'WebSite Portfolio',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    id: "page4",
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    id: "page2",
    title: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    id: "page3",
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/Snapshoot.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
];


const seeProject = document.querySelectorAll('.see-project1');
const popMenu = document.querySelector('.Popup');



seeProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    popMenu.classList.add('act');
    popMenu.innerHTML = `    
    <section id="popup2" class="popup2">
        <div id="popup2-head">
          <h3 class="popup2-heading flex">${allProjects[index].title}<h3>
            <span class="close-botn">&#x2715;</span>
            <ul class="language1">
              <li><button class="pop-button">HTML</button>
              </li>
              <li ><button class="pop-button">Bootstrap</button>
              </li>
              <li "><button class="pop-button">Ruby on rails</button>
              </li>
          </ul>
        </div>
          <div class="popup-card">
             <div id="popup-image"><img class="phone-desk" src="./images/Snapshoot.png" alt="something here">
             <img class="phone-img" src ="./images/Snapshoot-Portfolio.png" alt="phone img">
              </div>
              <div class="middle-page">
                <p class="popup-details">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                </p>
                <div class="flex popup-textbtn">
                  <button id= "see-live" 
                  class="see-project1">See live
                  <img class="deskPopImg" src="./images/see-live.png" alt="live icon">
                  </button>
                  <button id= "see-source" 
                  class="see-project1">
                  See source
                   <img src="./images/see-source.png" alt="source icon">
                  </button>
                </div>
              </div>
          </div>
     </section>
`;

const popClose = document.querySelector('.close-botn');
popClose.addEventListener('click', () => {
  popMenu.classList.remove('act');
  document.body.classList.remove('no-scroll');
});
});
});

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.errorMessage');
