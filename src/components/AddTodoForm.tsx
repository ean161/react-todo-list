import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

interface AddTodoFormProps {
    onAdd: (title: string) => void
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
    const [input, setInput] = useState<string>("");

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Add todo</CardTitle>
                    <CardDescription>Add new todo item</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter task name" />
                </CardContent>
                <CardFooter>
                    <CardAction>
                        <Button onClick={() => {
                            onAdd(input);
                            setInput("");
                        }}>
                            Add
                        </Button>
                    </CardAction>
                </CardFooter>
            </Card >
        </>
    )
}