import '../App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FlexContainer, CentralizeHorizontal, WhiteBox, BackgroundColor, CentralizeComboBox, DarkUpperDetail } from '../utils/Layout'
import { useSelector } from 'react-redux';

import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import ComboBox from '../components/ComboBox/ComboBox'

function Options() {

    const history = useHistory();
    const slider = useSelector((state) => state.slider);

    return (
        <BackgroundColor>
            <WhiteBox>
                <FlexContainer>
                    <DarkUpperDetail />
                    <CentralizeHorizontal>

                        <h1>
                            De quantos pontos você precisa?
                        </h1>

                        <CentralizeComboBox>
                            <ComboBox />
                        </CentralizeComboBox>

                        <h1>
                            R$ {slider.price}
                        </h1>

                        {(slider.price != 0) ? <Button color='blue' size='huge' circular='true' onClick={() => history.push('/cardInfo')}>
                            Prosseguir
                        </Button> : <Button disabled="true" size='huge' circular='true'>
                            Prosseguir
                        </Button>
                        }


                    </CentralizeHorizontal>
                </FlexContainer>
            </WhiteBox>
        </BackgroundColor>
    );
}

export default Options;


