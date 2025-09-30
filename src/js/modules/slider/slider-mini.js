import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, btns, next, prev, activeClass, animate, autoplay) {
        super(container, btns, next, prev, activeClass, animate, autoplay);
        this.filteredSlide = [];
        this.autoPlaySlider = null;
    }

    filterSlide() {
        this.filteredSlides = Array.from(this.slides).filter(slide => slide.tagName !== "BUTTON");
    };

    decorateSlides() {
        this.filteredSlides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        this.filteredSlides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.filteredSlides[0].querySelector('.card__title').style.opacity = '1';
            this.filteredSlides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        this.container.appendChild(this.filteredSlides[0]);
        this.filterSlide();
        this.decorateSlides();
    }

    autoPlayOn(elem) {
        elem.addEventListener('mouseenter', () => {
            clearInterval(this.autoPlaySlider);
        });
    }

    autoPlayOff(elem) {
        elem.addEventListener('mouseleave', () => {
            this.autoPlaySlider = setInterval(() => this.nextSlide(), 5000);
        });
    }

    bindTriggers() {
        this.prev.addEventListener('click', () => {
            let active = this.filteredSlides[this.filteredSlides.length - 1];
            this.container.insertBefore(active, this.filteredSlides[0]);
            this.filterSlide();
            this.decorateSlides();
        });

        this.next.addEventListener('click', () => {
            this.nextSlide();
        });

        if (this.autoplay) {
            this.autoPlaySlider = setInterval(() => this.nextSlide(), 5000);
            this.autoPlayOff(this.container);
            this.autoPlayOn(this.container);

            this.autoPlayOff(this.next);
            this.autoPlayOn(this.next);

            this.autoPlayOff(this.prev);
            this.autoPlayOn(this.prev);            
        }
    }

    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;
            this.filterSlide();
            this.bindTriggers();
            this.decorateSlides();
        } catch (e) {}
    }
}