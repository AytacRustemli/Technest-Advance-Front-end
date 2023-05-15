import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from 'src/redux/store';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: detail, isLoading, isError } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (!isLoading && !isError && detail) {
      console.log(detail);
    }
  }, [detail, isLoading, isError]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Error occurred while fetching product details.</div>;
  }

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {detail && (
            <img src={detail.image} alt={detail.title} style={{ height: 400, width: '100%' }} />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {detail && (
            <>
              <Typography variant="h4" gutterBottom>
                Məhsulun adı: {detail.title}
              </Typography>
              <Typography variant="body1">
                <b>Məhsulun təsviri:</b> {detail.description}
              </Typography>
              <Typography variant="body1">
                <b>Məhsulun qiyməti:</b> {detail.price}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
