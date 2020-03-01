import React, {useEffect} from 'react'
import './Contacts.sass'

const Contacts = (props) => {
    
  let  {
    handleOpenClick,
  } = props
    
  useEffect(() => {
    handleOpenClick()
  }, []);

  return(
    <section className='Contacts'>
      <h3 className={'Contacts__title'}>Контакты</h3>
      <div className={'Contacts__cont'}>
        <form className={'Contacts__form'} action="/">
          <div className={'Contacts__form-top'}>
            <label className={'Contacts__label'} htmlFor="contactEmail">
              Email
              <input className={'Contacts__input'} id={'contactEmail'} type="text" name="Email"/>
            </label>
            <div className={'Contacts__links'}>
              <div className={'Contacts__link-wrap'}>
                Github
                <a className={'Contacts__link'} href="https://github.com/Lirurin" target="_blank" rel="noopener noreferrer"> </a>
              </div>
              <div className={'Contacts__link-wrap'}>
                Резюме
                <a className={'Contacts__link'} href="https://github.com/Lirurin" target="_blank" rel="noopener noreferrer"> </a>
              </div>
            </div>
          </div>
          <label className={'Contacts__label'} htmlFor="contactComment">
            Сообщение
            <textarea className={'Contacts__input Contacts__input--textarea'} id={'contactComment'} name="comment"></textarea>
          </label>
          <button className={'Contacts__submit'} type={'submit'}>Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts