import useCounter from '@/states/counter';

export default function Home() {
  const counter = useCounter();

  return (
    <div>
      <p>Value = {counter.value}</p>
      <button onClick={() => counter.increment()}>Increment</button>
      <button onClick={() => counter.decrement()}>Decrement</button>
      <button onClick={() => counter.incrementByAmountRequest()}>Increament by 5</button>
    </div>
  );
}
