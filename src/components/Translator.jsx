import { useState } from "react";
import axios from "axios";
import "../Styles/Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("fr"); // Default to French ('fr')

  const translateText = async () => {
    const apiKey = "AIzaSyBrBqBEN9lp3PZJckRbsBEE4YpJMEzb3Ic";
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(
        url,
        {
          q: inputText,
          source: "en",
          target: targetLanguage,
          format: "text",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("Translation failed. Please try again.");
    }
  };

  return (
    <div className="translator-wrapper">
      <div className="translator-box">
        <h1 className="translator-title">Text Translator</h1>

        <textarea
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="input-textarea"
        />

        <select
          className="language-dropdown"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          {/* Add more languages as needed */}
        </select>

        <button onClick={translateText} className="translate-btn">
          Translate
        </button>

        {translatedText && (
          <div className="result-box">
            <h2>Translation:</h2>
            <p className="result-text">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
