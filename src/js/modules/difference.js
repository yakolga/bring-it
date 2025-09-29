export default class Difference {
    constructor(container, items) {
        this.container = document.querySelector(container);
        this.items = this.container.querySelectorAll(items);
        this.counter = 0;
    }

    hideAllItems() {
        this.items.forEach((item) => {
            item.style.display = 'none';
        });

        this.items[this.items.length - 1].style.display = 'flex';
    }

    bindTriggers() {
        this.items[this.items.length - 1].addEventListener('click', () => {
            this.items[this.counter].classList.add('animated', 'fadeIn');
            this.items[this.counter].style.display = 'flex';
            this.counter++;

            if (this.counter === this.items.length - 1) {
                this.items[this.items.length - 1].remove();
            }
        });
    }

    render() {
        this.hideAllItems();
        this.bindTriggers();
    }
}