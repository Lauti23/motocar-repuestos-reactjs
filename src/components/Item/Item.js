import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({data}) => {

    return (
    <Card className='card'>
        <CardActionArea>
            <CardMedia
                component="img" image={data.imagen}
            />
            <CardContent>
                <Typography className='marca' gutterBottom variant="h5" component="div">
                    {data.marca}
                </Typography>
                <Typography className='modelo' variant="body2" color="text.secondary">
                    {data.modelo}
                </Typography>
                <Typography className='precio'>
                    ${data.precio} 
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Link to={`/detalle/${data.id}`}>
                <Button className='botonDetalle' size="small" color="primary">
                    DETALLE
                </Button>
            </Link>
        </CardActions>
    </Card>
    );
}

export default Item
