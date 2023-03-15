import '../App.css';
import { FaReact } from 'react-icons/fa'

export function LoadCircle(){
  return (
    <div id='circle-container'>
      <div id="circle">
        <FaReact id='fa'/>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

var opacidad = 1;
  var intervalo = setInterval(function() {
    if (document.getElementById('circle-container') !== null) {
      document.getElementById('circle-container').style.opacity = opacidad;
      if (opacidad >= 0.8) {
        opacidad -= 0.001;
      } else {
        opacidad -= 0.007;
      }
      if (opacidad <= 0) {
        clearInterval(intervalo);
        document.getElementById('circle-container').style.display = 'none';
        document.getElementById('loaded-index').style.display = 'block';
      }
    }
  }, 10);
