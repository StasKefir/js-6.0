class Options {
    constructor(width, height, bg, fontSize, textAlign) {
        this.width=  width;
        this.height = height;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign= textAlign;
    }
    addDiv() {
     document.body.innerHTML += "<div class='block'>Hello, my friend</div>";
     let block = document.querySelector('.block');
        block.style.cssText = `width: ${this.width}; \
        height: ${this.height};\
        background-color: ${this.bg};\
        font-size: ${this.fontSize};\
        text-align: ${this.textAlign};\
        `;
    }
}
let colorStyle =new Options("300px", "200px", "green", "14px", "center");

colorStyle.addDiv();

