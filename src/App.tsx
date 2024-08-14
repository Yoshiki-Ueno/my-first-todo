// デフォルト画面
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App









//左上にボタン
// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }













// TODOの入力部追加
// import { Button } from "./components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
// import { Input } from "./components/ui/input";

// export default function Home() {
//   const todos = ["掃除する", "洗濯する", "料理する"];
//   return (
//     <div className="bg-gray-100 flex justify-center items-center min-h-screen">
//       <Card className="w-[400px]">
//         <CardHeader>
//           <CardTitle>TODO App</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Input placeholder="タスクを追加" />
//           <Button className="w-full mt-2">追加</Button>
//           <ul>
//             {todos.map((todo) => (
//               <li className="bg-white p-2 mt-2 flex">
//                 <div>・{todo}</div>
//                 <button className="ml-2">削除する</button>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


// 入力欄の下に文字が表示される

// import { useState } from "react"; //追加
// import { Button } from "./components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
// import { Input } from "./components/ui/input";

// export default function Home() {
//   const [todo, setTodo] = useState(""); //追加
//   const todos = ["掃除する", "洗濯する", "料理する"];
//   return (
//     <div className="bg-gray-100 flex justify-center items-center min-h-screen">
//       <Card className="w-[400px]">
//         <CardHeader>
//           <CardTitle>TODO App</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Input
//             placeholder="タスクを追加"
//             onChange={(e) => setTodo(e.target.value)} //追加
//             value={todo} //ついか
//           />
//           <div>{todo}</div> 
//           <Button className="w-full mt-2">追加</Button>
//           <ul>
//             {todos.map((todo) => (
//               <li className="bg-white p-2 mt-2 flex">
//                 <div>・{todo}</div>
//                 <button className="ml-2">削除する</button>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }







// TODOをボタンを押すと追加
// import { useState } from "react";
// import { Button } from "./components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
// import { Input } from "./components/ui/input";

// export default function Home() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState<string[]>([]); // 追加
//   // const todos = ["掃除する", "洗濯する", "料理する"];　//コメントにする
//   return (
//     <div className="bg-gray-100 flex justify-center items-center min-h-screen">
//       <Card className="w-[400px]">
//         <CardHeader>
//           <CardTitle>TODO App</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Input
//             placeholder="タスクを追加"
//             onChange={(e) => setTodo(e.target.value)}
//           />
//           {/* <div>{todo}</div> */}
//           <Button
//             className="w-full mt-2"
//             onClick={() => {
//               setTodos([...todos, todo]);
//             }} // 追加
//           >
//             追加
//           </Button>
//           <ul>
//             {todos.map((todo) => (
//               <li className="bg-white p-2 mt-2 flex">
//                 <div>・{todo}</div>
//                 <button className="ml-2">削除する</button>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }













import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { MdDelete } from "react-icons/md"; //追加

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  // const todos = ["掃除する", "洗濯する", "料理する"];
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>ReactでToDoアプリ！</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="タスクを追加"
            onChange={(e) => setTodo(e.target.value)}
          />
          {/* <div>{todo}</div> */}
          <Button
            className="w-full mt-2"
            onClick={() => {
              setTodos([...todos, todo]);
              setTodo("");
            }}
          >
            追加
          </Button>
          <ul>
            {todos.map((todo, index) => (
              <li className="bg-white p-2 mt-2 flex">
                <div>・{todo}</div>
                <button
                  className="ml-2"
                  onClick={() => {
                    setTodos(todos.filter((_, i) => i !== index));
                  }}
                >
                  <MdDelete color="red" /> 
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
