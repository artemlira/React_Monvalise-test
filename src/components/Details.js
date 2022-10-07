import React from 'react';

export default function Details({ title, body, status }) {
  return (
    <details open={status} >
      <summary>{title}</summary>
      <div> {body}</div>
    </details >
  )
}
