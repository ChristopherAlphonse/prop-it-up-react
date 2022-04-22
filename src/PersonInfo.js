const PersonInfo = (props) => {
  const { name, age,hairColor } = props;
  return (
    <div className="card">
      <p> Name: {name}</p>
      <p> Age:{age}</p>
      <p>Hair Color:{hairColor}</p>
    </div>
  );
};

export default PersonInfo;
