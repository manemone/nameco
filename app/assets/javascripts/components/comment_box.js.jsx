var CommentBox = React.createClass({

  render: function() {
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList />
          <CommentForm />
        </div>
    );
  }
});

var CommentList = React.createClass({

  render: function() {
    return (
        <div className="commentList">
          Hello, world! I'm a commentList.
        </div>
    );
  }
});

var CommentForm = React.createClass({

  render: function() {
    return (
        <div className="commentForm">
          Hello, world! I'm a commentForm.
        </div>
    );
  }
});
