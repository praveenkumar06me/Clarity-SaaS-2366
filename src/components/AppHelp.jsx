import { HelpHub } from '@questlabs/react-sdk';
import questConfig from '../config/questConfig';

const AppHelp = () => (
  <HelpHub
    uniqueUserId={questConfig.USER_ID}
    questId={questConfig.QUEST_HELP_QUESTID}
    accent={questConfig.PRIMARY_COLOR}
    token={questConfig.TOKEN}
    apiUrl={questConfig.API_URL}
    botLogo={{ 
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1740023098548-pngegg.png'
    }}
  />
);

export default AppHelp;