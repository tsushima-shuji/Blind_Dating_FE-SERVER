import DiscoverUser from 'components/discover/DiscoverUser';
import Navbar from 'components/layout/Navbar';

function DiscoverPage() {
  return (
    <>
      <Navbar title="Discover" />
      <main className="flex flex-col items-center justify-center flex-auto">
        <DiscoverUser />
      </main>
    </>
  );
}

export default DiscoverPage;
