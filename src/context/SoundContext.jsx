import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

export const useSoundContext = () => {
  return useContext(SoundContext);
};

export const SoundProvider = ({ children }) => {
  const [isSound, setIsSound] = useState(() => {
    return localStorage.getItem('sound') === 'true';
  });

  const toggleSound = () => {
    setIsSound((prev) => {
      const newSoundState = !prev;
      localStorage.setItem('sound', newSoundState);
      return newSoundState;
    });
  };

  return (
    <SoundContext.Provider value={{ isSound, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};
