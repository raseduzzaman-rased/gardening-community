import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Typewriting = () => {
  return (
    <div className="App">
      <h1>
        Gardening{' '}
        <span style={{ color: '#73B21A', fontWeight: 'bold' }}>
          <Typewriter
            words={['Community']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={75}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Typewriting;
