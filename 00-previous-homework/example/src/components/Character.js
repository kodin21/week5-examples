

const SquareCharacter = ({ ...props }) => (
  <div {...props}>
    <div style={{ height: 30, width: 30, background: 'red' }} />
  </div>
)

const CircleCharacter = ({ ...props }) => (
  <div {...props}>
    <div style={{ height: 30, width: 30, background: 'red', borderRadius: 15 }} />
  </div>
)



const Characters = {
  square: SquareCharacter,
  circle: CircleCharacter,
  empty: () => <div>Unknown Character!</div>
 };


const Character = ({ name, top = 0, left = 0  }) => {
  console.log(top);
  const CharacterRenderer = Characters[name] || Characters.empty;
  return <CharacterRenderer style={{ position: 'relative', top: `${top}px`, left: `${left}px` }} />
}

export default Character;