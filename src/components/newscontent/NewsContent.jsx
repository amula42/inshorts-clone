import { Container } from '@mui/material';
import React from 'react';
import NewsCard from '../newscard/NewsCard';
import '../newscontent/NewsContent.css';

const NewsContent = ({loadMore,setLoadMore,newsResults}) => {
    return (
        <>
            <Container maxWidth="md">
                <div className="content">
                    <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use
                        <a href="https://inshorts.com/mobile" target="__blank" style={{color:'white',textDecoration:'none',fontWeight: 500}}> inshorts </a>
                        app on your smartphone
                    </span>
                    <img
                        alt="app_store"
                        height="80%"
                        src="/assets/appstore.png"
                    />
                    <img
                        alt="play_store"
                        height="80%"
                        src="/assets/playstore.png"
                    />
                    </div>
                    <NewsCard />
                    {loadMore <= newsResults && (
                        <>
                            <hr />
                            <button
                            className="loadMore"
                            onClick={() => setLoadMore(loadMore + 20)}
                            >
                            Load More
                            </button>
                        </>
                    )}
                </div>
            </Container>
        </>
    )
}

export default NewsContent
