import { useEffect, useState } from 'react';
import '../assets/styles/exercises/exercise9.css';

export default function Ex9() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(' https://random-data-api.com/api/users/random_user?size=10')
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div className="wrapper">
      {state.map((item) => {
        return (
          <div key={item.id} className="item">
            <img src={item.avatar} className="image" />
            <h3 className="heading">{item.first_name}</h3>
            <p className="paragraph">{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}
