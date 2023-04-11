import useCounter from '@/states/counter';
import usePostsStore from '@/states/posts/usePosts';

export default function Home() {
  const counter = useCounter();
  const post = usePostsStore();

  return (
    <div>
      <ul>
        {post.ids.map(id => (
          <li key={id}>{post.entities[id].title}</li>
        ))}
      </ul>
      <p>Value = {counter.value}</p>
      <button onClick={() => counter.increment()}>Increment</button>
      <button onClick={() => counter.decrement()}>Decrement</button>
      <button onClick={() => post.getPosts()}>getPosts</button>
    </div>
  );
}
