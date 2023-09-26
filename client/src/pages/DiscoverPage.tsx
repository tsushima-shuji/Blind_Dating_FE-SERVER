import DiscoverUser from 'components/discover/DiscoverUser';
import Header from 'components/layout/Header';

function DiscoverPage() {
  return (
    <>
      <Header title="Discover" />
      <main className="flex-auto h-full px-10 py-6 overflow-auto sm:py-4">
        <DiscoverUser />
      </main>
    </>
  );
}

export default DiscoverPage;
