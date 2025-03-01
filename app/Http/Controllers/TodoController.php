<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/index');
    }

    public function all()
    {
        return response()->json(Todo::all());
    }

    /**
     * Summary of index
     * @return \Inertia\Response
     */
    public function dashboard()
    {
        return Inertia::render('Dashboard/index');
    }

    /**
     * Summary of store todo
     * @param \Illuminate\Http\Request $request
     * @return mixed|\Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        Todo::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => false,
        ]);

        return redirect()->back();
    }

    public function changeStatus($task_id)
    {
        $task = Todo::find($task_id);
        $task->status = $task->status == 0 ? 1 : 0;
        $task->save();
        return;
    }

    public function delete($task_id)
    {
        $task = Todo::find($task_id);
        return $task->delete();
    }

    public function edit($task_id)
    {
        return Todo::find($task_id);
    }

    public function update(Request $request, $task_id)
    {
        $task = Todo::find($task_id);

        $task->title = $request->title;
        $task->description = $request->description;
        $task->save();

        return response()->json(['message' => 'Task updated successfully', 'task' => $task]);
    }
}
