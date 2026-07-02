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
    <div className="p-8 grid sm:grid-cols-3 lg:grid-cols-5 gap-6 bg-gray-600">
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {profile.map((elem, idx) => (
        <div
          key={idx}
          className="p-4 bg-white/10 border border-white/20 rounded-lg shadow-md text-center"
        >
          <img
            className="h-48 w-full object-cover"
            src={elem.picture.medium}
            alt={elem.name.first}
          />
          <h2>
            {elem.name.first} {elem.name.last}, {elem.dob.age}
          </h2>
          <p>Username: {elem.login.username}</p>
          <p>
            {elem.location.city}, {elem.location.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
