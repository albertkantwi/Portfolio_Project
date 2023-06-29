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
  image: './images/under-img.png',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  dataset: 0,
};

const otherProjects = [
  {
    backgroundImgId: 'page-1',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/page1-img.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 1,
  },
  {
    backgroundImgId: 'page-2',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/page2-img.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 2,
  },
  {
    backgroundImgId: 'page-3',
    title: 'WebSite Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/page3-img.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 3,
  },
  {
    backgroundImgId: 'page-4',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/page1-img.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 4,
  },
  {
    backgroundImgId: 'page-5',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/page2-img.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 5,
  },
  {
    backgroundImgId: 'page-6',
    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: './images/page3-img.png',
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

const otherProjectsCon = createElement('div', 'pages-container');
projectContainer.appendChild(otherProjectsCon);
otherProjects.forEach((otherProject) => {
  otherProjectsCon.appendChild(createOtherProject(otherProject));
});

const modalProjects = [
  {
    title: 'Multi-Post Stories',
    description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://albertkantwi.github.io/Portfolio_Project/',
    sourceLink: 'https://github.com/albertkantwi/Portfolio_Project',
  },
];

function projectModal(e) {
  const docFragment = document.createDocumentFragment();
  const projectCardInfo = modalProjects[parseInt(e.target.dataset.projectbtn, 10)];

  const popupContainer = createElement('div', 'popup-menu-container');

  const projectPopup = document.createElement('div');
  projectPopup.classList.add('popup-menu', 'project-card');

  const popupHeader = createElement('div', 'popup-header');
  popupHeader.innerHTML = '<img src="images/popup-close.png" alt="close button" id="pop-close">';
  docFragment.appendChild(popupHeader);

  const popupTitle = createElement('h3', 'popup-menu-title');
  popupTitle.innerHTML = projectCardInfo.title;
  popupHeader.appendChild(popupTitle);

  const popupLanguages = createList(
    projectCardInfo.technologies,
    'popup-menu-language',
  );
  popupHeader.appendChild(popupLanguages);

  const popupBody = createElement('div', 'popup-main');
  docFragment.appendChild(popupBody);

  const popupImgContainer = createElement('div', 'popup-menu-img');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = projectCardInfo.image;
  popupImgContainer.appendChild(popupImg);

  const popupTextContainer = createElement('div', 'popup-menu-text');
  popupBody.appendChild(popupTextContainer);

  const popupDescription = createElement('p', 'popup-menu-paragraph');
  popupDescription.innerText = projectCardInfo.description;
  popupTextContainer.appendChild(popupDescription);

  const popupLinkContainer = createElement('div', 'popup-menu-link');
  popupTextContainer.appendChild(popupLinkContainer);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live<img src="images/see-live.png" alt="live">';
  liveLink.href = projectCardInfo.liveLink;
  popupLinkContainer.appendChild(liveLink);

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source<img src="images/see-source.png" alt="source">';
  sourceLink.href = projectCardInfo.sourceLink;
  popupLinkContainer.appendChild(sourceLink);

  projectPopup.appendChild(docFragment);
  popupContainer.appendChild(projectPopup);
  bodyTag.appendChild(popupContainer);

  document.getElementById('header').style.filter = 'blur(10px)';
  projectContainer.style.filter = 'blur(10px)';
  document.querySelector('.headline').style.filter = 'blur(10px)';
  document.getElementById('about').style.filter = 'blur(10px)';

  const close = document.getElementById('pop-close');
  close.addEventListener('click', () => {
    bodyTag.removeChild(popupContainer);
    document.getElementById('header').style.filter = 'blur(0)';
    projectContainer.style.filter = 'blur(0)';
    document.querySelector('.headline').style.filter = 'blur(0)';
    document.getElementById('about').style.filter = 'blur(0)';
  });
}

const projectsBtn = document.querySelectorAll('.see-project1');
projectsBtn.forEach((btn) => btn.addEventListener('click', projectModal));
