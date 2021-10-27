interface Props {
  title: string;
}

const pageHeaders: React.FC<Props> = ({ title = 'Exalos' }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Now" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default pageHeaders;
