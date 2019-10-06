import React, { useState, useEffect } from 'react';
import './App.css';
import Youtube from './Youtube';

const App = () => {
  const [data, setData] = useState(null);
  const [bonusToken, setBonusToken] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataRaw = await fetch('http://localhost:3001/getVideo');
      const data = await dataRaw.json();
      setData(data);
    };
    getData();
  }, []);

  const handleSuccess = bonusToken => {
    setBonusToken(bonusToken);
  };

  return (
    <div className="App">
      {data ? <Youtube data={data} onSuccess={handleSuccess} /> : <div>Loading...</div>}
      {bonusToken && <p>{bonusToken}</p>}
    </div>
  );
};

export default App;
