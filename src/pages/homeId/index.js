import React from 'react';
import { useParams } from 'react-router-dom';

const HomeId = () => {
  const params = useParams();
  const { homeId } = params;
  return (
    <div>
      <h1>People Profile</h1>
      <div>
        <span>{`hello ${homeId}`}</span>
      </div>
    </div>
  );
};

export default HomeId;
