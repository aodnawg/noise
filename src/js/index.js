import Noise from './noise'

window.noise = function (target ='noise', option = {}) {
  let noise = new Noise;
  noise.call(target, option);
}
