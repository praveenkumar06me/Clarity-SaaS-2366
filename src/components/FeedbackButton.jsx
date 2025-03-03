import { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import questConfig from '../config/questConfig';

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-primary-600 text-white text-sm px-2 py-6 rounded-l-lg shadow-lg hover:bg-primary-700 transition-colors [writing-mode:vertical-lr] tracking-wider"
        onClick={() => setIsOpen(true)}
      >
        Feedback
      </button>

      <FeedbackWorkflow
        uniqueUserId={questConfig.USER_ID}
        questId={questConfig.QUEST_FEEDBACK_QUESTID}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        accent={questConfig.PRIMARY_COLOR}
      >
        <FeedbackWorkflow.ThankYou />
      </FeedbackWorkflow>
    </>
  );
};

export default FeedbackButton;