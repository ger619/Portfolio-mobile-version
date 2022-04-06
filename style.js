const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// Home Cards

const homeCard = document.getElementById('home-portfolio');

const cards = [{

  id: 1,
  title: 'Tonic',
  imageM: './images/Portfolio.png',
  imageD: './images/Portfolio1-big.png',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],

}, {
  id: 2,
  title: 'Tonic',
  imageM: './images/multi-post.png.svg',
  imageD: './images/Portfolio2.png',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
}, {

  id: 3,
  title: 'Tonic',
  imageM: './images/Portfolio3.png',
  imageD: './images/PopUpdesktop.svg',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],

}, {
  id: 4,
  title: 'Tonic',
  imageM: './images/PopUpmobile.svg',
  imageD: './images/PopUpdesktop.svg',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],

}];

const portfolioCards = cards.map((card, index) => `



<li>
<section class=" card-list card-list${index}">
                    <div>
                        <img class="card" src="${card.imageM}" alt="Portfolio1" />
                        <img class="animated" src="${card.imageD}" alt="nature-animated-image">
                    </div>
                    <div class="cards74">
                        <h2 class="tonic-class-${index}">${card.title}</h2>
                        
                        <h5 class="heading-canopy"><b>CANOPY</b> <span>·</span><small> Back End Dev <span>·</span> 2015 </small> </h5>
                        <p class="description">
                           ${card.cardDescription}
                        </p>
                        
                        <ul class="tools">
                        ${card.languages.map((lang) => `<li class="tools-li">${lang}</li>`).join('')}
                          </ul>
                        
                        <div class="view-project">
                           <button class="btn" type="button" onclick="showPop(${card.id})">See Project</button>
                        </div>
                    </div>
                </section>
            </li>

`).join('');

homeCard.innerHTML += portfolioCards;

// cards

const modalCards = document.getElementById('modal-cards');

const modalCard = [{
  id: 1,
  title: 'Tonic',
  imageM: './images/PopUpmobile.svg',
  imageD: './images/PopUpdesktop.svg',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescriptionD: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
  cardDescriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  languagesD: ['github', 'ruby', 'Bootstrap'],
  languagesM: ['html', 'css', 'javascript'],
  linkLive: 'https://ger619.github.io/Portfolio-mobile-version/',
  linkSource: 'https://github.com/ger619/Portfolio-mobile-version',

}];

const modalCardDisplay = modalCard.map((modeCard) => `

<div class="card-portfolio-1">

            <li class="pop-close"><i class="fa fa-times"></i></li>
          <h2 class="tonic-1">${modeCard.title}</h2>
          <h5 class="heading-canopy"><b>CANOPY</b> <span>·</span><small> Back End Dev <span>·</span> 2015 </small> </h5>
             
      <img class="forD-1" src="${modeCard.imageD}" alt="Pop Up Desktop" >
      <img class="forM-1" src="${modeCard.imageM}" alt="Pop Up Mobile" >

      <div>
      <div class="row">
      <div class="column-left-1">
          <p class="forD-1">
              ${modeCard.cardDescriptionD}
          </p>
          <p class="forM-1">
              ${modeCard.cardDescriptionM}
          </p>

      </div>
      <div class="column-right-1">
          <ul class="modal-1">
              ${modeCard.languagesM.map((lang) => `<li class="modal-2">${lang}</li>`).join('')}
          </ul>
          <ul class="miss modal-1">
          ${modeCard.languagesM.map((lang) => `<li class="modal-2">${lang}</li>`).join('')}
          
          </ul>
          <hr>
          <ul class="modal-1">
              <li class="modal-2" href="${modeCard.linkLive}">See live &#8599</li>
              <li class="modal-2" href="${modeCard.linkSource}">See Source <i class="fa fa-github"></i></li>

          </ul>


      </div>

  </div>
      </div>


  </div>


`).join('');

modalCards.innerHTML += modalCardDisplay;

const boxModal = document.querySelector('.card-portfolio-1');
const openModal = document.querySelectorAll('.btn');

openModal.forEach((open) => {
  open.addEventListener('click', () => {
    boxModal.style.display = 'block';
  });
});

// to close a modal
const popClose = document.querySelector('.pop-close');

popClose.addEventListener('click', () => {
  boxModal.style.display = 'none';
  document.querySelector('.btn').style.display = 'none';
});