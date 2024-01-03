import "./addTaskForm.css";
export default function AddTaskForm() {
  return (
    <>
      <div id="form-backdrop"></div>
      <form id="add-task-form">
        <h1>Add Tasks</h1>
        <label>Level of Priority: </label>
        <select id="priority" name="priority">
          <option value="None">None</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <div>
          <label>Title</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Details </label>
          <textarea></textarea>
        </div>

        <div>
          {" "}
          <label>Low to Med </label>
          <input type="datetime-local"></input>
        </div>

        <div>
          <label>Med to High </label>
          <input type="datetime-local"></input>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
