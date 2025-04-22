export default function Ex6() {
  const data = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: 'Why do programmers wear glasses?',
      punchline: 'Because they need to C#',
    },
  ];

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.setup}</h3>
            <p>{item.punchline}</p>
          </div>
        );
      })}
    </div>
  );
}
