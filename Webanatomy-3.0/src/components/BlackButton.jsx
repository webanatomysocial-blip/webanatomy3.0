"use client";

import React from 'react';
import '../css/BlackButton.css';

export default function BlackButton({ text, onClick, ...props }) {
  return (
    <button className="black-button" onClick={onClick} {...props}>
      <span className="black-button-text-wrapper">
        <span className="black-button-text-primary">{text}</span>
        <span className="black-button-text-secondary">{text}</span>
      </span>
    </button>
  );
}
