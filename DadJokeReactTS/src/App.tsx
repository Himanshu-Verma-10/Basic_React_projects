import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { JokesList } from './components/JokesList';
import useAppDispatch from './hooks/useAppDispatch';
import { useEffect } from 'react';
import { getJoke } from './store/reducers/joke';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(getJoke())
  }, []);
  
  return (
    <div className='bg-slate-100'>
      <NavBar />
      <main className='h-[calc(100vh-48px-56px)] flex flex-col items-center justify-center px-4 lg:px-0'>
        <div className='container'>
          <JokesList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
