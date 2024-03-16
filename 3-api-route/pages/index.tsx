import { FormEvent, useRef } from "react";

export default function Home() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredFeedback = feedbackInputRef.current!.value;
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="text-center container mx-auto flex justify-center gap-2">
      <div className="border bg-gray-300 mt-10 p-5 rounded-md">
        <form onSubmit={submitFormHandler}>
          <div className="flex gap-2 items-center">
            <label htmlFor="email">Your Email</label>
            <input
              ref={emailInputRef}
              className="border mt-5 space-x-2"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="feedback">FeedBack</label>
            <textarea
              className="border mt-5 space-x-2"
              name="feedback"
              id="feedback"
              rows={5}
              ref={feedbackInputRef}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-2 py-1 rounded-md bg-blue-800 hover:bg-blue-600 transition-colors duration-150 text-white mt-5"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
