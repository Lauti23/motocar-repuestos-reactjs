
const products = [
    {id:1, marca: "honda", modelo: "CRF 300L", precio: 659375, imagen: "assets/honda/crf300l.jpg", descripcion: "Hemos hecho renacer la CRF300L con un chasis ligero, una carrocería más estilizada y mayor potencia y par del motor. Pero, si bien la especificación ha mejorado, la genial fórmula de doble propósito sigue siendo la misma. Las cualidades que hacen que la conducción off-road sea tan buena: proporciones estilizadas, respuesta de aceleración dinámica, conducción ágil y suspensión suave, también hacen que sea maravillosa en la ciudad. La CRF300L anima cualquier día de la semana con un rendimiento agradable y gratificante en todos los aspectos. Y, cuando llega el fin de semana, esta es una motocicleta nacida para explorar.", cantidad: 1},
    {id:2, marca: "honda", modelo: "CRF 250R", precio: 1102960, imagen:"assets/honda/CRF250R.jpg", descripcion:"La competencia nunca descansa, lo que nos parece estupendo, ¿por qué debería hacerlo? Nuestra nueva CRF250R es mucho más ligera y está armada con un nuevo chasis, basculante y suspensión Showa. ¿Y el motor? Aún más potente. Aún más utilizable. ¿Buscas resultados? Esta es la moto que no puede faltar en tu box.", cantidad: 1},
    {id:3, marca: "honda", modelo: "CRF 450R", precio: 1162900, imagen: "assets/honda/CRF450R.jpg", descripcion:"Para que puedas conducir a más velocidad que nunca, el motor está armado con puertos de admisión más anchos, un embudo de aire más largo y un cuerpo del acelerador más pequeño de 44 mm de diámetro que proporciona un flujo de aire de mayor velocidad para crear más torque y potencia a bajas revoluciones. La nueva configuración de ECU y sincronización de válvulas (copiadas de la máquina HRC n.º 243 de Tim Gajser) crean un motor utilizable con HRC Launch Control, HSTC y EMSB para ponerlo completamente a su disposición.", cantidad: 1},
    {id:4, marca: "kawasaki", modelo: "KLX 250L", precio: 548482, imagen: "assets/kawasaki/klx250l.jpg", descripcion: "La Kawasaki KLX250 es una de las opciones trail más puras y versátiles, capaces de circular con gran solvencia tanto en asfalto en el día a día como en salidas off-road por el campo.", cantidad: 1},
    {id:5, marca: "kawasaki", modelo: "KX 250F", precio: 1060990, imagen: "assets/kawasaki/kx250f.jpg", descripcion:"La motocicleta KX250 es la máquina probada en campeonatos, y que construimos para que usted pueda ser el próximo campeón. Sé el próximo héroe. Sé la próxima leyenda. Sea el próximo pionero de una toda una generación de grandeza. Nuevo motor de 4 tiempos de 249 cc, nuevo embrague hidráulico de resorte de disco cónico. Nuevo arranque eléctrico, nuevo marco perimetral de aluminio delgado", cantidad: 1},
    {id:6, marca: "kawasaki", modelo: "KX 450F", precio: 1126936, imagen: "assets/kawasaki/kx450f.jpg", descripcion: "Con más campeonatos de Supercross y Motocross que cualquier otro fabricante, la KX450 representa el buque insignia de la gama KX, construida con el único propósito de dominar la pista. Durante las últimas cuatro décadas, hemos aprendido lo que se necesita para ganar y mantenerse en la cima.", cantidad: 1},
    {id:7, marca: "ktm", modelo: "EXC - F350", precio: 1192380, imagen: "assets/ktm/exc-f350.jpg", descripcion: "Ampliamente apreciada por su agilidad similar a la de una 250 y su potencia similar a la de una 450, la KTM 350 EXC-F se ha convertido en un arma digna de ser tenida en cuenta. Tras ganarse un reconocimiento instantáneo desde su llegada al mercado en 2012, se ha convertido en el modelo líder de la categoría de enduro gracias a su facilidad de uso y competitividad en cualquier tipo de terreno. En pocas palabras, es una carta ganadora.", cantidad: 1},
    {id:8, marca: "ktm", modelo: "SX 125", precio: 1039420, imagen: "assets/ktm/sx125.jpg", descripcion: "Sólo hace falta un apoyo fuerte y rápido en una rodera enfangada para saber que la KTM 125 SX 2023 es una seria competidora en la categoría de 125 cc. No sólo se ha renovado el motor de 2 tiempos con un sistema de inyección de gasolina, sino que toda la motocicleta se beneficia de desarrollos líderes en su clase en todos los aspectos. Con elogios como el de ser líder en innovación de motocross de 2 tiempos en la era moderna, la KTM 125 SX 2023 simplemente arrasa frente al resto de la categoría de 125 cc. Lo único que tienes que hacer es pulsar el botón de arranque, girar el acelerador y dejarte llevar.", cantidad: 1},
    {id:9, marca: "ktm", modelo: "SX 450", precio: 1322352, imagen: "assets/ktm/sx450.jpg", descripcion: "No somos de los que presumen, pero con una vitrina de trofeos a punto de estallar, la KTM 450 SX-F es la personificación de una cazadora de podios. Con 5 títulos de supercross AMA 450 en las últimas 7 temporadas, la KTM 450 SX-F 2023 llega al paddock ya armada con lo aprendido en los anteriores campeonatos y con un arsenal de armas totalmente nuevo. Es el momento de ampliar la sala de trofeos.", cantidad: 1},
    {id:10, marca: "suzuki", modelo: "RM-Z 250", precio: 1001055, imagen: "assets/suzuki/rm-z250.jpg", descripcion: "Prestaciones ganadoras en competición a punto para ti. Un motor de 249 cc con inyección electrónica y un impresionante par motor a bajo y medio régimen y una excitante potencia a altas revoluciones. Una parte ciclo revisada con todo lo aprendido en las carreras. Una imagen agresiva, esbelta y atractiva. La RM-Z250, la perfecta moto de competición para los pilotos de motocross de todo el mundo.", cantidad: 1},
    {id:11, marca: "suzuki", modelo: "RM-Z 450", precio: 1018670, imagen: "assets/suzuki/rm-z450.jpg", descripcion: "La Suzuki RM-Z450 son palabras mayores. La más potente y la más emocionante. Ofrece una entrada y salida de las curvas con precisión y estabilidad gracias a sus amortiguaciones hidráulicas.Toda la potencia con el nuevo refinado de motor de 4 tiempos y el escape que la dotan de un altísimo nivel de prestaciones y la convierten en una máquina a la altura de los campeones.", cantidad: 1},
    {id:12, marca: "suzuki", modelo: "RM-Z 450 2017", precio: 959095, imagen: "assets/suzuki/rm-z4502017.jpg", descripcion: "La Suzuki RM-Z450 2017 recibe ligeras mejoras para seguir siendo uno de los nombres más conocidos del mundo del motocross.", cantidad: 1},
    {id:13, marca: "yamaha", modelo: "WR 450", precio: 1198870, imagen: "assets/yamaha/wr450f.jpg", descripcion: "Este modelo representa el encuentro entre tecnología y deseo de superación. Posee las tecnologías más avanzadas jamás desarrolladas en una Yamaha de enduro y el resultado es una motocicleta de gran desempeño y tecnológicamente innovadora. Gracias a sus características y óptimo rendimiento en cualquier terreno ofrece tanto a pilotos experimentados de rally como a usuarios ocasionales, una experiencia única. La versión 2018 actualiza su imagen y se acerca a la estética de competición de la familia YZ.", cantidad: 1},
    {id:14, marca: "yamaha", modelo: "YZ 250", precio: 995060, imagen: "assets/yamaha/yz250.jpg", descripcion: "La renovada YZ250 ofrece lo mejor en diseño y confiabilidad en modelos 2 tiempos de Cross. Su historia y las múltiples victorias en pista la convierten en un referente absoluto. Su capacidad de respuesta y el destacado rendimiento de motor, junto con el diseño compacto y ligero de chasis, convierten a la YZ250 en una verdadera motocicleta ganadora.", cantidad: 1},
    {id:15, marca: "yamaha", modelo: "YZ 450", precio: 1155095, imagen: "assets/yamaha/yz450f.jpg", descripcion: "Con un innovador diseño de motor, el nuevo modelo YZ450F está listo para cambiar por completo los niveles de competición. Con la posibilidad de configurar el mapeo de inyección electrónica a través de la App Yamaha Power Tuning, este modelo permite ajustar su rendimiento a cualquier circuito y condiciones de manejo. Además, gracias a su confiable sistema de suspensión y el sistema electrónico de control de salida en largada, la YZ450F se convierte en el candidato perfecto a obtener la victoria en cualquier carrera.", cantidad: 1},
    
]

export default products