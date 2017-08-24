'use strict';
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  var index = getRandomInRange(0, array.length - 1);
  return array[index];
}

var userComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.,',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function generateGallery(len) {
  var gallery = [];
  for (var i = 0; i < len; i++) {
    gallery.push({
      url: 'photos/' + (i + 1) + '.jpg',
      likes: getRandomInRange(15, 100),
      comments: getRandomElement(userComments)
    });
  }
  return gallery;
}

var pictures = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture-template').content;

var overlay = document.querySelector('.gallery-overlay-preview');
var overlayTemplate = document.querySelector('#overlay-template').content;

var showPictures = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').src = picture.url;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;

  return pictureElement;
};

var showOverlay = function (picture) {
  var overlayElement = overlayTemplate.cloneNode(true);

  overlayElement.querySelector('.gallery-overlay-image').src = picture.url;
  overlayElement.querySelector('.likes-count').textContent = picture.likes;
  overlayElement.querySelector('.comments-count').textContent = picture.comments;

  return overlayElement;
};

var photos = generateGallery(25);

var fragment = document.createDocumentFragment();

for (var i = 0; i < photos.length; i++) {
  fragment.appendChild(showPictures(photos[i]));
}
pictures.appendChild(fragment);

for (var j = 0; j < photos.length; j++) {
  fragment.appendChild(showOverlay(photos[j]));
}
overlay.appendChild(fragment);


// document.querySelector('.gallery-overlay').classList.remove('hidden');
