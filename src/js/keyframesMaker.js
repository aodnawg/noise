import random from './random'

export default class KeyframesMaker {
  constructor() { }

  get_pos() {
    let min = -3;
    let max = 3;
    if (random(1, 10) == 1) { return  [random(min, max), random(-200, 200)].map( x => x + 'px'); } //XXX
    return [random(min, max), random(min, max)].map( x => x + 'px');
  }

  make_translate(){
    return `translate(${ this.get_pos().join(', ') })`;
  }

  get_rotate() {
    let min = -5;
    let max = 5;
    return random(min, max) + 'deg';
  }

  make_rotate(){
    return `rotate(${ this.get_rotate()})`;
  }

  get_scale() {
    let min = 0;
    let max = 15;
    if (random(1, 100) == 1) { return random(min, 200) / 10; } //XXX
    return random(min, max) / 10;
  }

  make_scale(){
    return `scale(${ this.get_scale()})`;
  }

  make_transform(){
    return `transform: ${this.make_translate()} ${this.make_rotate()} ${this.make_scale()}`;
  }

  make_opacity(){
    return `opacity: ${random(0,100) / 100}`
  }

  make_keyframes(name, steps) {
    let css, css_child = [];

    for(let i = 0; i< steps; i++){
      let percentage = Math.floor(100 / steps * i) + '%';
      let translate = i == 0 ? 'transform: translate(0, 0)' : this.make_transform(); //XXX
      let css = `${percentage} { ${ translate }; ${ this.make_opacity() } }`
      css_child.push(css)
    }

    css = `
    @keyframes ${name}{
      ${css_child.join('\n')}
    }
    `;

    return css;
  }
}
