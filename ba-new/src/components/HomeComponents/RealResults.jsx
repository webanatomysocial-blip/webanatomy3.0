"use client";

import React, { useRef, useEffect } from 'react';
import '../../css/HomeComponentsCss/RealResults.css';
import { FaSquare, FaAtom } from 'react-icons/fa';
import { FiCompass, FiLayers, FiGlobe, FiFeather } from 'react-icons/fi';
import resultOne from '@/assets/images/HomeImages/resultsSection/results1.avif';
import resultTwo from '@/assets/images/HomeImages/resultsSection/results2.avif';
import resultThree from '@/assets/images/HomeImages/resultsSection/results3.avif';

const cards = [
  {
    image: resultOne,
    logoIcon: <FaAtom size={18} />,
    logoName: 'Quantum',
    title: '$500k',
    description: 'on hiring costs saved',
  },
  {
    image: resultTwo,
    logoIcon: <FiGlobe size={18} />,
    logoName: 'Acme',
    title: '20x',
    description: 'revenue growth in 6 months',
  },
  {
    image: resultThree,
    logoIcon: <FiFeather size={18} />,
    logoName: 'Epicurious',
    title: '41%',
    description: 'increase in monthly revenue',
  },
];

const brands = [
  { icon: <FaAtom size={18} />, name: 'Quantum' },
  { icon: <FiCompass size={18} />, name: 'Foresight' },
  { icon: <FiLayers size={18} />, name: 'Layers' },
];

export default function RealResults() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className='realResultsSection fade-in'>
      <div className='realResultsHeader'>
        <h2 className='sub-big-heading'>REAL RESULTS FROM REAL CUSTOMERS.</h2>
         <div className='realResultsBrandRow'>
          {brands.map((brand, index) => (
            <div key={index} className='realResultsBrand'>
              {brand.icon}
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

   

      <div className='realResultsGrid'>
        {cards.map((card, index) => (
          <article
            key={index}
            className='realResultsCard'
            style={{ backgroundImage: `url(${card.image.src || card.image})` }}
          >
            <div className='realResultsCardLogo'>
              {card.logoIcon}
              <span>{card.logoName}</span>
            </div>
            <div className='realResultsCardCopy'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
