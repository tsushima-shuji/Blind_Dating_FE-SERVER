import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Outlet />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
