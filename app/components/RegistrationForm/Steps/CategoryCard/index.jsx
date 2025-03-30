'use client'

import {
    card,
    selected,
    header,
    title,
    priceTag,
    content,
    description,
    placesTag
  } from './CategoryCard.module.css'

const CategoryCard = ({
  category,
  isSelected,
  getCurrentPrice,
  onSelect
}) => {
  return (
    <div
      className={`${card} ${isSelected ? selected : ''}`}
      onClick={() => onSelect(category)}
    >
      <div className={header}>
        <h3 className={title}>{category.title}</h3>
        <span
          className={priceTag}
          data-cents={getCurrentPrice(category)?.value.split(',')[1]}
        >
          {`${getCurrentPrice(category)?.value.split(',')[0]}`}
        </span>
      </div>
      <div className={content}>
        {category.description.map((desc, i) => (
          <p key={i} className={description}>{desc}</p>
        ))}
        {category.places && (
          <div className={placesTag}>
            Vagas limitadas: {category.places}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryCard