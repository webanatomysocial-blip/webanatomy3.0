"use client";

import React from 'react';
import '../css/WhiteButton.css';

export default function WhiteButton({ text, onClick, ...props }) {
  return (
    <button className="white-button" onClick={onClick} {...props}>
      <span className="white-button-text-wrapper">
        <span className="white-button-text-primary">{text}</span>
        <span className="white-button-text-secondary">{text}</span>
      </span>
    </button>
  );
}
