import type { NextPage } from 'next';
import Head from 'next/head';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/counterSlice';

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>The value of count is {count}</h1>
      </main>
    </div>
  );
};

export default Home;
