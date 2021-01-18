import { useRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '../../components/Layout';

const Package = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <h1>Package: {pid}</h1>
    </Layout>
  );
};

export default Package;
