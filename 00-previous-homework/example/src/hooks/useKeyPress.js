import React, { useEffect, useState } from 'react';


const noop = () => {};
const isSameKey = (keyName, pressed) => keyName.toLowerCase() === pressed.toLowerCase();

// Case Insensitive
export const useKeyPress = (keyName, handler = noop, deps = []) => {
  const [isKeyPressed, setKeyPressed] = useState(false);
  const handleDocumentKeyDown = (event) => {
    if (isSameKey(keyName, event.key)) {
      handler(event);
      setKeyPressed(true);
    }
  };
  const handleDocumentKeyUp = ({ key }) => {
    if (isSameKey(keyName, key)) {
      setKeyPressed(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleDocumentKeyDown);
    document.addEventListener('keyup', handleDocumentKeyUp);
    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
      document.removeEventListener('keyup', handleDocumentKeyUp);
    };
  }, deps);

  return isKeyPressed;
}