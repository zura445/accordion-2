export default function Question(props) {
  const { active, setActive, questions, current } = props;

  return (
    <div>
      <div className="">
        <div className="">
          <h1
            className="cursor-pointer"
            onClick={() => {
              if (active === current) {
                setActive(null);
              } else {
                setActive(current);
              }
            }}
          >
            {questions}
          </h1>
          {active === current ? <p>Answer</p> : null}
        </div>
      </div>
    </div>
  );
}
