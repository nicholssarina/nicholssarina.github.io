const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['picone.jpg', `pictwo.jpg`, `picthree.jpg`, `picfour.jpg`, `picfive.jpg`, 'picsix.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'picone.jpg' : 'Cat in a yard',
    'pictwo.jpg' : 'Cat sleeping',
    'picthree.jpg' : 'Tortoise cat meowing',
    'picfour.jpg' : 'Tortoise cat posing',
    'picfive.jpg' : 'Cat laying with tongue sticking out',
    'picsix.jpg' : 'Blye eyed cat posing'
  }

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
