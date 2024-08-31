
const question = document.querySelectorAll(".question");

question.forEach((elm, i) => {
  const qs = elm.querySelector(".qs");
  const para = elm.querySelector(".para");
  const image = elm.querySelector(".qs img");

  qs.addEventListener("click", () => {
    qs.classList.toggle("active-color");
    para.classList.toggle("open");
    if (para.classList.contains("open")) {
      image.src = "assets/icon-minus.svg";
    } else {
      image.src = "assets/icon-plus.svg";
    }
  });

  // console.log(elm);
});