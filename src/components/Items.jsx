import React, { useState } from 'react'
import data from '../data.json';

function Items({ filters, setFilters }) {
  
  // Function to handle clicking on a tag
  const handleFilterClick = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  // Function to handle jobs
  const filterJobs = (job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every(filter => tags.includes(filter));
  };

  // Jobs to display
  const displayedJobs = filters.length > 0 
    ? data.filter(filterJobs) : data;

  return (
    <main className="items">
      <div className="items__container">
        {displayedJobs.map((job) => {
          const tags = [job.role, job.level, ...job.languages, ...job.tools];
        
        return (
          <section key={job.id} className={`items__item ${job.featured ? 'featured' : ''}`}>
            <div className="items__wrapper">
              <div className="items__details">
                <div className='items__logos'>
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`}
                    className='items__logo'
                  />
                </div>

                <div className="items__info">
                  <div className='items__name'>
                    <p className='items__company'>{job.company}</p>
                    <div className='items__new-featured'>
                      {job.new && <span className='items__new'>New!</span>}
                      {job.featured && <span className='items__featured'>Featured</span>}
                    </div>
                  </div>

                  <div>
                    <h2 className='items__position'>{job.position}</h2>
                  </div>

                  <div className='items__more-info'>
                    <span>{job.postedAt}</span>
                    <span>•</span>
                    <span>{job.contract}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <div className="items__tags">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className='items__tag'
                    onClick={() => handleFilterClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
          );
        })}
      </div>
    </main>
  )
}

export default Items;