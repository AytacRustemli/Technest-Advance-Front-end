import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Product | null>(null);

  const getDetail = async () => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(res => res.json())
      .then(respons => setDetail(respons))
  }

  useEffect(() => {
    getDetail();
  },)

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-6">
          {
            detail && <img className='img-fluid' style={{ height: 400 }} src={detail.image} alt={detail.title} />
          }
        </div>
        <div className="col-lg-6">
          {
            detail && (
              <>
                <h3>Məhsulun adı : {detail.title}</h3>
                <p><b>Məhsulun təsviri :</b> {detail.description}</p>
                <p><b>Məhsulun qiyməti :</b> {detail.price}</p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail