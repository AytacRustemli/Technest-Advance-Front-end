import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([])

  const getDetail = async () => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(res => res.json())
      .then(respons => setDetail(respons))
  }


  useEffect(() => {
    getDetail();
  }, [])

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-6">
          <img className='img-fluid' style={{ height: 400 }} src={detail.image} alt={detail.title} />
        </div>
        <div className="col-lg-6">
          <h3>Məhsulun adı : {detail.title}</h3>
          <p><b>Məhsulun təsviri :</b> {detail.description}</p>
          <p><b>Məhsulun qiyməti :</b> {detail.price}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default ProductDetail