import './ChatHeader.scss';

import React from 'react';

import { HelpRounded, Notifications, SearchRounded, SendRounded } from '@mui/icons-material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PushPinIcon from '@mui/icons-material/PushPin';

type Props = {
  channelName: string | null;
};

const ChatHeader = (props: Props) => {
  const { channelName } = props;
  return (
    <div className="chatHeader">
      <div className="ChatHeaderLeft">
        <h3>
          <span className="ChatHeaderHash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="ChatHeaderRight">
        <Notifications />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="検索" />
          <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
};
export default ChatHeader;
