import React from 'react';
import { spaceNews } from '../utils/apiCalls';
import "../styles/POTD.css";

export default function Issnews() {
    spaceNews();
    return (
        <div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<p className="title0"></p></p>
                <img className="news-img0" />
                <p>Summary:<span className="summary0"></span></p>
                <a className="news-story0"><p className="news-story-link0"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title1"></span></p>
                <img className="news-img1" />
                <p>Summary:<span className="summary1"></span></p>
                <a className="news-story1"><p className="news-story-link1"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title2"></span></p>
                <img className="news-img2" />
                <p>Summary:<span className="summary2"></span></p>
                <a className="news-story2"><p className="news-story-link2"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title3"></span></p>
                <img className="news-img3" />
                <p>Summary:<span className="summary3"></span></p>
                <a className="news-story3"><p className="news-story-link3"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title4"></span></p>
                <img className="news-img4" />
                <p>Summary:<span className="summary4"></span></p>
                <a className="news-story4"><p className="news-story-link4"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title5"></span></p>
                <img className="news-img5" />
                <p>Summary:<span className="summary5"></span></p>
                <a className="news-story5"><p className="news-story-link5"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title6"></span></p>
                <img className="news-img6" />
                <p>Summary:<span className="summary6"></span></p>
                <a className="news-story6"><p className="news-story-link6"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title7"></span></p>
                <img className="news-img7" />
                <p>Summary:<span className="summary7"></span></p>
                <a className="news-story7"><p className="news-story-link7"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title8"></span></p>
                <img className="news-img8" />
                <p>Summary:<span className="summary8"></span></p>
                <a className="news-story8"><p className="news-story-link8"></p></a>
            </div>
            <div>
                <p>Top News Stories</p>
                <p>Title:<span className="title9"></span></p>
                <img className="news-img9" />
                <p>Summary:<span className="summary9"></span></p>
                <a className="news-story9"><p className="news-story-link9"></p></a>
            </div>
        </div>
    )
}
