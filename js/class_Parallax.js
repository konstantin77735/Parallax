class Parallax {
    constructor(imgSelector, settings) {
        if (typeof settings === 'undefined') { //если пользователь не отправил объект настроек
            settings = false //
        }
        this.img = document.querySelector(imgSelector);
        this.coeff = settings.coeff || 1.5;
        this.transitionTime = settings.transitionTime || 2000;
        this.init();

    }
    init() {
        window.addEventListener('scroll', () => {

            let posY = document.documentElement.scrollTop / this.coeff; //crollTop измеряет дистанцию от верха элемента до верхней точки видимого контента. Когда контент элемента не создаёт вертикальную прокрутку, его scrollTop = 0.
            this.img.style.top = `${-posY}px`;

        });

    }
}
