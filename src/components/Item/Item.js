import * as React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({data}) => {

    return (
        <>
            
            <div className='card'>
                <img src={data.imagen} alt='imagenMoto'></img>
                <div className='cardContent'>
                    <p className='marca'>{data.marca}</p>
                    <p className='modelo'>{data.modelo}</p>
                    <p className='precio'>${data.precio}</p>
                    <Link className='link' to={`/detalle/${data.id}`}>
                        <button className='btnDetalle'>DETALLE</button>
                    </Link> 
                </div>                       
            </div>
        </>
    // <Card className='card'>
    //     <CardActionArea>
    //         <CardMedia
    //             component="img" image={data.imagen}
    //         />
    //         <CardContent>
    //             <Typography className='marca' gutterBottom variant="h5" component="div">
    //                 {data.marca}
    //             </Typography>
    //             <Typography className='modelo' variant="body2" color="text.secondary">
    //                 {data.modelo}
    //             </Typography>
    //             <Typography className='precio'>
    //                 ${data.precio} 
    //             </Typography>
    //         </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //         <Link to={`/detalle/${data.id}`}>
    //             <Button className='botonDetalle' size="small" color="primary">
    //                 DETALLE
    //             </Button>
    //         </Link>
    //     </CardActions>
    // </Card>
    );
}

export default Item
