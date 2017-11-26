import CssMaker from './cssMaker'
import Rewriter from './rewriter'

export default class Noise {
  constructor() {
    this.rewriter = new Rewriter;
    this.css_maker = new CssMaker;
    this.option_default = {
      target: 'noise',
      hover: true,
    };
    this.option;
  }

  call(target, option = {}) {
    this.option = Object.assign(this.option_default, option);

    this.rewriter.call(target, this.option);
    this.css_maker.call(target, this.option, this.rewriter.class_names);
  }
}
