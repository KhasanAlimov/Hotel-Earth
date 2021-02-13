class Footer {
  render() {
    const currentYear = new Date().getFullYear();

    const renderFooter = `
      <div class="advertising-container text-white p-4 bg-secondary d-xl-none">
        ${advertising}
      </div>
      <div class="row justify-content-center d-xl-none border-bottom border-secondary">
        <div class="col-lg-3 col-md-6 col-12">
          <div class="mb-4">
            <h4 class="text-secondary">Поиск</h4>
            ${search}
          </div>
          <h4 class="text-secondary">Соц-сети</h4>
          <div class="d-flex justify-content-center flex-wrap">
            ${socNetworks}
          </div>
        </div>
        <div class="contact-us col-lg-3 col-md-6 col-12 contact-us-widget">
          <h4 class="text-secondary">Оставить отзыв</h4>
          ${contactUsForm}
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <h4 class="text-secondary">Инфо</h4>
          ${info_1}
        </div>
        <div class="col-lg-3 col-md-6 col-12 pt-5">${info_2}</div>
      </div>
      <div class="text-white text-center">
        <p class="copyright">Copyright © ${currentYear} | Created by Khasan Alimov</p>
      </div>
    `;
    FOOTER.html(renderFooter);
  }
}

const footer = new Footer();
footer.render();