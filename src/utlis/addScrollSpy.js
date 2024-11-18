const addScrollspy = (defalutClass = "") => {
  var section = document.querySelectorAll(".scrollSpysection");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document
        .querySelector(".scrollspyLinks .active")
        .setAttribute("class", defalutClass);
      const navLink = document.querySelector(
        ".scrollspyLinks a[href*=" + i + "]"
      );

      navLink.setAttribute("class", `${defalutClass} active`);
    }
  }
};
export default addScrollspy;
