import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data,reference}) {
  return (
      <motion.div drag dragConstraints={reference} className=' flex-shrink-0 relative w-60 h-72 rounded-[30px] bg-zinc-700/90 text-white px-8 py-10 overflow-hidden' >

       <FaRegFileAlt />
       <p className='text-xm leading-tight mt-5 font-semibold'>{data.Desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>

          <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {
            
                 data.close ? <IoClose /> : <FiDownload size=".8em" color='#fff'/>
              }
            </span>
          </div>
              {
                data.tag.isOpen ?  (
                  <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                  <h3 className='text-sm font-semibold'>{data.tag.tagTitle} </h3> 
                  </div>
                ) : null
              }
         
        </div>

      </motion.div>
    
  )
}

export default Card

