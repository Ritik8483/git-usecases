import LargeFile from "./components/LargeFile";

function App() {
  return (
    <div>
      Git commands Dont DO
      <LargeFile/>
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

// 2.If you added large files and the git push limit exceeds then
// For example you have a large video of (700mb) and you pushed it
//When you take out development branch from master you will found that development branch will carry 2 commits from master
//Without including large video .git size = 69.4 KB (71,116 bytes)
//Node modules = 85.3 MB
//With including large video .git size = 1.23 GB which is very large
// Note : even if we remove that video from the code but still it is in commit history hence .git size remains 1.23GB
//Now to remove that code as the commit limit exceeds 
//git log (it will give log of all commit present in current branch is descending order);
//git checkout 9ca30ec4a10662ddf8722612896650126656a408 (Move back to that commit which doesn't include video in the code)
//git checkout branch-name to switch a branch from the commit and then merge that commit to code



//git add src/App.tsx (Will add only single file)