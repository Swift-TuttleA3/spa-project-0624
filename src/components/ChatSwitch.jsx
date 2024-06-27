import Chat from "./Chat";
import FakeAnswer from "./FakeAnswer";

const ChatSwitch = () =>{

  return (
    <div>
      <p className="text-center mt-4 font-mono">Ask chatGPT 8.0/ultra</p>
      <div className="text-center ">
        <FakeAnswer />
      </div>
      
    </div>
  );
}

export default ChatSwitch;