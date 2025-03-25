import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { user } =
    useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/sign-up");
    }
  }, [user]);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Welcome;
