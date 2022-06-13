import React from 'react';
import Post from './post';
import './posts.css';

export default function Posts() {
    return (
        <div className='posts'>
            <Post img="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <Post img="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3293148.jpg&fm=jpg" />
            <Post img="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?cs=srgb&dl=pexels-ezra-comeau-2387418.jpg&fm=jpg"/>
            <Post img="https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg?cs=srgb&dl=pexels-bill-white-165537.jpg&fm=jpg"/> 
        </div>
    )
}
