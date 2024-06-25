import { useState } from "react";
import OpenAI from "openai";

const apiKey = import.meta.env.VITE_API_KEY;


export default function Chat() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e) => {
        e.preventDefault();

        if (!message) return;
        setIsTyping(true);
        scrollTo(0, 1e10);

        const msgs = [...chats, { role: "user", content: message }];
        setChats(msgs);

        setMessage("");

        try {
            const response = await OpenAI.chat.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a GPT. You can help with tasks",
                    },
                    ...msgs,
                ],
            });

            const reply = response.choices[0].message;
            setChats((prevChats) => [...prevChats, reply]);

            setChats((prevChats) => [
                ...prevChats,
                {
                    role: "system",
                    content: "Dummy Antort",
                },
            ]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsTyping(false);
            scrollTo(0, 1e10);
        }
    };

    return (
        <main>
            <section>
                {chats.length > 0 &&
                    chats.map((chat, index) => (
                        <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                            <span>
                                <b>{chat.role.toUpperCase()}</b>
                            </span>
                            <span>:</span>
                            <span>{chat.content}</span>
                        </p>
                    ))}
            </section>

            <div className={isTyping ? "" : "hide"}>
                <p>
                    <i>{isTyping ? "Typing..." : ""}</i>
                </p>
            </div>

            <form onSubmit={chat}>
                <input
                    type="textfield"
                    name="message"
                    value={message}
                    placeholder="Deine Anfrage"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </main>
    );
}

/*
import { useState } from "react";
import OpenAI from "openai";

const openai = import.meta.env.VITE_API_KEY;

export default function Chat() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e) => {
        e.preventDefault();

        if (!message) return;
        setIsTyping(true);
        scrollTo(0, 1e10);

        const msgs = [...chats, { role: "user", content: message }];
        setChats(msgs);

        setMessage("");

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a GPT. You can help with tasks",
                    },
                    ...msgs,
                ],
            });

            const reply = response.data.choices[0].message;
            setChats((prevChats) => [...prevChats, reply]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsTyping(false);
            scrollTo(0, 1e10);
        }
    };

    return (
        <main>
            <h1>Chat AI Tutorial</h1>

            <section>
                {chats.length > 0 &&
                    chats.map((chat, index) => (
                        <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                            <span>
                                <b>{chat.role.toUpperCase()}</b>
                            </span>
                            <span>:</span>
                            <span>{chat.content}</span>
                        </p>
                    ))}
            </section>

            <div className={isTyping ? "" : "hide"}>
                <p>
                    <i>{isTyping ? "Typing..." : ""}</i>
                </p>
            </div>

            <form onSubmit={chat}>
                <input
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Type a message here and hit Enter..."
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </main>
    );
}

*/