export class TxtType {
    private toRotate: string[];
    private el: HTMLElement;
    private loopNum: number;
    private period: number;
    private txt: string = '';
    private isDeleting: boolean = false;

    constructor(el: HTMLElement, toRotate: string[], period?: number) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = period || 2000;

        this.tick(); // Start the typing effect
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}
