import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const modulePageSlider = new MiniSlider ({
       container: '.moduleapp',
        btns: '.next'
    });
    modulePageSlider.render();



    // showUpSlider
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: '.card-active',
        animate: true,
    })
    showUpSlider.init();

    // modulesSlider
    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: '.card-active',
        animate: true,
        autoplay: true,
    })
    modulesSlider.init();

    // feedSlider
    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    })
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer().init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();
});
