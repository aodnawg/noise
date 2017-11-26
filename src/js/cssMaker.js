import KeyframesMaker from './keyframesMaker'

export default class CssMaker extends KeyframesMaker {
  constructor(){
    super();
    this.char_class_names;
    this.target;
  }

  call(target, char_class_names) {
    this.target = target;
    this.char_class_names = char_class_names;
    let css = this.init_css_tag();
    css.appendChild(document.createTextNode(this.generate_css_content()));
    document.getElementsByTagName('head')[0].appendChild(css);
  }

  generate_css_content() {
    let csses = new Array;
    csses.push(this.make_common_char_css());
    this.char_class_names.forEach(class_name => {
      let keyframes_name = `${class_name}_anime`
      let keyframes = this.make_keyframes(keyframes_name, 20); //XXX
      csses.push(keyframes)
      csses.push(`.${this.target}:hover .${class_name} { animation: ${keyframes_name} 1s infinite; }`)

    });
    return csses.join('\n');
  }

  make_common_char_css() {
    return `.noise_char { display: inline-block; }`;
  }

  init_css_tag() {
    let css = document.createElement('style');
    css.media = 'screen';
    css.type = 'text/css';
    return css;
  }
}
