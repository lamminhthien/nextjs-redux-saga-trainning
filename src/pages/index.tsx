import useCounter from '@/states/counter';
import usePost from '@/states/posts';
import {getPosts} from '@/states/posts/selector';
import {useAppSelector} from '@/states/store';

export default function Home() {
  const counter = useCounter();
  const post = usePost();
  const posts = useAppSelector(getPosts);

  return (
    <div>
      <ul>
        {posts.map(item => (
          <li key={item?.id}>{item?.title}</li>
        ))}
      </ul>
      <p>Value = {counter.value}</p>
      <button onClick={() => counter.increment()}>Increment</button>
      <button onClick={() => counter.decrement()}>Decrement</button>
      <button onClick={() => counter.incrementByAmountRequest()}>Increament by 5</button>
      <button onClick={() => post.listRequest()}>Fetch post</button>
      <button onClick={() => post.listRequest()}>Fetch post by id</button>
    </div>
  );
}
