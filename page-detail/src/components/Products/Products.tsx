import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setVisibleProducts(data.slice(0, 6));
      });
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, offsetHeight } = e.currentTarget;
    if (scrollTop + clientHeight === offsetHeight) {
      const startIndex = visibleProducts.length;
      const endIndex = startIndex + 6;
      setVisibleProducts([...visibleProducts, ...products.slice(startIndex, endIndex)]);
    }
  };
  
  return (
    <div onScroll={handleScroll} style={{ height: "620px", overflow: "auto" }}>
      <div className="container">
        <div className="row">
          {visibleProducts.map((product) => (
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
