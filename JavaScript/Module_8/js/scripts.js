// <div class="image-gallery js-image-gallery">
//     <div class="fullview">
//     <!-- Если выбран первый элемент из preview -->
// <img src="img/fullview-1.jpeg" alt="alt text 1">
//     </div>
//     <ul class="preview">
//     <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
//     <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
//     <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
//     </ul>
//     </div>
//

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
]

const wrapper = document.querySelector('.image-gallery');



function  createImageGallery(arr) {
    const wrapMainImage = document.createElement('div');
    wrapMainImage.classList.add('fullview')
    wrapper.append(wrapMainImage);

    const wrapOtherImage = document.createElement('div');
    wrapOtherImage.classList.add('containerImages');
    wrapper.append(wrapOtherImage);

    //---------------------Choosed image---------
    const choosedImage = document.createElement('img');
    choosedImage.setAttribute('alt','alt text 1');
    choosedImage.setAttribute('src','img/fullview-1.jpeg');
    choosedImage.classList.add('main-image');
    wrapMainImage.append(choosedImage);
    wrapper.addEventListener('click',function (event) {
        //console.log(event.target.dataset.big);
        choosedImage.setAttribute('src',event.target.dataset.big);
        choosedImage.setAttribute('alt',event.target.alt);
    })

    //------------------Others images---------------

    const ul = document.createElement('ul');
    ul.classList.add('preview');
    wrapOtherImage.append(ul);


    for(let el of arr){
        const li = document.createElement('li');
        ul.append(li);
        const imageSmall = document.createElement('img');
        imageSmall.setAttribute('src',el.preview);
        imageSmall.setAttribute('alt',el.alt);
        imageSmall.setAttribute('data-big',el.fullview);
        imageSmall.classList.add('small-image');
        li.append(imageSmall);
    }

}
createImageGallery(galleryItems);


