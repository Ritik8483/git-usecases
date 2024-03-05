function App() {
  return (
    <div style={{ width: "100%" }}>
      Git commands
    </div>
  );
}

export default App;


// 1. To add local repo to remote repo
//git init (Initialized empty Git repository locally)
//git commit -m "first commit" (It will save that code locally)
//git remote add origin https://github.com/Ritik8483/git-usecases.git (It will add origin to the remote repo so that local code can go on server)
//git remote -v (To check origin of added repo)
//git push -u origin master (It will push the code to the master branch) 