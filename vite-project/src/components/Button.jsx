import { useState } from 'react';

function Button() {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(true);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? "You liked this!" : "Like"}
      </button>
    </div>
  );
}

export default Button;
