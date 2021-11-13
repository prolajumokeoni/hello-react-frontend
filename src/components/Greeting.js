import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingThunk } from '../redux/greetings/Greetings';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingReducer.message);
  useEffect(() => {
    dispatch(getGreetingThunk());
  }, [dispatch]);
  return (
    <>
      <h2>
        Greeting:
        {greeting}
      </h2>
    </>
  );
}
export default Greeting;
