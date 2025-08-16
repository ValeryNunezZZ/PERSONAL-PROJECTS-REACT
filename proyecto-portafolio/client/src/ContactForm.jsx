import { useState } from "react";

export default function ContactForm(){
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...")

        const form = e.target;

        const data = {
            nombre : form.nombre.value,
            email: form.email.value,
            message: form.message.value,
        }

        try{
            const res = await fetch("https://personal-projects-react-2.onrender.com/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            })

            const json = await res.json();

            if(json.success){
                setStatus("Message sent!");
                form.reset();
            }else{
                setStatus(json.error || "Something went wrong.");
            }
        }catch(err){
            console.error(err);
            setStatus("Error sending message.")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Send me a message</h3>

            <div className='container-input'>
                <label>NAME</label>
                <input type="text" name="nombre" placeholder="Your Name" required />
            </div>

            <div className='container-input'>
                <label>EMAIL ADDRESS</label>
                <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className='container-input'>
                <label>MESSAGE</label>
                <textarea name="message" placeholder="Your Message..." required />
            </div>

            <button type='submit'>SEND</button>

            <p className="status">{status}</p>
        </form>
    );
}
