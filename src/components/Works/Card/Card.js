import React from 'react';
import './Card.sass';
import objectFitImages from 'object-fit-images';

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      infoCls: ['Card__info'],
      triggerCls: ['Card__info-arrow'],
      isTriggered: false,
    };
  }

  handleTriggerClick = () => {
    this.setInfoTimer();
    let infoClasses = this.state.infoCls;
    let triggerClasses = this.state.triggerCls;
   
    if (infoClasses.indexOf('Card__info--active')>=0) {
      infoClasses.splice(infoClasses.indexOf('Card__info--active'), 1);
      triggerClasses.splice(triggerClasses.indexOf('Card__info-arrow--active'), 1);
      infoClasses.push('Card__info--unactive')
    } else {
      if (infoClasses.indexOf('Card__info--unactive')>=0){
        infoClasses.splice(infoClasses.indexOf('Card__info--unactive'), 1)
      }
      infoClasses.push('Card__info--active');
      triggerClasses.push('Card__info-arrow--active')
    }

    this.setState((state, props) => ({
      infoCls: infoClasses,
      triggerCls: triggerClasses,
    }))
  }

  setInfoTimer() {
    this.setState((state, props) => ({
      isTriggered: true,
    }))
    let timer = setTimeout(() => {
      this.setState((state, props) => ({
        isTriggered: false,
      }))
      clearTimeout(timer)
    },1000)
  }

  render() {
    // let vueBlock
    let gitLink
    // if (this.props.cardData.vue) {
    //    vueBlock = <span className={'Card__item-skill'} ></span>;
    // }
    if (this.props.cardData.gitUrl !== '') {
      gitLink = <a href={this.props.cardData.gitUrl} className={'Card__item-git Card__info-text'}>Код на GitHub</a>;
    }

    objectFitImages();

    return(
    <div className={'Card__item'}>
      <div 
        className={this.state.infoCls.join(' ')}
      >
        <div 
          className={this.state.triggerCls.join(' ')}
          onClick={ !this.state.isTriggered ? this.handleTriggerClick : null} 
        >
          <span className={'Card__info-line'}></span>
          <span className={'Card__info-line'}></span>
          <span className={'Card__info-line'}></span>
          <span className={'Card__info-line'}></span>
        </div>
        <span className={'Card__info-text'}>
          Описание: <br/>
          {this.props.cardData.description}
        </span>
        <span className={'Card__info-text'}>
          Задача: <br/>
          {this.props.cardData.task}
        </span>
        <span className={'Card__info-text'}>
          Статус проекта: <br/>
          <a className={'Card__info-text Card__info-text--status'} href={this.props.cardData.url} target="_blank" rel="noopener noreferrer">
             {this.props.cardData.status}
          </a>
        </span>
        { gitLink }
      </div>
      <a href={this.props.cardData.url} target="_blank" rel="noopener noreferrer">
        <img className={'Card__image'} src={this.props.cardData.cardImg} alt="..."/>
      </a>
      <h3 className={'Card__item-title'}>{this.props.cardData.website}</h3>
      <div className={'Card__item-skills'}>
        <span className={'Card__item-skill'} ></span>
        <span className={'Card__item-skill'} ></span>
        <span className={'Card__item-skill'} ></span>
        {/* { vueBlock } */}
       </div>
    </div>
  ) 
  }
}

export default Card