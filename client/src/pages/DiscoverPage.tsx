import DiscoverUser from 'components/discover/DiscoverUser';
import Layout from 'components/layout/Layout';

function DiscoverPage() {
  return (
    <Layout title="Discover">
      <main className="flex flex-col items-center justify-center flex-auto">
        <DiscoverUser />
      </main>
    </Layout>
  );
}

export default DiscoverPage;
