import React, { Fragment, useEffect, useState } from 'react';

// External Imports
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

// Internal Imports
import { fetchNews } from '../redux/actions';
import Spinner from '../components/Spinner';
import SingleNewsItem from '../components/SingleNewsItems';

const AllNewsPage = ({ fetchNews, news }) => {

    // Creating Limit State to Use With (Prefetching / Infinite Scrolling)
    const [visibleNews, setVisibleNews] = useState(8);

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
            return news.slice(0, visibleNews).map(newsItem => {
                return (
                    <div className="col-xs-12 offset-xs-0 col-sm-10 offset-sm-1 col-md-4 offset-md-0 col-lg-3" key={newsItem.id}>
                        <SingleNewsItem newsItem={newsItem} />
                    </div>
                )
            })
        }
        return <Spinner />;
    };

    // Creating The Fetch More Method
    const increaseVisibleNews = () => {
        setVisibleNews(prevState => prevState + 8);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-space-between">
                <p className="font-weight-bold mr-auto">Recently Added</p>
            </div>
            <div className="row py-3">
                {renderHomeNews(news.data)}
            </div>
            {
                news.data.length > visibleNews
                    ?
                    <Button
                        className="mx-auto mb-3 d-block px-3"
                        size="sm"
                        color="secondary"
                        onClick={increaseVisibleNews}
                    >
                        Load More
                    </Button>
                    :
                    <p className="text-center text-muted">No More to Show</p>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        news: state.news
    }
};

export default connect(mapStateToProps, { fetchNews })(AllNewsPage);
