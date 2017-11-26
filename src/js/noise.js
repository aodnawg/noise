import CssMaker from './cssMaker'
import Rewriter from './rewriter'

export default class Noise {
  constructor() {
    this.rewriter = new Rewriter;
    this.css_maker = new CssMaker;
  }

  call(target) {
    this.rewriter.call(target);
    this.css_maker.call(target, this.rewriter.class_names);
  }
}
