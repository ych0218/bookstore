const section = document.querySelector('.main_container .box2');
const btns = document.querySelectorAll('.main2 .box2 .oneclick');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent == '더보기') {
      section.style.height = '355px';

    } else {
      section.style.height = '464px';

    }
  });
});       

const btn = document.querySelector('.main2 .box2 .oneclick');
btn.onclick = function() {
  this.style.display = 'none'; 
};