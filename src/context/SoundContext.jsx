import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

export const useSoundContext = () => {
  return useContext(SoundContext);
};

export const SoundProvider = ({ children }) => {
  const [isSound, setIsSound] = useState(false);

  const toggleSound = () => {
    setIsSound((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ isSound, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};
