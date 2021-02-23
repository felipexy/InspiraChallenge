import '../App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FlexContainer, CentralizeHorizontal, WhiteBox, BackgroundColor, DarkUpperDetail, FlexContainerRow, Title } from '../utils/Layout'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Cards from 'react-credit-cards';
import { Icon } from 'semantic-ui-react'
import 'react-credit-cards/es/styles-compiled.css'
import currentDate from '../utils/Date'

function CardInfo() {


  const history = useHistory();
  const purchInfo = useSelector((state) => state.slider);

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [focus, setFocus] = useState('');
  const dispatch = useDispatch();

  const handleCardNumber = (e) => {
    if (e.nativeEvent.data === null) {
      setCardNumber(cardNumber.substring(0, cardNumber.length - 1));
    } else {
      setCardNumber(cardNumber.concat(e.nativeEvent.data));
    }
  }

  const handleCardExpiryChange = (e) => {
    if (e.nativeEvent.data === null) {
      setExpiry(expiry.substring(0, expiry.length - 1));
    } else {
      setExpiry(expiry.concat(e.nativeEvent.data));
    }
  }

  const handleNameChange = (e) => {
    if (e.nativeEvent.data === null) {
      setName(name.substring(0, name.length - 1));
    } else {
      setName(name.concat(e.nativeEvent.data));
    }
  }

  const handleCardCVCChange = (e) => {
    if (e.nativeEvent.data === null) {
      setCvc(cvc.substring(0, cvc.length - 1));
    } else {
      setCvc(cvc.concat(e.nativeEvent.data));
    }
  }

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  }

  const handleButtonClick = () => {
    var dateSummary = (new Date()).toString().split(' ').splice(1,3).join(' ');
    dispatch({ type: 'ADD_TO_SUMMARY', summary: { package: purchInfo.package, price: purchInfo.price, date: dateSummary } });
    history.push('/summary');
  }

  if (purchInfo.price === 0 || purchInfo.package === 0) {
    history.push('/options');
  }

  return (
    <BackgroundColor>
      <WhiteBox>
        <FlexContainer>
          <DarkUpperDetail />
          <CentralizeHorizontal>
            <FlexContainerRow>
              <Title><Icon name='angle left' size='big' onClick={() => history.push('/options')} />Quase lá...</Title>
            </FlexContainerRow>
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={cardNumber}
            />
            <br />
            <FlexContainer>
              <Input
                type="tel"
                name="number"
                placeholder="Número do Cartão"
                onChange={event => handleCardNumber(event)}
                onFocus={event => handleInputFocus(event)}
              />
              <Input
                type="tel"
                name="name"
                placeholder="Nome no Cartão"
                onChange={event => handleNameChange(event)}
                onFocus={event => handleInputFocus(event)}
              />
              <Input
                type="tel"
                name="expiry"
                placeholder="Mês de validade"
                onChange={event => handleCardExpiryChange(event)}
                onFocus={event => handleInputFocus(event)}
              />
              <Input
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={event => handleCardCVCChange(event)}
                onFocus={event => handleInputFocus(event)}
              />
            </FlexContainer>
            <br />
            <h1>{purchInfo.package} pontos por R$ {purchInfo.price}</h1>
            {(cardNumber != '' && name != '' && expiry != '' && cvc != '' && purchInfo.package != 0 && purchInfo.price != 0) ? <Button color='blue' size='huge' circular='true' onClick={() => handleButtonClick()}>
              Pagar
              </Button> : <Button disabled="true" size='huge' circular='true'>Pagar</Button>
            }
          </CentralizeHorizontal>
        </FlexContainer>
      </WhiteBox>
    </BackgroundColor>
  );
}

export default CardInfo;
