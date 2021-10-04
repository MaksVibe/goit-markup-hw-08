const navTabsBtn = $(".but");
console.log(navTabsBtn);

navTabsBtn.on("click", (e) => {
  navTabsBtn.removeClass("active-but");
  $(e.target).addClass("active-but");
});
