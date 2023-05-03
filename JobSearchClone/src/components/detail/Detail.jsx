import React from 'react';
import { useGetPostByIdQuery } from '../../api';

const Detail = ({ jobId }) => {
    const { data } = useGetPostByIdQuery(jobId);

    if (!data) return null;

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.company}</p>
            <p>{data.location}</p>
            <p>{data.description}</p>
        </div>
    );
}

export default Detail;
