import React from 'react';
import PropTypes from 'prop-types';

const PostContent = props => (
  <div className="post-content">
    <p>{props.info.content}</p>
  </div>
);

PostContent.propTypes = {
  info: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostContent;
