import { useState } from "react";
import "../Styles/Faq.css";

const initialFAQs = [
  {
    id: 1,
    question: "What is the nutritional value of avocados?",
    answer: "Avocados are rich in healthy fats, particularly monounsaturated fat, which can help lower bad cholesterol levels. They also provide vitamins E, K, and B6, and are high in fiber.",
    image: "https://via.placeholder.com/150",
    userId: 1,
  },
  {
    id: 2,
    question: "How do blueberries benefit health?",
    answer: "Blueberries are high in antioxidants, which help fight free radicals and reduce inflammation. They are also good for heart health and may improve memory and cognitive function.",
    image: "https://via.placeholder.com/150",
    userId: 2,
  },
  {
    id: 3,
    question: "What are the health benefits of kale?",
    answer: "Kale is packed with vitamins A, C, and K, as well as antioxidants. It's also a good source of fiber and calcium, which can support bone health and digestion.",
    image: "https://via.placeholder.com/150",
    userId: 3,
  },
];

const Faq = () => {
  const loggedInUserId = 1;
  const [faqs, setFaqs] = useState(initialFAQs);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "", image: "" });
  const [isEditing, setIsEditing] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddFAQ = (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer) {
      setFaqs([...faqs, { ...newFAQ, id: Date.now(), userId: loggedInUserId }]);
      setNewFAQ({ question: "", answer: "", image: "" });
      setIsFormVisible(false);
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  const handleEditFAQ = (id) => {
    const faqToEdit = faqs.find((faq) => faq.id === id);
    setNewFAQ({ ...faqToEdit });
    setIsEditing(id);
    setIsFormVisible(true);
  };

  const handleUpdateFAQ = (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer) {
      setFaqs(
        faqs.map((faq) =>
          faq.id === isEditing
            ? { ...newFAQ, id: isEditing, userId: loggedInUserId }
            : faq
        )
      );
      setIsEditing(null);
      setNewFAQ({ question: "", answer: "", image: "" });
      setIsFormVisible(false);
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  const handleDeleteFAQ = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <button
          className="add-faq-button"
          onClick={() => {
            setNewFAQ({ question: "", answer: "", image: "" });
            setIsEditing(null);
            setIsFormVisible(true);
          }}
        >
          Add FAQ
        </button>
      </header>

      {isFormVisible && (
        <div className="faq-form">
          <h3>{isEditing ? "Edit FAQ" : "Add New FAQ"}</h3>
          <form onSubmit={isEditing ? handleUpdateFAQ : handleAddFAQ}>
            <input
              type="text"
              placeholder="Enter the question"
              value={newFAQ.question}
              onChange={(e) =>
                setNewFAQ({ ...newFAQ, question: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Enter the answer"
              value={newFAQ.answer}
              onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
              required
            ></textarea>
            <input
              type="text"
              placeholder="Image URL"
              value={newFAQ.image}
              onChange={(e) => setNewFAQ({ ...newFAQ, image: e.target.value })}
            />
            <button type="submit" className="submit-button">
              {isEditing ? "Update FAQ" : "Add FAQ"}
            </button>
          </form>
        </div>
      )}

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <img
              src={faq.image || "https://via.placeholder.com/150"}
              alt="FAQ visual"
              className="faq-image"
            />
            <div className="faq-content">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
            {faq.userId === loggedInUserId && (
              <div className="faq-actions">
                <button className="edit-button" onClick={() => handleEditFAQ(faq.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteFAQ(faq.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
