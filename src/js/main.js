import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import YtVideo from "./modules/ytVideo";
import Difference from "./modules/difference";
import Forms from "./modules/forms";
import Accordion from "./modules/accordion";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulesMainSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulesMainSlider.render();

    new YtVideo('.showup .play', '.overlay').play();
    new YtVideo('.module__video-item .play', '.overlay').play();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,
    });
    showUpSlider.init()

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
        autoplay: true,
    });
    feedSlider.init();

    const officerOld = new Difference('.officerold', '.officer__card-item');
    officerOld.render();

    const officerNew = new Difference('.officernew', '.officer__card-item');
    officerNew.render();

    new Forms('form').init();
    new Accordion('.module__info-show', '.msg').init();
    new Download('.download').init();
});