export default function Contact() {
    return (
        <>
            <div className="container mx-auto p-2 w-3/4">
                <form className="flex flex-col gap-4">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="p-2 border-4 border-blue-500" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="p-2 border-4 border-blue-500" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="p-2 border-4 border-blue-500"></textarea>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
