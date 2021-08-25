const handleRedirect = (url) => ({
  redirect: {
    destination: url,
    permanent: false,
  },
});

export default handleRedirect;
