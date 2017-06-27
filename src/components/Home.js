import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/paigekehoe/paigekehoe.github.io#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>
        Welcome to my little site - a work in progress.
        Come back soon!
        </p>
    </div>
  );
}
