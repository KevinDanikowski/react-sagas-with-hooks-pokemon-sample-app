import React from 'react';

function Attribute({attribute, value}) {

  return (
    <div className='attribute'>
      <span className='attribute-label'>{attribute}</span>
      <span>{value}</span>
    </div>
  );
}

export default Attribute;