import React from 'react'
import { FaGithubSquare,FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>Created by Mohammad Noorain<br/>yes Me :)</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>


           
            <FaInstagram href='https://www.instagram.com/stories/mohammad_noorain3/'/>
            <FaGithubSquare href='https://github.com/mohammdnoorain?tab=repositories'/>
            <FaLinkedin href='linkedin.com/in/mohammad-noorain'/>
        </div>
      
    </div>
  )
}

export default Footer
