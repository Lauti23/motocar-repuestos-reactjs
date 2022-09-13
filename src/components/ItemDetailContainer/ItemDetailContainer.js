import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const product = {id:15, marca: "Yamaha", modelo: "YZ 450", precio: 1155095, imagen: "assets/yamaha/yz450f.jpg", descripcion: "Con un innovador diseño de motor, el nuevo modelo YZ450F está listo para cambiar por completo los niveles de competición. Con la posibilidad de configurar el mapeo de inyección electrónica a través de la App Yamaha Power Tuning, este modelo permite ajustar su rendimiento a cualquier circuito y condiciones de manejo. Además, gracias a su confiable sistema de suspensión y el sistema electrónico de control de salida en largada, la YZ450F se convierte en el candidato perfecto a obtener la victoria en cualquier carrera.", cantidad: 1}
  
  const [data, setData] = useState({})
  
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(product)
      }, 1500)
    })

    getData.then(res => setData(res))
  }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer