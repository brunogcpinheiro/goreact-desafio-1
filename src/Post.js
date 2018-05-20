import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import PostContent from './PostContent';

const Post = props => (
  <div className="post-container">
    <PostHeader info={props.data} />
    <PostContent info={props.data} />
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
