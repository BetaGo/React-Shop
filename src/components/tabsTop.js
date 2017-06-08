import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

import { Link } from 'react-router-dom';

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="RECENTS"
      containerElement={<Link to="/goods-list"/>}
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
      containerElement={<Link to="/shopping-cart"/>}
    />
    <Tab
      icon={<MapsPersonPin />}
      label="NEARBY"
      containerElement={<Link to="/my-bill"/>}
    />
  </Tabs>
);

export default TabsExampleIconText;