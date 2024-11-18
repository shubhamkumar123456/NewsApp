import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopHeadlines = () => {
    const [Allnews, setAllnews] = useState([]);
    console.log(Allnews)

   async function getAllNews (){
        try {
            let res = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=8b230920155e4f32a375ec654ff57d9a')
            setAllnews(res.data.articles)
        console.log(res)
        } catch (error) {
                console.log(error.message)
        }
        // setAllnews(res)
        // let data= await res.json()
    }

    useEffect(()=>{
        getAllNews()
    },[])
  return (
    <div>
        {
            Allnews.map((news)=>{
                return news.urlToImage &&<Link to={news.url} className='border flex  flex-col justify-between py-0 px-3 border-spacing-2 border-gray-400 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 '>
                    <img src={news.urlToImage} alt="" />
                    <h1 className='font-bold my-2'>{news.title}</h1>
                  
                    <button className='my-2 text-white hover:text-black bg-emerald-900 px-4 py-2 rounded-md hover:bg-emerald-500'>View Full news</button>
                </Link>
            })
        }
    </div>
  )
}

export default TopHeadlines
