import logo from './logo.svg';
import GameMap from './components/GameMap';
import CharacterDropdown from './components/CharacterDropdown';
import { useLocalStorage } from './hooks/useLocalStorage';
import Character from './components/Character';
import { useKeyPress } from './hooks/useKeyPress';
import { useEffect } from 'react';


const getNextValue = (current, speed) => parseInt(current, 10) + parseInt(speed, 10);

function App() {

  const [selectedCharacter, setSelectedCharacter] = useLocalStorage("characterName", "square");
  const [topOffset, setTopOffset] = useLocalStorage("topOffset", 1);
  const [leftOffset, setLeftOffset] = useLocalStorage("leftOffset", 1);
  const [speed, setSpeed] = useLocalStorage("speed", 5);

  useKeyPress(" ", () => {
    setSpeed(10);
    return () => { setSpeed(5); }
  }, [speed]);

  useKeyPress("arrowdown", () => {
    if (topOffset < 400) {
      setTopOffset(parseInt(topOffset, 10) + parseInt(speed, 10));
    }
  }, [topOffset, speed]);
  useKeyPress("arrowup", () => setTopOffset(parseInt(topOffset, 10) - parseInt(speed, 10)), [topOffset, speed]);
  useKeyPress("arrowleft", () => setLeftOffset(parseInt(leftOffset, 10) - parseInt(speed, 10)), [leftOffset, speed]);
  useKeyPress("arrowright", () => setLeftOffset(parseInt(leftOffset, 10) + parseInt(speed, 10)), [leftOffset, speed]);

  return (
    <div className="App">
        <CharacterDropdown
          selected={selectedCharacter}
          onChange={(event) => setSelectedCharacter(event.target.value)}  
        />

        <GameMap>
          <Character name={selectedCharacter} top={topOffset} left={leftOffset} />
        </GameMap>
    </div>
  );
}

export default App;
