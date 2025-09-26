export default function AssignedTaskCard({taskName, dueDate, status}){
  return <div>
    <span><input type="checkbox" name="" id="" /></span>
    <p>{taskName}</p>
    <p>{dueDate}</p>
    <p>{status}</p>
  </div>
}