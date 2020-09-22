import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  Winter: {
    text: "Brrr.... it's cold outside",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-top-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-bottom-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
