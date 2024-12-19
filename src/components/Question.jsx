export default function Question(props) {
  const { active, setActive, dialogQ, dialogA, current } = props;

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
            {dialogQ}
          </h1>
          {active === current ? <p>{dialogA}</p> : null}
        </div>
      </div>
    </div>
  );
}
