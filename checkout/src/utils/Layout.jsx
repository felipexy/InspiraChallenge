import styled from 'styled-components';

export const BackgroundColor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background: linear-gradient(
    10deg,
    #7476FA 0%,
    #4076FA 100%
  );
`;

export const WhiteBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    position: relative;
    width: 90%;
    background: white;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 2vh;
    padding-top: 0.5vh;
    top: 3%;
`;

export const DarkUpperDetail = styled.div`
  border-radius: 15px;
  position: relative;
  width: 100%;
  background: #001634;
  margin-right: auto;
  margin-left: auto;
  height: min-content;
  margin-top: -3%;
  height: 7vw;
  z-index: -1;
`;

export const Title = styled.h2`
  padding-top: -7vh;
  margin-left: -5%;
  padding-bottom: 5%;
`;


export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexContainerRow = styled.div`
    display: flex;
`;

export const CentralizeHorizontal = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export const CentralizeComboBox = styled.div`
    margin-left: 3vh;
`;

