import React, {useEffect} from 'react'
import "./Works.sass"
import Card from './Card/Card';

const Works = (props)=> {

  let {
    handleOpenClick,
    cards,
  } = props

  useEffect(() => {
    handleOpenClick()
  }, []);

  return (
    <div className="Works">
      <h3 className={'Works__title'}>Работы</h3>
      <div className="Works__cont">
        <Card cardData={cards[0]}/>
        <Card cardData={cards[1]}/>
        <Card cardData={cards[2]}/>
        {/* <Card cardData={cards[3]}/> */}
      </div>
    </div>
  )
}

export default Works