function List({ arr }) {
  return (
    <table border="1" style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Animal</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Ex6({ arr }) {
  return <List arr={arr} />;
}
