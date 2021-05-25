export const imagesArr = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const listGallery = document.querySelector(".js-gallery");

let imgEl = [];
imagesArr.map((el) => {
  imgEl.push(`<li class="gallery__item">
    <a
      class="gallery__link"
      href="${el.original}"
    >
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </li>`);
});

const imagesElems = imgEl.join(" ");
listGallery.insertAdjacentHTML("afterbegin", imagesElems);

const modal = document.querySelector(".js-lightbox");
const currentElImg = modal.getElementsByClassName("lightbox__image");

listGallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;

  modal.classList.add("is-open");

  currentElImg[0].src = event.target.dataset.source;
  console.log(event.target);
  console.log(event.target.dataset.source);
}

// const closeModalBtn = document.querySelector(
//   "button[data-action='close-lightbox']"
// );

// closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("is-open");

  currentElImg[0].src = "";
}

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    closeModal();
  }
});

modal.addEventListener("click", (ev) => {
  if (ev.target.hasAttribute("data-action")) {
    closeModal();
  }

  if (ev.target.classList.contains("lightbox__overlay")) {
    closeModal();
  }

  if (ev.target.classList.contains("lightbox__button--left")) {
    imagesArr.find((el, ind) => {
      if (el.original === currentElImg[0].src) {
        if (ind - 1 >= 0) {
          currentElImg[0].src = imagesArr[ind - 1].original;
        }
      }
    });
  }

  if (ev.target.classList.contains("lightbox__button--right")) {
    for (const el of imagesArr) {
      if (el.original === currentElImg[0].src) {
        if (imagesArr.indexOf(el) + 1 < imagesArr.length) {
          console.dir(imagesArr[imagesArr.indexOf(el) + 1].original);
          currentElImg[0].src = imagesArr[imagesArr.indexOf(el) + 1].original;
        }
        break;
      }
    }
  }

  /* Чере find пробовал, не прерывается цикл :( */

  // if (ev.target.classList.contains("lightbox__button--right")) {
  //   imagesArr.find((el, ind) => nextEl(el, ind));
  // }
  // function nextEl(el, ind) {
  //   if (el.original === currentElImg[0].src) {
  //     if (ind + 1 < imagesArr.length) {
  //       currentElImg[0].src = imagesArr[ind + 1].original;
  //     }
  //     return;
  //   }
  // }
});
