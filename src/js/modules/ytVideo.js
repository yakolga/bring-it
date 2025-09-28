export default class YtVideo {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '360',
            width: '640',
            videoId: url,
        });

        this.overlay.style.display = 'flex';
    }

    closePlayer() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });

        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.overlay.style.display = 'none';
                this.player.stopVideo();
            }
        });
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    this.url = btn.getAttribute('data-url'); 
                    this.createPlayer(this.url);
                }
            });
        });
    }

    play() {
        const tag = document.createElement('script');
        tag.id = 'iframe-demo';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.closePlayer();
    }
}