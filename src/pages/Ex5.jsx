export default function Ex5() {
  const arr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  return (
    <ul>
      {arr.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
