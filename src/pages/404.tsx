import dynamic from 'next/dynamic';

const DynamicAppLayout = dynamic(() => import('../layouts/AppLayout'));
const DynamicNotFound = dynamic(() => import('@components/notFound/NotFound'));

const NotFoundPage = () => {
  return (
    <DynamicAppLayout>
      <DynamicNotFound />
    </DynamicAppLayout>
  );
};

export default NotFoundPage;
