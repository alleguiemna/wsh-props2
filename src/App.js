import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactList from './components/contactList/ContactList';


function App() {
  const fullStackstudents = [
    {
      fullName:"joua samar",
      phone:11110000,
      email:"j@gmail.com"
    },
    {
      fullName:"jmal mohamed ali",
      phone:11110000,
      email:"j@gmail.com"
    },
    {
      fullName:"koubaa rania",
      phone:11110000,
      email:"k@gmail.com"
    },
    {
      fullName:"sassi montassar",
      phone:11110000,
      email:"s@gmail.com"
    },
    {
      fullName:"saadi amira",
      phone:11110000,
      email:"s@gmail.com"
    },
  ]
     
      
  return (
    <div >
      <h1 style={{textAlign:"center"}}>ContactList</h1>
      <ContactList students={fullStackstudents}/>
      
    </div>
  );
}

export default App;
