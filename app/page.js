"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const page = () => {
  const [first, setfirst] = useState([])
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
      setfirst(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error);

    }
  }
  useEffect(() => {
    getImages()
  }, [])

  return (
    <div>
       <Link href="/details">Details</Link>
     <hr/>
      page
      {first.map((ele, i) => {
       return <img className='inline-block m-3' key={i} src={ele.download_url} width={200} height={200} />
       
      })}
    </div>
  )
}

export default page