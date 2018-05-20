import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header">
    <Fragment>
      <img src={props.info.avatar_url} alt="avatar" className="post-avatar" />
      <h5 className="post-author">{props.info.author}</h5>
      <p className="post-time">há {props.info.time} min</p>
    </Fragment>
  </div>
);

PostHeader.propTypes = {
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
