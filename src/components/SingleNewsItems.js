import React from 'react';

// External Imports
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const SingleNewsItems = ({ newsItem }) => {
    return (
        <Link to={`/news/${newsItem.id}`}>
            <Card className="my-2 border-0">
                <CardImg top width="100%" height="200px" src={newsItem.urlToImage} alt={newsItem.title} />
                <CardBody>
                    <CardTitle tag="h6">{newsItem.title}</CardTitle>
                    <CardSubtitle tag="p" className="text-muted">
                        <Moment date={newsItem.publishedAt} format="LLL" />
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    );
}

export default SingleNewsItems;
