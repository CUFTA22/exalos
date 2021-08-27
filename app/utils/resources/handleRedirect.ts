const handleRedirect = (url: string) => ({
  redirect: {
    destination: url,
    permanent: false,
  },
});

export default handleRedirect;
