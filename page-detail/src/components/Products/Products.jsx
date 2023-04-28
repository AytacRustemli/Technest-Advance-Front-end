import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setVisibleProducts(data.slice(0, 6));
      });
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop + clientHeight === scrollHeight) {
      const startIndex = visibleProducts.length;
      const endIndex = startIndex + 6;
      setVisibleProducts([...visibleProducts, ...products.slice(startIndex, endIndex)]);
    }
  };

  return (
    <div className="container">
      <div onScroll={handleScroll} style={{ height: "620px", overflow: "auto" }}>
        <div className="container">
          <div className="row">
            {visibleProducts.map((product) => (
              <div key={product.id} className='col-lg-4 my-2'>
                <div className="card" style={{ height: 400 }}>
                  <div className="card-body text-center">
                    <img className='img-fluid' style={{ height: 200 }} src={product.image} alt={product.title} />
                    <h5>{product.title}</h5>
                  </div>
                  <div className="card-footer">
                    <Link to={"/product/" + product.id}>
                      <button className='btn btn-outline-success w-100'>Ətraflı bax</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div> 
    </div>
  );
}


export default Products