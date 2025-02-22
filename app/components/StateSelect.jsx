'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './StateSelect.module.css'
import Image from 'next/image'

export default function StateSelect({ value, onChange, states }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedState, setSelectedState] = useState(value)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const selectRef = useRef(null)
  const optionsRef = useRef(null)

  const handleStateSelect = (state) => {
    setSelectedState(state)
    onChange({ target: { name: 'state', value: state.value } })
    setIsOpen(false)
    selectRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        setIsOpen(!isOpen)
        break
      case 'Escape':
        setIsOpen(false)
        break
      case 'Tab':
        if (isOpen) {
          e.preventDefault()
          setIsOpen(false)
        }
        break
    }
  }

  // Update the display value when the parent's value changes
  useEffect(() => {
    if (!value) {
      setIsOpen(false)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const updatePosition = () => {
      if (selectRef.current && isOpen) {
        const rect = selectRef.current.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        const spaceAbove = rect.top
        const optionsHeight = 200 // max-height of options container

        setPosition({
          top: spaceBelow >= optionsHeight ? rect.bottom : rect.top - optionsHeight,
          left: rect.left,
          width: rect.width
        })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', updatePosition)
    window.addEventListener('resize', updatePosition)

    if (isOpen) {
      updatePosition()
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  return (
    <div className={styles.selectContainer} ref={selectRef} id="state" aria-labelledby="state-label">
      <div
        tabIndex={0}
        className={styles.select}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="state-listbox"
      >
        {value ? (
          <>
            <Image
              src={selectedState.flag}
              alt={`Bandeira ${selectedState.label}`}
              width={24}
              height={16}
              className={styles.stateFlag}
            />
            <span>{selectedState.label}</span>
          </>
        ) : (
          <span className={styles.placeholder}>Selecione um estado</span>
        )}
      </div>

      {isOpen && (
        <div
          id="state-listbox"
          className={styles.optionsContainer}
          ref={optionsRef}
          role="listbox"
          aria-labelledby="state-label"
          style={{
            top: position.top,
            left: position.left,
            '--select-width': `${position.width}px`
          }}
        >
          {states.map(state => (
            <div
              key={state.value}
              tabIndex={-1}
              className={`${styles.option} ${selectedState?.value === state.value ? styles.selected : ''}`}
              onClick={() => handleStateSelect(state)}
              role="option"
              aria-selected={selectedState?.value === state.value}
            >
              <Image
                src={state.flag}
                alt={`Bandeira ${state.label}`}
                width={24}
                height={16}
                className={styles.stateFlag}
              />
              <span>{state.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}