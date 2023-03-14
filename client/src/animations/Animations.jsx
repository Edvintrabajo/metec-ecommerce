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
  opacidad -= 0.003;
  document.getElementById('circle-container').style.opacity = opacidad;
  if (opacidad <= 0) {
    clearInterval(intervalo);
    document.getElementById('circle-container').style.display = 'none';
  }
}, 10);