import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

interface AddTodoFormProps {
    onAdd: (title: string) => void
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
    const [input, setInput] = useState<string>("");
    const [isInputErr, setIsInputErr] = useState<boolean>(false);

    useEffect(() => {
        if (isInputErr) {
            setTimeout(() => {
                setIsInputErr(false);
            }, 2000);
        }
    }, [isInputErr]);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Add todo</CardTitle>
                    <CardDescription>Add new todo item</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        onClick={() => {
                            setIsInputErr(false);
                        }}
                        onChange={(e) => setInput(e.target.value)}
                        className={isInputErr ? "border-1 border-red-500" : ""} value={input} placeholder="Enter task name" />
                </CardContent>
                <CardFooter>
                    <CardAction>
                        <Button onClick={() => {
                            if (input.length === 0) {
                                setIsInputErr(true);
                                return;
                            }

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