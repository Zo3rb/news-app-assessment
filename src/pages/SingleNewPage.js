import React, { useEffect } from 'react';

// External Imports
import { connect } from 'react-redux';
import Moment from 'react-moment';

// Internal Imports
import { fetchOneOnly, clearNewsItem } from '../redux/actions';
import Spinner from '../components/Spinner';

const SingleNewPage = ({ newsItem, fetchOneOnly, clearNewsItem, match }) => {

    // Fetching The Single News Item Once The Component Gets Mounted (Isolated Component)
    // Isolated Component => if The User Hard Refreshed The Page or Added The Link Manually
    useEffect(() => {
        // Clear The Latest Fetched News First
        clearNewsItem();
        // Then Fetch The Existing Clicked
        fetchOneOnly(match.params.id);
        return () => {
            // Cleaning Up
            fetchOneOnly(match.params.id);
        }
    }, []);

    // Creating Render Helper Method
    const renderNewsItem = (newsItem) => {
        if (newsItem) {
            return (
                <div className="col-sm-10 offset-sm-1">
                    <img className="w-100 h-auto mt-3" src={newsItem.urlToImage} alt={newsItem.title} />
                    <h1 className="h2 my-2 text-left" style={{ color: "#15a5ec" }}>{newsItem.title}</h1>
                    <p className="font-weight-bold text-uppercase">
                        By Stephen Granger - <Moment date={newsItem.publishedAt} format="LL" /> - 100 Comments
                    </p>
                    <p className="text-muted">{newsItem.content}</p>
                </div>
            )
        }
        return <Spinner />;
    };

    return (
        <div className="container">
            <div className="row py-5">
                {renderNewsItem(newsItem)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem
    }
};

export default connect(mapStateToProps, { fetchOneOnly, clearNewsItem })(SingleNewPage);
