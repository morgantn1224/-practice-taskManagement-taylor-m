import React from 'react';
import { Link } from "react-router-dom";

const TaskList = () => {

  const tasks = [
    { id: 1, title: "Finish project setup", description: "Set up Vite and React Router" },
    { id: 2, title: "Build TaskList component", description: "Display all tasks with links" },
    { id: 3, title: "Implement TaskDetail", description: "Show task details using useParams" },
    { id: 4, title: "Complete project proposal", description: "Draft and finalize the project proposal document, including scope, objectives, and deliverables."},
    { id: 5, title: "Schedule team meeting", description: "Find a suitable time for a team meeting to discuss project progress and assign new tasks."},
    { id: 6, title: "Research new technologies", description: "Explore emerging technologies relevant to the project and evaluate their potential benefits."},
    { id: 7, title: "Update documentation", description: "Review and update existing project documentation to reflect recent changes and additions."},
    { id: 8, title: "Prepare presentation for stakeholders", description: "Create a compelling presentation to inform stakeholders about the project's status and future plans."}
  ];
  return (

      <div className="task-list">
        <h3>Project Tasks</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Link className="link" to="/task/${task.id}">{task.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>
  )


}
export default TaskList;
