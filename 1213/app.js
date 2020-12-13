import {
  Ball
} from './ball.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    // 캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 DOMString
    // 2d, webgl(3d version1), webgl2(3d version2), bitmaprenderer(비트맵)
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas)

    // resize 이벤트는 document view의 크기가 변경될 때 발생합니다.
    // 이전 버전에서는 모든 HTML요소에 resize 이벤트 핸들러를 등록할 수 있었지만,
    // resize 이벤트는 오직 window객체에서만 발생함
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this))
    
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

// window.onload는 자바스크립트에서 페이지가 로드되면 자동으로 실행되는 전역 콜백함수.
// 페이지가 준비된 상황(html, css가 엮여져 다 그려진 상황일듯?) 이후에 발동하도록 함
window.onload = () => {
  new App();
};