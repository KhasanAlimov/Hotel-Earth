// Массив соц-сетей
const objectSocialNetworks = [
  {
    id: 1,
    iconLink: "icons/img/whatsapp-icon.png",
    title: "Whatsapp"
  },
  {
    id: 2,
    iconLink: "icons/img/instagram-icon.png",
    title: "Instagram"
  },
  {
    id: 3,
    iconLink: "icons/img/gmail-icon.png",
    title: "Email"
  },
  {
    id: 4,
    iconLink: "icons/img/facebook-icon.png",
    title: "Facebook"
  },
  {
    id: 5,
    iconLink: "icons/img/telegram-icon.png",
    title: "Telegram"
  }
];

// Итерирование массива соц-сетей в HTML 
let socNetworks = '';

objectSocialNetworks.forEach(item => {
  socNetworks += `
    <span class="soc-net m-2">
      <a href="#">
        <img src="${item.iconLink}" alt="${item.title}" title="${item.title}" class="rounded">
      </a>
    </span>`;
          
});

// Форма обратной связи
const contactUsForm = `
  <form action="" class="d-flex flex-column text-white">
    <input type="text" placeholder="Имя" class="widget-inputs text-white border-0 p-1" required>
    <input type="email" placeholder="Email" class="widget-inputs text-white border-0 p-1" required>
    <textarea name="comment" class="widget-inputs text-white border-0 p-1" cols="30" rows="5" placeholder="Ваш отзыв" required></textarea>
    <input type="submit" class="widget-inputs text-white border-0 p-1" value="Отправить">
  </form>
`;

// Поисковик
const search = `
  <input type="search" class="widget-inputs text-white border-0 p-1" placeholder="Поиск...">
`;

// Инфо
const info_1 = `
  <div class="text-justify widget-links text-white about-hotel-widget">
    <h6 class="pl-3"><a href="about-hotel.html">Об отеле</a></h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos inventore laborum. Aperiam corrupti odio quod adipisci temporibus ipsa, placeat tempore sequi repudiandae ea cum.
      <a href="about-hotel.html">Читать дальше</a>
    </p>
  </div>`

const info_2 = `
  <div class="text-left widget-links text-white contacts-widget">
    <h6 class="pl-3"><a href="contacts.html">Контакты</a></h6>
      <address>
        <b>Гостиница Hotel~Earth</b><br>
        <i title="Адрес не является актуальной" class="warning">Мы находимся по адресу : г. Ош ул. Пушкина/49</i><br>
        Телефон : <a title="Телефон не является актуальной" href="#" class="warning">+996 (312)-00-00-00</a><br>
        Сотовый : <a title="Телефон не является актуальной" href="#" class="warning">+996 (550)-00-00-00</a><br>
        <b>Администратор</b><br>
        John Duo<br>
        Сотовый : <a title="Телефон не является актуальной" href="#" class="warning">+996 (550)-00-00-00</a>
      </address>
  </div>
`;

// Реклама
const advertising = `
  <div class="widget-links advertising">
    <a href="https://oshstore.com" target="_blank">
      <img src="https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?https%3A%2F%2Foshstore.com%2F" alt="Oshstore" class="w-100">
    </a>
    <p><a href="https://oshstore.com" target="_blank">Oshstore</a> - интернет-магазин строительных материалов в Оше и ошских областях.</p>
  </div>
  <div class="widget-links advertising">
    <a href="#" target="_blank">
      <div class="bg-primary w-100"></div>
    </a>
    <p><a href="#" target="_blank">Lorem ipsum</a>, dolor sit amet consectetur adipisicing elit. Quisquam, quae ut. Molestias, sequi eligendi.</p>
  </div>
  <div class="widget-links advertising">
    <a href="#" target="_blank">
      <div class="bg-danger w-100"></div>
    </a>
    <p><a href="#" target="_blank">Lorem ipsum</a>, dolor sit amet consectetur adipisicing elit. Quisquam, quae ut. Molestias, sequi eligendi.</p>
  </div>
  <div class="widget-links advertising">
    <a href="#" target="_blank">
      <div class="bg-warning w-100"></div>
    </a>
    <p><a href="#" target="_blank">Lorem ipsum</a>, dolor sit amet consectetur adipisicing elit. Quisquam, quae ut. Molestias, sequi eligendi.</p>
  </div>
`;

// Кнопка скролла на верх
let scrollTopButton = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" id="scroll-top" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>`;

// Форма бронирование номера
let roomReservationForm = `<form action="" class="d-flex justify-content-around flex-wrap align-items-center">
								<div>
								<label for="check-in">Заезд</label>
								<input type="date" name="check-in" id="check-in">
								</div>
								<div>
								<label for="departure">Отъезд</label>
								<input type="date" name="departure" id="departure">
								</div>
								<div>
								<label for="adults">Взрослые</label>
								<input type="number" name="adults" id="adults" min="1" max="25" value="1">
								</div>
								<div>
								<label for="children">Дети</label>
								<input type="number" name="children" id="children" min="0" max="25" value="0">
								</div>
								<div>
								<label for="rooms">Номер</label>
								<input type="number" name="rooms" id="rooms" min="1" max="25" value="1">
								
								</div>
								<button type="submit" class="btn btn-warning mt-3">Посмотреть номера</button>
              </form>`;
              
ROOM_RESERVATION.html(roomReservationForm);

