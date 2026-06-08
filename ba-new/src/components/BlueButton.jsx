"use client";

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../css/BlueButton.css';
import Link from 'next/link';

export default function BlueButton({ text, onClick, icon, href, ...props }) {
  const content = (
    <>
      <span className="blue-button-text-wrapper">
        <span className="blue-button-text-primary">{text}</span>
        <span className="blue-button-text-secondary">{text}</span>
      </span>
      {icon && (
        <span className="blue-button-icon-wrapper">
          <FaArrowRight size={14} className="blue-button-icon" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="blue-button" onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className="blue-button" onClick={onClick} {...props}>
      {content}
    </button>
  );
}
