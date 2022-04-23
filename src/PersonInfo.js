import { useState } from "react";

const PersonInfo = (props) => {

  const { name, age, hairColor } = props;
  const [userAge, setUserAge] = useState(age);
  return (
    <div className="card">
      <p> Name: {name}</p>
      <p onClick={(e) => setUserAge(userAge - 1)}> Age: {userAge}</p>
      <p>Hair Color:{hairColor}</p>
    </div>
  );
};

export default PersonInfo;
