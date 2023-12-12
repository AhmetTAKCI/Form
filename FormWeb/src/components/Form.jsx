import { IoIosSearch } from "react-icons/io";
import { useState  } from "react";

function Form() {
    const [visible, setVisble] = useState(false);
    // const [visible2, setVisble2] = useState(true)
    return ( 
    <div>
        <div className="conteiner">
        <h1>Sign İn</h1>
        <form className="form">
            <input type="text" placeholder="Name " required />
            <input type="email" placeholder="E-Mail" required />

            <input type="number" placeholder="PhoneNumber" style={{color:"white"}} required />
         
            <input type="password" name="password" placeholder="Password Please" required />
           {
            visible ? 
            <IoIosSearch onClick={()=>setVisble(!visible)} />
            :
            <IoIosSearch onClick={()=>setVisble(visible)} />

           }
            <input type="password" name="passControl" placeholder="Password Please" required />
            <IoIosSearch onClick={()=>setVisble(!visible)} />
            <button type="submit">Sıgn In</button>
        </form>
        </div>
    </div> );
}

export default Form;