import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

export default function Home1() {
    const [articles, setArticle] = useState([])

    async function getAllData() {
        let res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=fc4e457d3ed04906bedb5c22daa200ff`)

        let data = await res.json();
        console.log(data)
        console.log(data.articles)

        setArticle(data.articles)
    }
    useEffect(() => {
        getAllData()
    }, [])

    const [heading, setHeading] = useState([])

    async function getHeading() {
        let api = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fc4e457d3ed04906bedb5c22daa200ff')
        let result = await api.json();
        console.log(result)
        console.log(result.articles)

        setHeading(result.articles)
    }
    useEffect(() => {
        getHeading()
    }, [])


    // ******* Pagination code starts ********

    const [currentPage, setcurrentPage] = useState(1)
    let itemPerPage = 12
    let lastIndex = currentPage * itemPerPage
    let firstIndex = lastIndex - itemPerPage
    let sliceArr = articles.slice(firstIndex, lastIndex)
    console.log(sliceArr)

    let noOfButton = Math.ceil(articles.length / itemPerPage)
    console.log(noOfButton)

    const handleNext = () => {
        if (currentPage < noOfButton) {
            setcurrentPage(currentPage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
        }
    }

    let btnArr = []
    for (let i = 1; i <= noOfButton; i++) {
        btnArr.push(i)
    }
    console.log(btnArr)

    const handleNumber = (ans) => {
        console.log(ans)
        setcurrentPage(ans)
    }
    // ******* Pagination code ends ********

    return (
        <div>
            <div className='flex'>
                <div className='grid grid-cols-12 gap-2 bg-black p-5 sticky mt-16'>
                    {
                        sliceArr.map((ele) => {
                            return (
                                <div className="relative h-max lg:col-span-4 md:col-span-6 col-span-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img style={{ width: '450px', height: '250px', padding: '20px', borderRadius: '10%' }} src={ele.urlToImage} alt />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-11">{ele.title}</h5>

                                        <Link to={ele.url} style={{ marginTop: '150px' }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>

                <div className='bg-amber-600 p-5' style={{ marginTop: '45px', zIndex: '-1' }}>
                    <h3 className='bg-amber-600 text-center font-bold text-2xl pb-5 fixed z-30' style={{ borderBottom: '2px solid black', width: '315px' }}>Top Heading</h3>
                    <div className='mt-20' id='heading'>
                        {
                            heading.map((ele) => {
                                return <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img src={ele.urlToImage} alt="" />
                                        {/* <img style={{ width: '300px', height: '250px', padding: '20px', paddingLeft: '30px', borderRadius: '10%' }} src={ele.urlToImage} alt /> */}
                                        <div className="p-5 my-0">
                                            <p className="mb-2 text-gray-900 dark:text-white ">{ele.title}</p>
                                        </div>
                                    </div>
                                
                            })
                        }
                    </div>
                </div>
               
              
            </div>

            {/* <nav aria-label="Page navigation example" className='mx-auto my-4'>
                <ul className="flex flex-wrap text-wrap justify-center -space-x-px text-base h-10">
                    <li onClick={handlePrevious}>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-black border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    {
                        btnArr.map((ele) => {
                            return (
                                <li onClick={() => handleNumber(ele)}>
                                    <a href="#" className={ele === currentPage ? 'flex items-center justify-center px-4 h-10 leading-tight text-black bg-blue-400 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' : "flex items-center justify-center px-4 h-10 leading-tight text-white bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{ele}</a>
                                </li>
                            )
                        })
                    }
                    <li onClick={handleNext}>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-black border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav> */}

        </div>
    )
}