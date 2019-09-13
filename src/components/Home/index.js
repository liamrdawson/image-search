import React, { useState } from 'react';
import data from 'data';

const getData = () => data;
const storageBase = 'https://storage.googleapis.com/';

export default function Home() {
  const images = getData();

  const [filteredImages] = useState(images);

  return (
    <React.Fragment>
      <input placeholder="Filter by keyword (e.g. people, plants, chairs)" />

      <div>
        {filteredImages.map((path, index) => (
          <img
            alt=""
            key={index}
            src={storageBase + filteredImages[index]}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
