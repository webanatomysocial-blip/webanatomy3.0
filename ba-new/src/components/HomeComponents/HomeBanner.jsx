"use client";



import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa"
import '../../css/HomeComponentsCss/HomeBanner.css'


export default function HomeBanner() {
    const words = ['Brilliance', 'Business', 'Boost']
    const [wordIndex, setWordIndex] = useState(0)
    const [animKey, setAnimKey] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prev => (prev + 1) % words.length)
            setAnimKey(prev => prev + 1)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    const currentWord = words[wordIndex]

  return (
    <div className='hero_container'>
       
        <div className="hero">
            <div className="topHero">
                <span className='sub-heading-white'>Welcome To Business Anatomy</span>
                <h1 className='head-text-white'>
                    Building *&nbsp;
                    <span className='animatedWord' key={animKey}>
                        {currentWord.split('').map((letter, i) => (
                            <span key={i} className='letter' style={{ animationDelay: `${i * 0.07}s` }}>
                                {letter}
                            </span>
                        ))}
                    </span>
                </h1>
                <span className='para-text-white'>A place where ambition meets structure and ideas turn into impact. We build the frameworks, strategies, and systems that help businesses grow stronger and smarter. Together, we shape the anatomy of lasting success.</span>
            </div>

            <div className="bottomHero">
                <div className="rating">
                    <FaStar size={20} color="#ffffff" />
                    <FaStar size={20} color="#ffffff" />
                    <FaStar size={20} color="#ffffff" />
                    <FaStar size={20} color="#ffffff" />
                    <FaStar size={20} color="#ffffff" />
                    <p className='ratingText'>500+ Verified Reviews</p>
                </div>
                <div className="video">
                    <video autoPlay muted loop>
                        <source src="/videos/homeBanner/banner.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}