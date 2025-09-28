export default class Slider {
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass = "",
        animate = false,
        autoplay = false} = {}){
        this.container = document.querySelector(container);
        this.btns = document.querySelectorAll(btns);
        this.slides = this.container.children;
        this.slideIndex = 1;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }
}