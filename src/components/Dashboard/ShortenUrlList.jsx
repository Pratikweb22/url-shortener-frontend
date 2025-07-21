import React from 'react';
import ShortenItem from './ShortenItem';

const ShortenUrlList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="my-6 text-center text-gray-500 font-medium">
        No URLs found.
      </div>
    );
  }

  return (
    <div className="my-6 space-y-4">
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShortenUrlList;
