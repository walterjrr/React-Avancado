import './App.css';
import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  console.log('Pai renderizou');

  const handleClick = (value) => {
    setValue(value);
  };

  //Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  return (
    <div className="App">
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />);
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
