const LargeFile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <video
        src="https://d2c0tajxhzjrh8.cloudfront.net/static/4cf20923-89db-412a-86af-ab454389cae9.mp4"
        height="300"
        width="300"
        controls
      />
      <h1>LargeFile is not uploaded yet. </h1>
      <h6>
        (Its code of first commit where large file is not included in the commit
        yet.)
      </h6>
    </div>
  );
};

export default LargeFile;
