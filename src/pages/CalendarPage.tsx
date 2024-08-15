// src/pages/CalendarPage.tsx
import React, { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import TodoList from "../components/TodoList";
import PhotoUploader from "../components/PhotoUploader";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function CalendarPage() {
  const [todo, setTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [todosByDate, setTodosByDate] = useState<{ [key: string]: string[] }>({});
  const [photosByDate, setPhotosByDate] = useState<{ [key: string]: string[] }>({});

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

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formattedDate || !e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotosByDate((prevPhotos) => {
        const updatedPhotos = prevPhotos[formattedDate]
          ? [...prevPhotos[formattedDate], reader.result as string]
          : [reader.result as string];
        return { ...prevPhotos, [formattedDate]: updatedPhotos };
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <CalendarComponent selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      {selectedDate && (
        <Card className="w-[400px] mt-4">
          <CardHeader>
            <CardTitle>{formattedDate}の思い出と写真</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="ひとことを追加"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button className="w-full mt-2" onClick={addTodo}>
              追加
            </Button>
            <TodoList todos={todosByDate[formattedDate] || []} onDelete={deleteTodo} />
            <PhotoUploader onPhotoUpload={handlePhotoUpload} />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {photosByDate[formattedDate]?.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
