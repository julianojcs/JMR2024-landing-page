'use client';
import { useState, useEffect } from 'react';

const CountdownTimer = ({endDate}) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(endDate);
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        m: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        s: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    timeLeft.h ? (
      <span
        style={{
          fontFamily: 'Digital-7, Consolas, monospace',
          fontSize: 'larger',
          fontWeight: 600,
        }}>
        <span>{timeLeft.d}d </span>
        <span>{timeLeft.h}:{timeLeft.m}:{timeLeft.s}</span>
      </span>
    ) : (
      <span></span>
    )
  );
};

export default CountdownTimer;