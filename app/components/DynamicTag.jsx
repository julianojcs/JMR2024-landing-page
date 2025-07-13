import React from 'react';

const DynamicTag = ({ tag, children, ...props }) => {
  const Tag = tag;
  return <Tag {...props}>{children}</Tag>;
};

export default DynamicTag;