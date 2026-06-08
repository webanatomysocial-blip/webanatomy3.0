"use client";

import React from 'react';
import '../../css/HomeComponentsCss/LetBaSpark.css';
import BlueButton from '../BlueButton';
import SpiralSwiper from './SpiralSwiper';

export default function LetBaSpark() {
    return (
        <section className="let-ba-spark-section">
            <h2 className="let-ba-spark-title">
                <span style={{ color: 'var(--black)' }}>LET BA</span><br/>
                <span className="text-gradient-primary">
                    SPARK YOUR<br/>
                    NEXT BIG MOVE.
                </span>
            </h2>
            
            <BlueButton 
                text="Get In Touch" 
                icon={true} 
                onClick={() => console.log('Get in touch clicked')} 
            />

            <SpiralSwiper />
        </section>
    );
}
