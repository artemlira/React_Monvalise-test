import React from 'react';

export default function Details({ title, text }) {
  return (
    <details>
      <summary>{title}</summary>
      {text}
    </details>
  )
}
