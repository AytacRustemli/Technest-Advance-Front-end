import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useGetProductsQuery } from 'src/redux/store';
import {Product} from '../../Interface/Product'


const Products: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  useEffect(() => {
    if (isError) {
      console.log('Error occurred while fetching products.');
    }
  }, [isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  return (
    <div id='products'>
      <div className="container">
        <div className="row">
          {products.map((product : Product) => (
            <div className="col-lg-4 my-3" key={product.id}>
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea className='card-body'>
                  <Link to={`/product/${product.id}`}>
                    <CardMedia style={{ width: "100%" }} component="img" height="300" image={product.image} alt={product.title} />
                  </Link>

                  <CardContent sx={{ height: 160 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 20 }}>
                      {product.title}
                    </Typography>
                    <Typography>
                      <div className="card-footer">
                        <Link to={"/product/" + product.id}>
                          <button className='btn btn-outline-success w-100'>Ətraflı bax</button>
                        </Link>
                      </div>
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
