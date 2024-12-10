# NC News Frontend

## **Project Overview**

NC News Frontend is a React.js-based web application that interacts with the **NC News API** backend to display articles, comments, and user data. The frontend is designed to provide a dynamic and responsive user interface, utilizing **React Router** for navigation and **React Context** for managingstate. This project was developed as part of the **Northcoders** bootcamp to demonstrate proficiency in frontend development, including UI design, API integration, and user interaction handling.

---

## **Key Features**

### **Article Display**
- Users can view a list of articles, including information such as the title, author, topic, and vote count.
- Articles can be sorted by various criteria including date, vote count, and comment count.
- Users can view detailed information for individual articles, including comments and vote interactions.

### **User Authentication**
- The app uses React's Context API to manage user authentication state, allowing users to log in and see their profile with an avatar and username.
- Conditional rendering is implemented to display personalized content for logged-in users.

### **Voting System**
- Users can vote on articles, either upvoting or downvoting content, which updates the article's vote count in real-time.

### **Topic Filtering**
- Users can filter articles by topic, enabling them to focus on specific content areas such as **Coding**, **Cooking**, or **Football**.

---

## **Technologies Used**

### **Frontend**
- **React.js**: JavaScript library for building dynamic user interfaces with a component-based architecture.
- **React Router**: Library for handling client-side routing and page navigation within the application.
- **React Context API**: Used for managing global state, such as user authentication data, and passing it throughout the app.
- **CSS**: Styling is handled through custom CSS classes for a responsive and visually appealing layout.
- **Axios**: HTTP client for interacting with the backend API to fetch and manage data.

---

## **Development Experience**

This project provided valuable experience in the following areas:

- **Frontend development with React**: Building a dynamic, component-based user interface that interacts with an API.
- **API integration**: Fetching data from the **NC News API** backend, including handling asynchronous operations with `axios` and managing the state with `useState` and `useEffect`.
- **State management with React Context**: Using the Context API to manage global state across the application, such as user authentication and article data.
- **Routing and navigation**: Implementing React Router for smooth transitions between pages (e.g., home, topics, single article view).
- **Responsive design**: Ensuring the application is responsive and visually appealing across different screen sizes.

---

## **Frontend Pages**

The frontend is structured into several pages, each of which provides a different view for the user:

- **Home**: Displays a list of all articles with sorting options.
- **Topic List**: Displays articles filtered by specific topics (e.g., Coding, Cooking, Football).
- **Single Article**: Shows detailed information for an individual article, including the title, author, comments, and vote buttons.
- **User Profile**: Displays the current user's profile, including their avatar and username.

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/PerryCole96/fe-nc-news
   cd fe-nc-news
   
2. Install dependencies
   ```bash
   npm install
   
3. ```bash
   npm run dev
   
Visit http://localhost:3000 in your browser to view the application.
     
  
