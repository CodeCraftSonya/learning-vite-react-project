import { useState } from 'react';

export default function Ex4() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Количество нажатий на кнопку сейчас: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{ width: '100px', height: '50px' }}
      ></button>
    </>
  );
}
