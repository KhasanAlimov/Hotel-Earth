class Sidebar {
  
    render() {

      // Групирование элементов в сайдбар
      const sidebarContent = `
        <div class="mt-5 pt-4">
          <h4 class="text-secondary">Поиск</h4>
          ${search}
        </div>
        <div class="contact-us contact-us-widget mt-5">
          <h4 class="text-secondary">Оставить отзыв</h4>
          ${contactUsForm}
        </div>
        <div class="mt-5 normal-sidebar-center">
          <h4 class="text-secondary">Соц-сети</h4>
          <div class="d-flex justify-content-center flex-wrap">${socNetworks}</div>
        </div>
        <div class="info mt-5 px-2 normal-sidebar-center">
          <h4 class="text-secondary">Инфо</h4>
          ${info_1 + info_2}
        </div>
        <div class="mt-5 text-justify text-white p-1 normal-sidebar-center">
          ${advertising}
        </div> 
      `;
      SIDEBAR.html(sidebarContent);
    }
  }

  // Вызов функции
  const sidebar = new Sidebar();
  sidebar.render();

  