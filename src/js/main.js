import Slider from "./modules/slider";
import YtVideo from "./modules/ytVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();

    const ytVide = new YtVideo('.showup .play', '.overlay');
    ytVide.play();
});