$(document).ready(function () {
    // ========================================================================
    // плавная прокрутка по якорным ссылкам

    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 0.6; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset, // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash // URL с хэшем
                }
            }
        }, false);
    }

    // ========================================================================
    // импорт html to html

    $('#header').load("../views/components/header.html");
    $('#footer').load("../views/components/footer.html");

    let $site_name = $('title').text(); // получение содержимого title
    let $site_title = $('title').text(`Title ` + $site_name); // вывод в title $название_сайта + содержиое title 



});