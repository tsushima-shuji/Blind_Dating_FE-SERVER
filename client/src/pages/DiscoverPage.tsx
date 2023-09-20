import DiscoverUser from 'components/discover/DiscoverUser';
import Header from 'components/layout/Header';

function DiscoverPage() {
  return (
    <>
      <Header title="Discover" />
      <main className="flex-auto h-[70%]">
        <DiscoverUser />
      </main>
    </>
  );
}

export default DiscoverPage;
