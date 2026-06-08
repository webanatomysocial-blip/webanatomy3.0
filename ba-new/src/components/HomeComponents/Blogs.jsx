"use client";

import React from 'react';
import Link from 'next/link';
import '../../css/HomeComponentsCss/Blogs.css';
import { blogsData } from '../../Blogs/MetaData';
import { FaSquare, FaArrowRight } from 'react-icons/fa';

export default function Blogs() {
    return (
        <div className="blogs-container">
            {/* Standardized Header */}
            <div className="clients-header">
                <span className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    INSIGHTS
                </span>
                <h2 className="head-text-white">LATEST BLOGS</h2>
            </div>

            {/* Dynamic Blog Grid */}
            <div className="blogs-grid">
                {blogsData.slice(0, 3).map((blog) => (
                    <Link href={`/blog?id=${blog.id}`} key={blog.id} className="blog-card" style={{ textDecoration: 'none' }}>
                        <div className="blog-image-wrapper">
                            <img src={blog.image.src || blog.image} alt={blog.title} />
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="read-more-container">
                <Link href="/blogs" className="read-more-button">
                    Read More <FaArrowRight size={14} style={{ marginLeft: '8px' }} />
                </Link>
            </div>
        </div>
    );
}
