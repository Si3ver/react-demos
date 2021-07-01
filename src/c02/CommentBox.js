/**
 * 评论框组件
 * 功能拆分：
 * 1. 父组件  CommentBox
 * 2. 子组件1 CommentList
 *      子组件 CommentItem
 * 3. 子组件2 CommentForm
 */

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import withTimer from "../c06/withTimer";
import "./CommentBox.css";

// mock data
const comments = [
  {
    author: "Nate",
    content: "Hello React! This is a sample comment.",
  },
  { author: "Kevin", content: "Hello Redux!" },
  { author: "Bood", content: "Hello Rekit!" },
];

export class CommentBox extends React.PureComponent {
  render() {
    return (
      <div className="comment-box">
        <h1>Comments ({comments.length})</h1>
        <CommentList comments={comments} />
        <CommentForm />
        {this.props.time.toLocaleString()}
      </div>
    );
  }
}

export default withTimer(CommentBox);
