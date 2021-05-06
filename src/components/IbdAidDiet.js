import React, { useState, useEffect } from 'react';
import { Header } from "./common";
import Article from './Article';
import './Reddit.css';

export default function IbdAidDiet() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');

    useEffect(() => {
        fetch("https://www.reddit.com/r/IBDAID/.json").then(res => {
            if (res.status !== 200) {
                console.log("Error");
                return;
            }
            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            })
        })
    }, [subreddit]);

    return (
        <div>
            <div class="text-center" ><h2 > UC Center</h2></div>
            <Header />
            <p>*Information taken from r/ibdaid Subreddit</p>
            <hr></hr>
            <div class= "text-left">
                {
                    (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
                }
            </div>

        </div>
    )
} 
