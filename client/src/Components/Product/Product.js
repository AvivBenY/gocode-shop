import React, { useContext } from "react";
import "./Product.css";
import StatesContext from "../../Contexts/StatesContext";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Product = ({ id, title, price, image, qty }) => {
  const { addToCart } = useContext(StatesContext);
  const { removeFromCart } = useContext(StatesContext);
  const product = { id, title, price, image };
  return (
    <div className="product-card">
      <Card>
        <Link className="product-header" to={`/products/${id}`}>
          <CardActionArea>
            <CardMedia
              className="product-image shadow-inset-center"
              component="img"
              height="250"
              image={image}
              alt="product image"
            />
            <CardContent className="product-info">
              <Typography
                gutterBottom
                variant="subtitle1"
                color="black"
                component="div"
              >
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="product-info"
        >
          {price}$
        </Typography>
        <CardActions className="card-actions">
          <Button
            className="add"
            size="large"
            color="primary"
            onClick={() => addToCart({ product })}
          >
            Add To Cart
          </Button>
          {/* {qty > 0 ? (
            <>
              <Typography gutterBottom variant="h6" component="div">
                {qty}
              </Typography>
              <Button
                size="meduim"
                color="primary"
                onClick={() => removeFromCart(id)}
              >
                -
              </Button>
            </>
          ) : (
            <></>
          )} */}
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
