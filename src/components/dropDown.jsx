'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 32px;
  padding: 26px 24px 16px;
  border-radius: 12px;
  background: white;
  will-change: transform;
  filter: drop-shadow(0 -5.9px 2.7px hsl(var(--dropdown-shadow-color, 0deg 0% 0%) / 0.025)) drop-shadow(0 -1.2px 6.9px hsl(var(--dropdown-shadow-color, 0deg 0% 0%) / 0.025)) drop-shadow(0 8px 14.2px hsl(var(--dropdown-shadow-color, 0deg 0% 0%) / 0.05)) drop-shadow(0 21.9px 29.2px hsl(var(--dropdown-shadow-color, 0deg 0% 0%) / 0.05)) drop-shadow(0 49px 80px hsl(var(--dropdown-shadow-color, 0deg 0% 0%) / 0.07));

  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: translateY(${(props) => (props.isOpen ? '0' : '-10px')});
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 20%;
    transform: translateX(-70%) rotate(45deg);
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 10px 0;
    box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.04);
  }
`

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>Toggle Dropdown</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
        <DropdownItem>Item 4</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown
