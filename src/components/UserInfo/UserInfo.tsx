import React from 'react';

import type { User } from './../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={'mailto:' + user?.email}>
    {/* <a className="UserInfo" href={`mailto:${user?.email}`}> */}
    {user?.name}
  </a>
);
