export default class Accordion {
    constructor(trigger, message) {
        this.btns = document.querySelectorAll(trigger);
        this.msgs = document.querySelector(message);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.msgs.classList.toggle('msg');
                this.msgs.style.marginTop = '20px';
            });
        });
    }

    init() {
        this.bindTriggers();
    }
}