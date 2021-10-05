import React from "react";

const Song = (props) => {
  const calculateAge = (year) => {
    const date = new Date();
    return date.getFullYear() - year;
  };

  const getArtist = (fname, lname) => {
    return fname + " " + lname;
  };

  return (
    <div className="song">
      <h1>{props.name}</h1>
      <h2>{getArtist(props.fname, props.lname)}</h2>
      <h3>{calculateAge(props.year)} yr ago</h3>
      <img src={props.albumArt} className="album-art" alt="Album Art" />
    </div>
  );
};

export default Song;
