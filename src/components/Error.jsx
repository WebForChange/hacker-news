const Error = (error) => {
  return (
    <div>
      <p>{error.error.message}</p>
      <p>Please reload the page.</p>
    </div>
  );
};

export default Error;
