import { useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [sending, setSending] = useState(false);

    if (!open) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        .then(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setSending(false);
            onClose();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Try again later.");
            setSending(false);
        });
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-lg p-4 md:p-8 fade-in relative shadow-2xl animate-in">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all hover:rotate-90 duration-300 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-gray-700 dark:bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ContactModal;
