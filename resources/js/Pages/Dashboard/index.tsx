import React, { useEffect, useState } from "react";
import { Head, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import axios from "axios";

interface ToDo {
    id: number;
    title: string;
    description: string;
    status: number;
}

const Dashboard: React.FC = () => {

    const [todos, setTodos] = useState<ToDo[]>([]);

    const [currentTask, setCurrentTask] = useState<ToDo | null>(null);
    const [showModal, setShowModal] = useState(false);

    const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;

        router.post(route("todo.create"), { title, description });
        fetchTodos();
        e.currentTarget.reset();
    };

    const fetchTodos = async () => {
        try {
            const response = await axios.get(route("todo.all"));
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const changeStatus = async (id: number) => {
        try {
            const response = await axios.get(route("todo.status", id));

            if (response.status === 200) {
                setTodos((prevTodos) =>
                    prevTodos.map((todo) =>
                        todo.id === id ? { ...todo, status: todo.status === 0 ? 1 : 0 } : todo
                    )
                );
            }
        } catch (error) {
            console.error("Error updating todo status:", error);
        }
    };

    const deleteTask = async (id: number) => {
        try {
            const response = await axios.delete(route("todo.delete", id));

            if (response.status === 200) {
                setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
            }
        } catch (error) {
            console.error("Error updating todo status:", error);
        }
    };

    const editTask = async (id: number) => {
        try {
            const response = await axios.get(route("todo.edit", id));
            setCurrentTask(response.data);
            setShowModal(true);
        } catch (error) {
            console.error("Error fetching task data:", error);
        }
    };

    const handleUpdateTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentTask) {
            try {
                const response = await axios.put(route("todo.update", currentTask.id), {
                    title: currentTask.title,
                    description: currentTask.description,
                });

                if (response.status === 200) {
                    fetchTodos();
                    setShowModal(false);
                }
            } catch (error) {
                console.error("Error updating task:", error);
            }
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="container">
                <h1 className="my-4">Manage To-Do List</h1>

                <form onSubmit={(e) => { createTodo(e) }}>
                    <div className="card p-4 mb-4">
                        <h5>Add a New To-Do</h5>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                name="description"
                            ></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Add To-Do</button>
                    </div>
                </form>

                <div className="card p-4">
                    <h5>To-Do List</h5>
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.length > 0 ? (
                                todos.map((todo, index) => (
                                    <tr key={todo.id}>
                                        <td>{index + 1}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>
                                            {todo.status === 0 ? (
                                                <span className="badge text-bg-warning">Not Completed</span>
                                            ) : (
                                                <span className="badge text-bg-success">Completed</span>
                                            )}
                                        </td>
                                        <td className="text-end">
                                            <button className="btn btn-danger btn-sm" type="button" onClick={() => deleteTask(todo.id)}><i
                                                className="bi bi-trash"></i></button>
                                            <button className="btn btn-info btn-sm ms-1" type="button" onClick={() => editTask(todo.id)}><i
                                                className="bi bi-pencil"></i></button>

                                            {todo.status === 0 ? (
                                                <button v-if="task.done == 0" className="btn btn-success btn-sm ms-1"
                                                    type="button" onClick={() => changeStatus(todo.id)}><i
                                                        className="bi bi-toggle-off"></i></button>
                                            ) : (
                                                <button v-if="task.done == 1" className="btn btn-warning btn-sm ms-1"
                                                    type="button" onClick={() => changeStatus(todo.id)}><i
                                                        className="bi bi-toggle-on"></i></button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center">
                                        No tasks available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {currentTask && (
                                    <form onSubmit={handleUpdateTask}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Task Title</label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="form-control"
                                                placeholder="Title"
                                                value={currentTask.title}
                                                onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Task Description</label>
                                            <textarea
                                                id="description"
                                                className="form-control"
                                                placeholder="Description"
                                                value={currentTask.description}
                                                onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
};

export default Dashboard;
