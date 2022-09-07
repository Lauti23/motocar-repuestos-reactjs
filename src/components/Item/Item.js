import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({data}) => {

    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img" image={data.imagen}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.marca}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.modelo}
                </Typography>
                <Typography>
                    {data.precio}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                COMPRAR
            </Button>
        </CardActions>
    </Card>
    );
}

export default Item
