import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from '../redux/selectors';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
const spinnerStyle = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  witdth: "100vh",
};
export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const localUser = useSelector(userSelector);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged(function (user) {
      if (user) {
        const { uid, firstName, lastName } =
          user;
        setUser({ uid, firstName, lastName });
        navigate("/dashboard");
      }
      else {
        navigate("/");
      }

      setIsLoading(false);

    });
    return () => {
      unsubscribed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? (
        <div style={spinnerStyle}>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
