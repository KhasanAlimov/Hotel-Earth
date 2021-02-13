 
  class Header {
  
    render() {
      const navMenu = `
        <div class="position-absolute nav-container w-100 mx-auto d-flex justify-content-around">
          <nav class="navbar navbar-expand-lg">
            <button id="menuIcon" class="navbar-toggler hamburger_menu_2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">${animateMenuIcon2}</button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link text-light main-link" href="index.html">Главное</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light room-and-prices-link" href="rooms-and-prices.html">Номера и цены</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light about-hotel-link" href="about-hotel.html">Об отеле</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light contacts-link" href="contacts.html">Контакты</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="logo-block text-center">
            <a href="index.html" class="text-light text-decoration-none">earth</a>
            <p class="text-light">Demo hotel website</p>
          </div>
        </div>
        <div class="on-top-block position-fixed">${scrollTopButton}</div>
      `;
      HEADER.html(navMenu);
    }
  }

  const header = new Header();
  header.render();

// Изменение меню на крестик
$('#menuIcon').click(function(){
  $('#menuIcon').toggleClass('cross');
})