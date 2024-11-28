'use client';
import React from 'react';
import MyButton from "@/components/MyButton";

const HomePage: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <MyButton text="Click Me" onClick={handleClick} />
    </div>
  );
};

export default HomePage;
