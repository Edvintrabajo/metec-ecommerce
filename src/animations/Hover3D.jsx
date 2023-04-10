export function hover3D(id){
    // Para est efecto se recomienda usar width y height estaticos,
    // y un box shadow para dar la sensacion de profundidad
      console.log("Cargando efectos ...")
      
      const el = document.getElementById(id)
      const height = el.clientHeight
      const width = el.clientWidth
  
      el.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e
  
        const yRotation = (
          (offsetX - width / 2) / width
        ) * 20
  
        const xRotation = (
          (offsetY - height / 2) / height
        ) * 20
  
        const string = `
        perspective(500px) 
        rotateX(${xRotation}deg) 
        rotateY(${yRotation}deg)`
  
        el.style.transform = string
      })
  
      el.addEventListener('mouseout', () => {
        el.style.transform = `
        perspective(500px)
        scale(1) 
        rotateX(0deg) 
        rotateY(0deg)`
      })
  }
  