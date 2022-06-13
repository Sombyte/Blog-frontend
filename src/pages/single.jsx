import React from 'react'
import './single.css'
import Sidebar from "../component/sidebar"
import SinglePost from '../component/singlePost'
export default function single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
