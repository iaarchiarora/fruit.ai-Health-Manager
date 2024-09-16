# Fruit.ai-Health-Manager-Product
Fruit.ai is an AI-powered health manager that provides personalized fruit recommendations, translation services, and dynamic chat interactions to help you make informed dietary choices and simplify your health management. Our goal is to make healthy living more accessible and enjoyable through innovative technology.
---------------------------------------------------------------------------------------------------------------
Key Features
Landing Page: A modern and responsive landing page designed with React and styled using CSS.
Chatbot: Interactive chatbot powered by the Gemini API, designed for engaging conversations.
About Page: Information about the application and its features.
FAQ Management: A CRUD (Create, Read, Update, Delete) interface for managing Frequently Asked Questions (FAQ).
Language Translation: Translate text into five different languages.
----------------------------------------------------------------------------------------------------------------
Getting Started
To set up the project locally, follow these steps:
Open your terminal or command prompt
1. Navigate to the Backend Directory in Fruit.ai-HealthManager
change to the `backend` directory:
cd backend
python -m venv venv
venv\Scripts\activate
On macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
                                        -------------------
2. Navigate to Frontend Directory in Fruit.ai-HealthManager
cd..
npm install
npm run dev
-------------------------------------------------------------------------------------------------------------------
Contributing
If you'd like to contribute to this project, please follow these steps:
Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
------------------------------------------------------------------------------------------------------------------
License
This project is licensed under the MIT License - see the LICENSE file for details.
