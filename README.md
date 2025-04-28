Anime Ascension 🎉
Your Ultimate Anime Hub!
Anime Ascension is a 
web app designed for anime enthusiasts to explore and purchase anime merchandise, discover streaming platforms, and engage with the community. Built with modern web technologies, this project offers a responsive and user-friendly experience.

🚀 Features

Shop Anime Merch 🛒: Browse and purchase anime merchandise across categories like Anime Shirts, Hoodies, and Action Figures.
Streaming Platforms 📺: Discover streaming platforms (e.g., Crunchyroll, Netflix) to watch your favorite anime.
User Authentication 🔒: Secure login/registration using Firebase.
Cart Functionality 🛍️: Add, update, and remove items in your cart.
Contact Form 📬: Submit inquiries (requires login).
Responsive Design 📱: Built with Tailwind CSS for a seamless experience across devices.


🛠️ Tech Stack



Category
Technologies



Frontend
React, Vite, Tailwind CSS


Backend
JSON Server (hosted on Render)


Authentication
Firebase


Routing
React Router


Deployment
Netlify (Frontend), Render (Backend)



📊 Project Structure
anime-ascension/
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, background.jpg
│   ├── components/         # React components
│   │   ├── ContactForm.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── MerchList.jsx
│   │   ├── ProductCard.jsx
│   │   └── StreamingLink.jsx
│   ├── context/            # Context providers
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── pages/              # Page components
│   │   ├── CartPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── MerchPage.jsx
│   │   └── StreamingPage.jsx
│   ├── services/           # API and Firebase services
│   │   ├── api.js
│   │   └── firebase.js
│   ├── styles/             # CSS files
│   │   └── custom.css
│   ├── App.css             # App-specific styles
│   ├── App.jsx             # Main app component
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── db.json                 # Mock API data for JSON Server
├── package.json            # Dependencies and scripts
├── LICENSE                 # MIT License
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation


🤝 Contributing
We welcome contributions to Anime Ascension! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a Pull Request.

Please ensure your code follows the project’s coding style and includes tests if applicable.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

📬 Contact
For questions or feedback, reach out to mwamburi60@gmail.com or open an issue on GitHub.

Built with ❤️ for anime fans everywhere!
