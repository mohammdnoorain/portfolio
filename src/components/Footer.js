import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>Created by Mohammad Noorain<br/>yes Me :)</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
            <a href='https://www.instagram.com/stories/mohammad_noorain3/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
            </a>
            <a href='https://github.com/mohammdnoorain?tab=repositories' target='_blank' rel='noopener noreferrer'>
                <FaGithubSquare />
            </a>
            <a href='https://linkedin.com/in/mohammad-noorain' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
        </div>
    </div>
  )
}

export default Footer
