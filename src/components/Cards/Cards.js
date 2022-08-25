import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardComponent = ({brand, model, price, img}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="235"
                    image={img}
                    alt={model}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
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

export default CardComponent