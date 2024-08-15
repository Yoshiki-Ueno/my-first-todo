import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { MdDelete } from "react-icons/md"; //追加
import { Calendar } from "@/components/ui/calendar";
// import React from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [todosByDate, setTodosByDate] = useState<{ [key: string]: string[] }>({});

  const formattedDate = selectedDate ? selectedDate.toISOString().split("T")[0] : "";

  const addTodo = () => {
    if (!formattedDate) return;

    setTodosByDate((prevTodos) => {
      const updatedTodos = prevTodos[formattedDate] ? [...prevTodos[formattedDate], todo] : [todo];
      return { ...prevTodos, [formattedDate]: updatedTodos };
    });
    setTodo("");
  };

  const deleteTodo = (todoIndex: number) => {
    if (!formattedDate) return;

    setTodosByDate((prevTodos) => {
      const updatedTodos = prevTodos[formattedDate].filter((_, i) => i !== todoIndex);
      return { ...prevTodos, [formattedDate]: updatedTodos };
    });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border"
      />
      
      {/* 日付が選択された場合のみフォームを表示 */}
      {selectedDate && (
        <Card className="w-[400px] mt-4">
          <CardHeader>
            <CardTitle>{formattedDate}のタスク</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="タスクを追加"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button className="w-full mt-2" onClick={addTodo}>
              追加
            </Button>
            <ul>
              {todosByDate[formattedDate]?.map((todo, index) => (
                <li key={index} className="bg-white p-2 mt-2 flex">
                  <div>・{todo}</div>
                  <button
                    className="ml-2"
                    onClick={() => deleteTodo(index)}
                  >
                    <MdDelete color="red" /> 
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
