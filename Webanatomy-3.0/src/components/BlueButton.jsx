"use client";

import React from 'react';
import '../css/BlueButton.css';

export default function BlueButton({ text, onClick, ...props }) {
  return (
    <button className="blue-button" onClick={onClick} {...props}>
      <span className="blue-button-text-wrapper">
        <span className="blue-button-text-primary">{text}</span>
        <span className="blue-button-text-secondary">{text}</span>
      </span>
    </button>
  );
}
