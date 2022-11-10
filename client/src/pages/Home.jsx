import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className='mt-36 flex flex-col gap-36'>
      {posts.map((post)=>(
        <div className="flex odd:flex-row-reverse gap-5 " key={post.id} >
          <div className="image flex-[1] relative before:absolute before:bg-main before:w-full before:h-full before:-left-5 before:top-5 before:z-[-1]  ">
            <img className='w-full h-[400px] object-cover '  src={post.img} alt="" />
          </div>
          <div className="content flex-[2] flex flex-col justify-between">
            <Link to={`/post/${post.id}`} >
              <h1 className='text-5xl font-bold' >{post.title}</h1>
            </Link>
            <p className='text-lg' >{post.desc}</p>
            <button className='w-max px-3 bg-white py-3 border-[1px] text-teal-500 border-teal-500 hover:bg-main hover:text-black hover:border-white'>Read More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home