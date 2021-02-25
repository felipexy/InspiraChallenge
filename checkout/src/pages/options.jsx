import React from 'react';
import { useHistory } from 'react-router-dom';
import { FlexContainer, CentralizeHorizontal, WhiteBox, BackgroundColor, CentralizeSlider, DarkUpperDetail } from '../utils/Layout'
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SliderPrices from '../components/Slider/Slider'

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
                        <CentralizeSlider>
                            <br />
                            <SliderPrices />
                            <br />
                        </CentralizeSlider>
                        <h1>
                            R$ {slider.price}
                        </h1>
                        <br />
                        {(slider.price !== 0) ? <Button color='blue' size='huge' circular='true' onClick={() => history.push('/cardInfo')}>
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


