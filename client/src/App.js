import Select from "./ui/Select/Select";
import Textarea from "./ui/TextArea/Textarea";
import TextField from "./ui/TextField/TextField";

function App() {
  return (
    <div className="p-5 d-grid gap-3">
      <TextField type='email' label='Email' />
      <Select label='Choose a number'>
        <option>m</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </Select>
      <Textarea label='description' rows={4}></Textarea>
      <button className="btn-primary w-100">Submit</button>
    </div>
  )
}

export default App;
