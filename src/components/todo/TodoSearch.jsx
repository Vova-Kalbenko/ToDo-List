import React from 'react';
const HandleSearch = ({ value, onChange }) => {
  return (
    <label>
      <input type="text" value={value} onChange={onChange} />
      search
    </label>
  );
};
export default HandleSearch;
