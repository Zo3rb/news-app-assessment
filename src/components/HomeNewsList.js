import React, { useEffect, Fragment } from 'react';

// External Imports
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

// Internal Imports
import { fetchNews } from '../redux/actions';
import SingleNewsItem from './SingleNewsItems';
import Spinner from './Spinner';

const HomeNewsList = ({ fetchNews, news }) => {

    // Fetching The News Once The Component Gets Mounted
    useEffect(() => {
        fetchNews();
        // Cleaning Up Incase unmount Before Fetching
        return () => {
            fetchNews();
        }
    }, []);

    // Creating Render Helper Method
    const renderHomeNews = (news) => {
        if (news.length) {
            return news.slice(0, 8).map(newsItem => {
                return (
                    <div className="col-xs-12 offset-xs-0 col-sm-10 offset-sm-1 col-md-4 offset-md-0 col-lg-3" key={newsItem.id}>
                        <SingleNewsItem newsItem={newsItem} />
                    </div>
                )
            })
        }
        return <Spinner />;
    };

    return (
        <Fragment>
            <div className="d-flex justify-content-space-between">
                <p className="font-weight-bold mr-auto">Recently Added</p>
                <Link to="/news">
                    <Button className="px-3" color="primary" size="sm">Show All</Button>
                </Link>
            </div>
            <div className="row py-3">
                {renderHomeNews(news.data)}
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        news: state.news
    }
};

export default connect(mapStateToProps, { fetchNews })(HomeNewsList);
