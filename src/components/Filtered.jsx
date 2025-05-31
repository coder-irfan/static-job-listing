import React from 'react'

function Filtered({ filters, setFilters }) {
  const removeTag = (tag) => {
    setFilters(filters.filter(f => f !== tag))
  };

  const clearAll = () => {
    setFilters([]);
  };

  if (filters.length === 0) return null;

  return (
    <section className="filtered">
      <div className="filtered__container">
        <div className="filtered__tags">
          {filters.map((tag, index) => (
            <span key={index} className='filtered__tag'>
              <span className='filtered__tag-text'>{tag}</span>
              <img
                src="images/icon-remove.svg"
                alt="remove"
                className='filtered__remove-btn'
                onClick={() => removeTag(tag)}
              />
            </span>
          ))}
        </div>
        <p className="filtered__clear" onClick={clearAll}>Clear</p>
      </div>
    </section>
  )
}

export default Filtered;