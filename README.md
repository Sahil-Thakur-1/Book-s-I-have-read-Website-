
# Books I’ve Read Web App
A simple web app for cataloging and displaying a list of books you’ve read, complete with titles, ratings, summaries, and read dates. Users can sort the list by title, rating, or date and explore frequently asked questions and contact information. This project is built using Node.js, Express, and EJS for templating.

## Table of Contents
<ul> <li>Overview</li> 
 <li>Features</li>
<li>Technologies Used</li>
<liSetup Instructions></li>
<li>File Structure</li>
<li>Usage</li>
<li>Troubleshooting</li>
<li>Contributing</li>
</ul>
  
## Overview
The "Books I’ve Read" app is designed to catalog books, allowing users to view a list of books with summaries and details such as ratings and read dates. This application features dynamic sorting of books and includes FAQ and Contact pages.

## Features
<ul> 
<li>Display a list of books with their titles, summaries, ratings, and read dates.</li>
<li>Sort books by title, rating, or read date.</li>
<li>FAQ page answering common questions about the app.</li>
<li>Contact page for user inquiries.</li>
</ul>

## Technologies Used
<ol>
<li>Node.js and Express for backend server.</li>
<li>EJS for server-side templating.</li>
<li>CSS for basic styling.</li>
</ol>

### Setup Instructions
Prerequisites
<ol>
<li>Node.js and npm installed.</li>
<li>Basic understanding of JavaScript and Express.</li>
</ol>

### Installation Steps
<ol>
<li>Clone the Repository:</li>

```
git clone https://github.com/yourusername/books-ive-read.git
cd books-ive-read
```

<li>Install Dependencies:</li>

```
npm install
```

<li>Start the Server:</li>

```
node app.js
```

<li>View the App:</li>

Open your browser and go to http://localhost:3000 to view the app.

</ol>

## File Structure
```
/books-ive-read
├── app.js              # Main server file
├── public/             # Folder for static assets (CSS, images)
│   └── style.css       # Global stylesheet
├── views/              # Folder for EJS templates
│   ├── index.ejs       # Main page template
│   ├── faq.ejs         # FAQ page template
│   └── contact.ejs     # Contact page template
└── README.md           # Project documentation
```

## Usage
<ol> 
<li>Home Page (/): Lists all books with sorting options (by title, rating, or newest).</li>
<li>Sort by Title (/title): Sorts the books in descending order of titles.</li>
<li>Sort by Rating (/rating): Sorts the books in descending order of ratings.</li>
<li>Sort by Date (/newest): Sorts the books by read date.</li>
<li>FAQ Page (/faq): Provides answers to frequently asked questions.</li>
<li>Contact Page (/contact): Contact form for users to send inquiries.</li>
</ol>

## Troubleshooting
<ol> 
<li>Port Already in Use:</li>
<ul>
<li>If 3000 is already in use, change the port in app.js:</li>

```
const port = process.env.PORT || 3000;
```

<li>Then, use an available port when starting the server.</li>
</ul>

<li>Static Assets Not Loading:</li>
<ul>
<li>Ensure app.use(express.static('public')) is configured correctly.</li>
<li>Verify that the public folder contains your CSS and other static assets.</li>
</ul>
</ol>

## Contributing
Contributions are welcome! Please open an issue to discuss changes or submit a pull request.

## Screenshots
![Screenshot (119)](https://github.com/user-attachments/assets/247b7fb5-319b-47e7-be48-056b0f6250cc)
![Screenshot (122)](https://github.com/user-attachments/assets/bddef5d3-801c-46d5-9f38-80de216c8848)
![Screenshot (121)](https://github.com/user-attachments/assets/0663a557-e47f-418e-823f-7aa17ff8f276)
![Screenshot (120)](https://github.com/user-attachments/assets/ad624c52-ca1b-4dd3-9d8e-218b0c350b1a)
![Screenshot (118)](https://github.com/user-attachments/assets/187c5683-18dd-42a6-9055-bc4fc5bc5743)
