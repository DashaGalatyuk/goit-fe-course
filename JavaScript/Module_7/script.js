/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.

  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/



const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];



function createPostCard(object) {
      const divContainer = document.createElement('div');
      divContainer.classList.add('post');
      const image = document.createElement('img');
      image.classList.add('post__image');
      image.setAttribute('src',object.img);
      image.setAttribute('alt',object.title);

      const h2 = document.createElement('h2');
      h2.textContent = posts.value;
      h2.classList.add('post__title');

      const p = document.createElement('p');
      p.classList.add('post__text');
      p.textContent = object.text;

      const a = document.createElement('a');
      a.classList.add('button');
      image.setAttribute('href',object.link);
      a.textContent = 'Read more';

      divContainer.append(image);
      divContainer.append(h2);
      divContainer.append(p);
      divContainer.append(a);
      return divContainer;
}

function createCards(arr){
  let frag = document.createDocumentFragment();
  for(let el of arr){
    frag.append(createPostCard(el));
  }
  return frag;
}

createCards(posts);
let body = document.body;
body.append(createCards(posts));


// let createCards = (posts) => {
//   const divContainer = document.createElement('div');
//   divContainer.classList.add('post');
//
//   const image = document.createElement('img');
//   image.classList.add('post__image');
//   image.setAttribute('src',"http://via.placeholder.com/400x150");
//   image.setAttribute('alt','post image');
//
//   const h2 = document.createElement('h2');
//   h2.textContent = posts.value;
//   h2.classList.add('post__title');
//
//   const p = document.createElement('p');
//   p.classList.add('post__text');
//   p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
//
//   const a = document.createElement('a');
//   a.classList.add('button');
//   image.setAttribute('href','#');
//   a.textContent = 'Read more';
//
//   body.append(divContainer);
//   divContainer.append(image);
//   divContainer.append(h2);
//   divContainer.append(p);
//   divContainer.append(a);
// }
// }
//
// createPostCard(post)
