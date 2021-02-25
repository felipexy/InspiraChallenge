import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FlexContainer, CentralizeHorizontal, WhiteBox, BackgroundColor, DarkUpperDetail, FlexContainerRow, Title, PackagePrice } from '../utils/Layout'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Cards from 'react-credit-cards';
import { Icon } from 'semantic-ui-react'
import 'react-credit-cards/es/styles-compiled.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.7),
      width: 290
    },
  },
  expiryCvc: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
      width: 150,
      left: 2
    },
  },
  cvc: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
      width: 131
    },
  },
}));

function CardInfo() {

  const classes = useStyles();
  const history = useHistory();
  const purchInfo = useSelector((state) => state.slider);

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [focus, setFocus] = useState('');
  const dispatch = useDispatch();
  const [validNumber, setValidNumber] = useState(Boolean);
  const [validExpiry, setValidExpiry] = useState(Boolean);
  const [validCVC, setValidCVC] = useState(Boolean);
  const [validName, setValidName] = useState(Boolean);

  const validateCardNumber = useCallback((number) => {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
      return false;
    return luhnCheck(number);
  }, []);

  useEffect(() => {
    setValidNumber(validateCardNumber(cardNumber));
    setValidExpiry(validateExpiry(expiry));
    setValidCVC(validateCVC(cvc));
    setValidName(validateName(name));
  }, [validateCardNumber, cardNumber, expiry, cvc, name]);

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
    e.preventDefault();
      if (e.nativeEvent.data === undefined) {
        setName(" ");
        return;
      }
      if (e.nativeEvent.data === null) {
        if (name !== null) {
          setName(name.substring(0, name.length - 1));
        }
      } else {
        setName(name.concat(e.nativeEvent.data));
      }
    }
  

  const handleCardCVCChange = (e) => {
    if (e.nativeEvent.data !== null) {
      setCvc(cvc.concat(e.nativeEvent.data));
      return setValidCVC(false);
    } else {
      if (e.nativeEvent.data === null) {
        setCvc(cvc.substring(0, cvc.length - 1));
      } else {
        setCvc(cvc.concat(e.nativeEvent.data));
      }
    }
  }

  const handleInputFocus = (e) => {
    setFocus(e.target.id);
  }

  const handleButtonClick = () => {
    var dateSummary = (new Date()).toString().split(' ').splice(1, 3).join(' ');
    dispatch({ type: 'ADD_TO_SUMMARY', summary: { package: purchInfo.package, price: purchInfo.price, date: dateSummary } });
    history.push('/summary');
  }

  if (purchInfo.price === 0 || purchInfo.package === 0) {
    history.push('/options');
  }

  const validateName = (name) => {
    debugger
    if (isNaN(name)) {
      return true;
    } else {
      return false;
    }
  }

  const validateCVC = (cvc) => {
    if (cvc.length === 3 && !isNaN(cvc)) {
      return true;
    }
    else {
      return false;
    }
  }

  const validateExpiry = (expiryD) => {
    var result = false;

    if (expiryD.length === 4 && !isNaN(expiryD)) {
      var ExpiryMonth = expiryD.substring(2, 0);
      var ExpiryYear = expiryD.substring(expiryD.length - 2, expiryD.length);
      var today = new Date();
      var month = `${today.getUTCMonth() + 1}`;
      const year = `${today.getUTCFullYear()}`;
      let yearFormat = year.substring(year.length - 2, year.length);

      if (ExpiryYear >= yearFormat) {
        if (ExpiryYear === yearFormat) {
          if (parseInt(ExpiryMonth) >= parseInt(month)) {
            result = true;
          } else {
            result = false;
          }
        } else {
          result = true;
        }
      }
    } else {
      result = false;
    }
    return result;
  }


  const luhnCheck = (val) => {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
      var intVal = parseInt(val.substr(i, 1));
      if (i % 2 === 0) {
        intVal *= 2;
        if (intVal > 9) {
          intVal = 1 + (intVal % 10);
        }
      }
      sum += intVal;
    }
    return (sum % 10) === 0;
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
              placeholders={{ name: 'SEU NOME AQUI' }}
            />
            <br />
            <FlexContainer>
              <form className={classes.root}>
                {(validNumber === false && cardNumber !== '') ? <TextField error
                  id="number"
                  type="number"
                  helperText="Número incorreto"
                  label="Número do Cartão"
                  variant="outlined"
                  onChange={event => handleCardNumber(event)}
                  onFocus={event => handleInputFocus(event)}
                /> : <TextField
                    id="number"
                    type="number"
                    label="Número do Cartão"
                    variant="outlined"
                    onChange={event => handleCardNumber(event)}
                    onFocus={event => handleInputFocus(event)}
                  />}
              </form>
              <form className={classes.root}>
                {(validName === false && name !== '') ? <TextField error
                  type="text"
                  id="name"
                  label="Nome no Cartão"
                  variant="outlined"
                  onChange={event => handleNameChange(event)}
                  onFocus={event => handleInputFocus(event)}
                /> : <TextField
                    type="text"
                    id="name"
                    label="Nome no Cartão"
                    variant="outlined"
                    onChange={event => handleNameChange(event)}
                    onFocus={event => handleInputFocus(event)}
                  />}
              </form>
              <form className={classes.expiryCvc}>
                <FlexContainerRow>
                  <div className={classes.expiry}>
                    {(validExpiry === false && expiry !== '') ? <TextField error
                      id="expiry"
                      helperText="Data incorreta"
                      type="number"
                      label="Mês de validade"
                      variant="outlined"
                      onChange={event => handleCardExpiryChange(event)}
                      onFocus={event => handleInputFocus(event)}
                    /> : <TextField
                        id="expiry"
                        type="number"
                        label="Mês de validade"
                        variant="outlined"
                        onChange={event => handleCardExpiryChange(event)}
                        onFocus={event => handleInputFocus(event)}
                      />
                    }
                  </div>
                  <div className={classes.cvc}>
                    {(validCVC === false && cvc !== '') ? <TextField error
                      id="cvc"
                      label="CVC"
                      type="number"
                      helperText="Dado incorreto"
                      variant="outlined"
                      onFocus={event => handleInputFocus(event)}
                      onChange={event => handleCardCVCChange(event)}
                    /> : <TextField
                        id="cvc"
                        label="CVC"
                        type="number"
                        helperText="Ex.: 131"
                        variant="outlined"
                        onFocus={event => handleInputFocus(event)}
                        onChange={event => handleCardCVCChange(event)}
                      />}
                  </div>
                </FlexContainerRow>
              </form>

            </FlexContainer>

            <PackagePrice>{purchInfo.package} pontos por R$ {purchInfo.price}</PackagePrice>

            {(cardNumber !== '' && name !== '' && expiry !== '' && cvc !== '' && purchInfo.package !== 0 && purchInfo.price !== 0 && validNumber === true && validExpiry === true && validCVC === true) ? <Button color='blue' size='huge' circular='true' onClick={() => handleButtonClick()}>
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
