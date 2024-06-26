/* import Chat from "./Chat"; */
import FakeAnswer from "./FakeAnswer";
import Chat from "./Chat";

const ChatSwitch = () =>{

  return (
    <div>
      <h1 className="text-center text-2xl m-5">ChatBot-Dummy</h1>
      <p className="text-center">Hier können bislang Fragen eingegeben und Dummy-Antworten erwartet werden...</p>
      <div className="text-center ">
      <FakeAnswer />
      </div>
      
    </div>
  );
}

export default ChatSwitch;