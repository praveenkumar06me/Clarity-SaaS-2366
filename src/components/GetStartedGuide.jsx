import { GetStarted } from '@questlabs/react-sdk';
import questConfig from '../config/questConfig';

const GetStartedGuide = () => {
  return (
    <GetStarted
      questId={questConfig.GET_STARTED_QUESTID}
      uniqueUserId={questConfig.USER_ID}
      accent={questConfig.PRIMARY_COLOR}
    >
      <GetStarted.Header />
      <GetStarted.Progress />
      <GetStarted.Content />
      <GetStarted.Footer />
    </GetStarted>
  );
};

export default GetStartedGuide;