import React from 'react'

const DetailsPage = ({match}) => (
    <div>
        <h3>ID: {match.params.postId}</h3>
    </div>
);


export default DetailsPage;
