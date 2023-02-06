import React from 'react';
import { spaceNews } from '../utils/apiCalls';


export default function SpaceNews() {
    spaceNews();
    return (
        <div className="top-space-news">
            <h2>Top News Stories</h2>
            <div className="newsDiv">
                <p className="title0"></p>
                <img className="news-img0" />
                <p className="summary0"></p>
                <a className="news-story0" target="_blank"><p className="news-story-link0"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title1"></p>
                <img className="news-img1" />
                <p className="summary1"></p>
                <a className="news-story1" target="_blank"><p className="news-story-link1"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title2"></p>
                <img className="news-img2" />
                <p className="summary2"></p>
                <a className="news-story2" target="_blank"><p className="news-story-link2"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title3"></p>
                <img className="news-img3" />
                <p className="summary3"></p>
                <a className="news-story3" target="_blank"><p className="news-story-link3"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title4"></p>
                <img className="news-img4" />
                <p className="summary4"></p>
                <a className="news-story4" target="_blank"><p className="news-story-link4"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title5"></p>
                <img className="news-img5" />
                <p className="summary5"></p>
                <a className="news-story5" target="_blank"><p className="news-story-link5"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title6"></p>
                <img className="news-img6" />
                <p className="summary6"></p>
                <a className="news-story6" target="_blank"><p className="news-story-link6"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title7"></p>
                <img className="news-img7" />
                <p className="summary7"></p>
                <a className="news-story7" target="_blank"><p className="news-story-link7"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title8"></p>
                <img className="news-img8" />
                <p className="summary8"></p>
                <a className="news-story8" target="_blank"><p className="news-story-link8"></p></a>
            </div>
            <div className="newsDiv">
                <p className="title9"></p>
                <img className="news-img9" />
                <p className="summary9"></p>
                <a className="news-story9" target="_blank"><p className="news-story-link9"></p></a>
            </div>
        </div>
    )
}
