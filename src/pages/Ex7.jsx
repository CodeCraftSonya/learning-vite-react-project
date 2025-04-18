import { useState } from 'react';

export default function Form() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Hello ' + value1 + ' ' + value2);
  }

  function handleChange1(e) {
    setValue1(e.target.value);
  }

  function handleChange2(e) {
    setValue2(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange1} value={value1} placeholder="First Name" />
      <input onChange={handleChange2} value={value2} placeholder="Last Name" />
      <input type="submit" />
    </form>
  );
}
