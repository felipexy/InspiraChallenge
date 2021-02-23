import '../App.css';
import { useHistory } from 'react-router-dom';
import { FlexContainer, CentralizeHorizontal, WhiteBox, BackgroundColor, CentralizeComboBox, DarkUpperDetail, Title } from '../utils/Layout'
import { useSelector } from 'react-redux';

import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import { Icon } from 'semantic-ui-react'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SummaryItem from '../components/SummaryItem/SummaryItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Summary() {

  const history = useHistory();
  const summary = useSelector((state) => state.summary);
  const classes = useStyles();

  const summaryArray = [];

  const getSummary = () => {
    if (summary.summary.length >= 1) {
      summary.summary.map(summ => {
        summaryArray.push(<SummaryItem pack={summ.package} price={summ.price} date={summ.date} />);       
      })
    }
  }

  return (
    <BackgroundColor>
      <WhiteBox>
        <FlexContainer>
          <DarkUpperDetail />
          <CentralizeHorizontal>

            <Title>Histórico</Title>

            <List className={classes.root}>
              {getSummary()}
              {summaryArray}
            </List>

            <br/>

            <Button color='blue' size='huge' circular='true' onClick={() => history.push('/options')}>
              Comprar Mais
            </Button>

          </CentralizeHorizontal>
        </FlexContainer>
      </WhiteBox>
    </BackgroundColor>
  );
}

export default Summary;
