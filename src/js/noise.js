import CssMaker from './cssMaker'
import Rewriter from './rewriter'

export default class Noise {
  constructor() {
    this.rewriter = new Rewriter;
    this.char_class_names = false;
    this.css_maker = new CssMaker;
  }

  call(target) {
    this.rewriter.call(target);
    this.char_class_names = this.rewriter.class_names;
    this.css_maker.call(this.char_class_names);
  }
}
