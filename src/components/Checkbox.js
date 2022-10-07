import React from 'react';
import '../style/checkbox.scss';

export default function Checkbox({ text, amount }) {
  return (
    <div className='wrapper__checkbox'>
      <div class="checkbox">
        <label class="custom-checkbox">
          <input type="checkbox" value={text} />
          <span>{text}</span>
        </label>
      </div>
      <div className='amount'>{amount}</div>
    </div>

  )
}
