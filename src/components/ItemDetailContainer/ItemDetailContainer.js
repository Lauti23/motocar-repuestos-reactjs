import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const moto = {id:1, marca: "Honda", modelo: "CRF 300L", precio: 659375, imagen: "../assets/imgs/honda/crf300l.jpg", descripcion: "Hemos hecho renacer la CRF300L con un chasis ligero, una carrocería más estilizada y mayor potencia y par del motor. Pero, si bien la especificación ha mejorado, la genial fórmula de doble propósito sigue siendo la misma. Las cualidades que hacen que la conducción off-road sea tan buena: proporciones estilizadas, respuesta de aceleración dinámica, conducción ágil y suspensión suave, también hacen que sea maravillosa en la ciudad. La CRF300L anima cualquier día de la semana con un rendimiento agradable y gratificante en todos los aspectos. Y, cuando llega el fin de semana, esta es una motocicleta nacida para explorar.", cantidad: 1}
    useEffect(() => {
        const getItem = new Promise (resolve => {
            setTimeout(() => {
                resolve(moto)
            }, 2000)
        })

        getItem.then(res => setItem(res))
    })
  return (
    <ItemDetail data={item} />
  )
}

export default ItemDetailContainer