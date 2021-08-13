import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import { SettingsApplicationsRounded } from '@material-ui/icons';
//import { useState } from "react";
import { useStyles } from './App';

export function Kart({price, rating, productImage, product, offerPrice, cart, setCart}) {
  const classes = useStyles();
  //const [cart, setCart] = useState(0);
  
  const incrementCart = () => setCart(cart + 1);
  
  return (
    <div className={'cart-list'}>
      <Card className={classes.root}>

        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={productImage}
            title="Product Image" />
          <CardContent style={{ height: '8rem' }}>
            <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: '700' }}>
              {product}
            </Typography>
            <Typography>{offerPrice}</Typography>
            <Typography style={{ textDecorationLine: 'line-through' }}>{price}</Typography>
            <Typography>{rating}</Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button style={{ margin: '8px', alignItems: 'center' }} onClick={incrementCart} variant="outlined" size="medium">
            Add to Cart
      </Button>
        </CardActions>

      </Card>
    </div>

  );

}
