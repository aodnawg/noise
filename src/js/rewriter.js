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

  make_span_tag(class_name) {
    let node = document.createElement('span');
    if (class_name) {
      node.setAttribute('class', `${class_name} noise_char`); //XXX
      this.class_names.push(class_name);
    }
    return node;
  }

  make_new_text() {
    let new_text = [];
    this.text.split('').forEach((s, i) => {
      let char = document.createTextNode(s);
      let node = this.make_span_tag(`char_${i}`);
      node.appendChild(char);
      new_text.push(node);
    });
    return new_text;
  }

  clear() {
    document.getElementsByClassName('noise')[0].innerText = '';
  }
}
