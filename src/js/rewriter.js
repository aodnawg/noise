export default class Rewriter {

  constructor(target = 'noise') {
    this.text     = document.getElementsByClassName(target)[0].innerText;
    this.class_names = new Array;
    this.new_text = this.make_new_text();
  }

  call() {
    this.clear();
    this.new_text.forEach(s =>
      document.getElementsByClassName('noise')[0].appendChild(s)
    );
  }

  clear() {
    document.getElementsByClassName('noise')[0].innerText = '';
  }

  make_new_text() {
    let new_text = [];
    this.to_array(this.text).forEach((s, i) => {
      let char = document.createTextNode(s);
      let node = this.make_span_tag(`char_${i}`);
      node.appendChild(char);
      new_text.push(node);
    });
    return new_text;
  }

  make_span_tag(class_name) {
    let node = document.createElement('span');
    if (class_name) {
      node.setAttribute('class', `${class_name} noise_char`); //XXX
      this.class_names.push(class_name);
    }
    return node;
  }

  to_array(text) { // 空白を含めてsplit()でarrayを作成出来ない
    let array = [];
    for(let i=0; i < text.length; i++) {
      let char = text[i] == ' ' ? '\u00a0' : text[i];
      array.push(char)
    }
    return array;
  }
}
