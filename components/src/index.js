import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () => {
  const props = [
    { author: 'Sam', date: 'Today at 6:00 PM', text: 'Post 1'},
    { author: 'Jon', date: 'Yesterday', text: 'Post 2'},
    { author: 'Jane', date: 'Last week', text: 'Post 3'}
  ]
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={props[0].author}
          date={props[0].date}
          text={props[0].text}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={props[1].author}
          date={props[1].date}
          text={props[1].text}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={props[2].author}
          date={props[2].date}
          text={props[2].text}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
