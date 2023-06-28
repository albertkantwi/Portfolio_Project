const mainMenu = document.querySelector('.nav-bar');
const openMenu = document.querySelector('.humburger');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.nav-link');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});


const bodyTag = document.querySelector('body');
const projectContainer = document.querySelector('.middle-page');

const topProjectObj = {
  title: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/1-image.png',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  dataset: 0,
};


const otherProjects = [
  {
    backgroundImgId: 'page-1',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 1,
  },
  {
    backgroundImgId: 'page-2',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 2,
  },
  {
    backgroundImgId: 'page-3',
    title: 'WebSite Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 3,
  },
  {
    backgroundImgId: 'page-4',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 4,
  },
  {
    backgroundImgId: 'page-5',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 5,
  },
  {
    backgroundImgId: 'page-6',
    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 6,
  },
];


const createElement = (tag, className) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};

const createList = (items, className) => {
  const ul = createElement('ul', className);
  items.forEach((item) => {
    const li = createElement('li', `${className}-item`);
    li.innerText = item;
    ul.appendChild(li);
  });
  return ul;
};

const createButton = (className, dataset, text) => {
  const btn = createElement('button', className);
  btn.innerText = text;
  btn.setAttribute('data-projectbtn', dataset);
  return btn;
};

const createtopProjectCon = () => {
  const topProjectEl = createElement('div', 'under-page');

  const project1Image = createElement('div', 'under-image');
  topProjectEl.appendChild(project1Image);

  const image1 = createElement('img', 'image1');
  image1.src = topProjectObj.image;
  project1Image.appendChild(image1);

  const project1Info = createElement('div', 'under-text');
  topProjectEl.appendChild(project1Info);

  const project1Title = createElement('h3', 'multi-post');
  project1Title.innerHTML = topProjectObj.title;
  project1Info.appendChild(project1Title);

  const project1Description = createElement('p', 'middle-page-discription');
  project1Description.innerText = topProjectObj.description;
  project1Info.appendChild(project1Description);

  const project1Languages = createList(
    topProjectObj.technologies,
    'language1',
  );
  project1Info.appendChild(project1Languages);

  const project1LinkBtn = createButton(
    'see-project1',
    topProjectObj.dataset,
    'See Project',
  );
  project1Info.appendChild(project1LinkBtn);

  return topProjectEl;
};

const topProjectCon = createElement('div', 'page-cont');
projectContainer.appendChild(topProjectCon);
topProjectCon.appendChild(createtopProjectCon());

const createOtherProject = (otherProject) => {
  const otherProjectEl = createElement('div', 'page');
  otherProjectEl.id = otherProject.backgroundImgId;

  const otherProjectInfo = createElement('div', 'page-details');
  otherProjectEl.appendChild(otherProjectInfo);

  const otherProjectTitle = createElement('h3', 'page-header');
  otherProjectTitle.innerHTML = otherProject.title;
  otherProjectInfo.appendChild(otherProjectTitle);

  const otherProjectDescription = createElement(
    'p',
    'page-paragraph',
  );
  otherProjectDescription.innerText = otherProject.description;
  otherProjectInfo.appendChild(otherProjectDescription);

  const otherProjectLanguages = createList(
    otherProject.technologies,
    'page-language',
  );
  otherProjectInfo.appendChild(otherProjectLanguages);

  const otherProjectLink = createElement('div', 'page-see-project');
  otherProjectEl.appendChild(otherProjectLink);

  const otherProjectLinkBtn = createButton(
    'see-project1',
    otherProject.dataset,
    'See Project',
  );
  otherProjectLink.appendChild(otherProjectLinkBtn);

  return otherProjectEl;
};


