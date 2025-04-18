export default function Ex2() {
  function alertMe() {
    alert('You clicked the button!');
  }
  return (
    <button className="button-alert" onClick={alertMe}>
      Click me!
    </button>
  );
}
