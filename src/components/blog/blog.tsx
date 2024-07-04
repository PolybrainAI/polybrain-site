import React, { forwardRef, ReactNode } from 'react';
import Header from '../header/header';

import "./blog.css"
import Footer from '../footer/footer';

interface BlogProps {
    children: ReactNode;
    title: string;
    readTime: string;
    publishDate: string;
    backgroundImage: string;
}

export const Blog = forwardRef<HTMLDivElement, BlogProps>(({ children, title, readTime, publishDate, backgroundImage }, ref) => {
    return <div ref={ref} className='blog'>
        
        <Header />

        <div className='blog-header' style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1>{title}</h1>
            <h3>{`${publishDate} – ${readTime} read 🕑`}</h3>
        </div>

        <div className='blog-content'>
            {children}
        </div>


        <Footer />
        </div>
    ;
});