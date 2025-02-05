# BookATutor

**BookATutor** is a fully responsive web application designed to help users find, book, and review tutors. The platform supports login and registration functionality with Google login via Firebase,JWT authentication, and a private route system to ensure only authenticated users can access certain features.

## Live URL
[BookATutor Live](#) *(https://tutor-project-62018.web.app)*

## Key Features
* **User Authentication**: 
  * Login and registration via email and Google using Firebase Authentication.
  * JWT authentication token for secure access to private routes.
  
* **Private Routes**: 
  * Certain features are only accessible to authenticated users, ensuring a personalized experience.
  
* **Find and Book a Tutor**: 
  * Users can search for tutors based on their preferences and book sessions.
  
* **Add Reviews**: 
  * Users can leave reviews for tutors they've interacted with.
  
* **Add Tutor Tutorials**: 
  * Tutors can upload and manage their tutorials.
  
* **Manage Tutorials**: 
  * Tutors can view, update, or delete the tutorials they have uploaded.

* **Data Storage**:
  * MongoDB is used for storing tutor profiles, reviews, and tutorial content.

## Technologies Used
* **React**: Frontend library for building the user interface.
* **Firebase**: User authentication and real-time database services.
* **JWT**: JSON Web Token for secure authentication and access control.
* **MongoDB**: For storing tutor profiles, reviews, and tutorials.
* **Toast Notifications**: For displaying quick messages like success or errors.
* **React Icons**: For customizable icons throughout the application.
* **LottieFiles**: To add interactive animations to enhance the user experience.

## 🛠 How to Run the Project Locally

Follow these steps to set up and run the project on your local machine using **VS Code**.

1️⃣ **Clone the Repository**  
   git clone https://github.com/IsmotaraDipty43/Book_Tutor_Client 

2️⃣ **Navigate to the Project Folder**  
   cd book-a-tutor  

3️⃣ **Open the Project in VS Code**  
   code .  

4️⃣ **Install Dependencies**  
   npm install  

5️⃣ **Set Up Environment Variables**  
   - Create a `.env` file in the root directory  
   - Add required environment variables (e.g., API keys, database URLs)  

6️⃣ **Run the Development Server**  
   npm run dev  


## Dependencies Used  
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.11.2",
    "firebase": "^9.6.1",
    "jsonwebtoken": "^9.0.0",
    "axios": "^1.3.4",
    "mongoose": "^6.9.1",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "dotenv": "^16.0.3",
    "react-toastify": "^9.0.1",
    "lottie-react": "^2.3.4"
  }
}





