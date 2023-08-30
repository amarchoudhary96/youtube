import React from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux';

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const list=["All","Live","Gaming","News","Cricket","Hollywood Music","Hollywood Movies","Movies","Comedy"]
  return (
    <div className={`${isMenuOpen ?"ml-[250px]" :  "ml-[85px]"}`}>
      <Buttons list={list}/>
    </div>
  )
}

export default ButtonList
