import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://randomuser.me/api/?results=30");

      const data = response.data.results;
      setProfile(data);

      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      {profile.map((elem, idx) => (
        <div key={idx}>
          <img src={elem.picture.medium} alt={elem.name.first} />
          <h2>
            {elem.name.first} {elem.name.last}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default App;
