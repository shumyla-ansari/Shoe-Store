import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 260,
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 10,
    margin: 10,
  },

  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function Men() {
  const classes = useStyles();

  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={8}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {products.map((product) => (
            <Card className={classes.root}>
              <div className='card' key={product._id}>
                <Link to={`/men/${product._id}`}>
                  <CardMedia
                    className={classes.media}
                    image={product.images[0]}
                    title={product.title}
                    alt=''
                  />
                </Link>
                <div className='box'>
                  <CardContent title={product.title}>
                    <Link to={`/men/${product._id}`}>{product.title}</Link>

                    <p>{"Men's Shoe"}</p>
                    <h4>£ {product.price}</h4>
                  </CardContent>
                  <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='share'>
                    <AddShoppingCartIcon onClick={() => addCart(product._id)}>
                      Add to cart
                    </AddShoppingCartIcon>
                  </IconButton>
                  {/* <button onClick={() => addCart(product._id)}>
                            Add to cart
                        </button> */}
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Men;
