import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Newscomponent from '../components/Newscomponent';
import TopHeadlines from '../components/TopHeadlines';
import SearchContext from '../context/SearchContext';

const Home = () => {
    let ctx = useContext(SearchContext)
    console.log(ctx.search)
    const [Allnews, setAllnews] = useState([]);
    console.log(Allnews)
   async function getAllNews (){
        let res = await axios.get(`https://newsapi.org/v2/everything?q=${ctx.search?ctx.search:'world'}&apiKey=8b230920155e4f32a375ec654ff57d9a`)

        console.log(res.data.articles)
        setAllnews(res.data.articles)
        // let data= await res.json()
    }

    useEffect(()=>{
        getAllNews()
    },[ctx.search])
  return (
    <div className='px-5 grid grid-cols-12 gap-3'>
      {/* <h1 className='bg-red-300'>This is home page</h1> */}
        <div className=' px-5 sm:col-span-9 col-span-12'>
        <Newscomponent Allnews={Allnews}/>
        </div>
        <div className='bg-red-300 col-span-3 md:w-auto w-[250px] sm:block hidden  relative overflow-hidden'>
          <h1 className='absolute top-0 left-0 bg-black text-white w-full p-3 text-center font-bold z-10'>Top HeadLines</h1>
          <div className='topHeadlines absolute'>
          
           <TopHeadlines/>
          </div>
        </div>
    </div>
  )
}

export default Home
