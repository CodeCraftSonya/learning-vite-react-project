function Button({ number }) {
  function alertMe() {
    alert('You clicked the button number ' + number + ' !');
  }
  return (
    <button className="button-alert" onClick={alertMe}>
      Button{number}
    </button>
  );
}

export default function Ex3() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <Button key={i} number={i + 1} />
      ))}
    </>
  );
}
