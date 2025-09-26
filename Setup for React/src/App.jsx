const App=()=>{
  const user="janvi"

  return (
    <div>
       <p>Hello {user}</p>
    </div>
  )
}
export default App;

// important Point:
// always write everything in the app fucntion itself...anything written outside wont be returned to main.jsx and it will not get rendered!