import React, { useState } from 'react';

export const useLocalStorage = (storedKeyName, initialValue = '') => {
  const initialStoredValue = React.useMemo(() =>  localStorage.getItem(storedKeyName) || initialValue || '' , [storedKeyName, initialValue]);
  const [value, setStateValue] = React.useState(initialStoredValue);
  
  const setLocalStorageValue = (value) => {
    localStorage.setItem(storedKeyName, value);
    setStateValue(value);
  };

  return [value, setLocalStorageValue];
};