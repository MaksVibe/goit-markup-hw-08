const navTabsBtn = $(".portfolio__filter--btn");
console.log(navTabsBtn);

navTabsBtn.on("click", (e) => {
  navTabsBtn.removeClass("portfolio__filter--active");
  $(e.target).addClass("portfolio__filter--active");
});
