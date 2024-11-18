export default function addSmoothScroll() {
  const links = document.querySelectorAll('.scrollspyLinks a[href^="#"]');
  links.forEach((linkItem) => {
    linkItem.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window?.scrollTo({
        top: targetElement?.offsetTop,
        behavior: "smooth",
      });
    });
  });
}
