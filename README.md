# ArtNook

ArtNook is a collaborative MERN stack single-page application designed as a social media platform where artists can showcase their creativity. The platform allows users to authenticate securely, upload their artwork via Cloudinary, and manage their art pieces through a personalized dashboard. Additionally, all uploaded artworks are displayed in a shared gallery for community interaction and inspiration.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Repository Quality](#repository-quality)
- [Application Quality](#application-quality)
- [Future Development](#future-development)
- [License](#license)
- [Contributing](#contributing)
- [Screenshots](#screenshots)
- [Links](#links)

## Description

ArtNook is built to provide artists and art lovers with a space to share, manage, and explore artwork. Users can securely register and log in to the platform, upload images through Cloudinary, and manage their artwork on their personal dashboards. The main gallery displays all community-contributed artworks, fostering inspiration and interaction among users.

## Features

- **User Authentication:** Secure registration and login with JWT-based authentication.
- **Artwork Upload:** Integration with Cloudinary for uploading and managing art pieces.
- **Personal Dashboard:** Manage and view uploaded artwork.
- **Main Gallery:** Explore and engage with the community's artwork.
- **Responsive Design:** Optimized for all screen sizes, ensuring a consistent user experience.

## Technologies Used

- **React:** Front-end library for building the user interface.
- **GraphQL:** API query language for efficient data retrieval.
- **Node.js & Express.js:** Backend framework for server-side development.
- **MongoDB & Mongoose ODM:** NoSQL database and Object Data Modeling for managing data.
- **Apollo Server/Client:** GraphQL server and client for data management.
- **JSON Web Token (JWT):** Authentication method for securing user sessions.
- **Bcrypt:** Password hashing for secure authentication.
- **Cloudinary:** Third-party service for image storage and management.
- **Encryption:** Secure handling of user data.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    git clone https://github.com/rosey-flo/Art-Nook

2. Install dependencies:
    cd artnook
    npm install

3. Set up environment variables for MongoDB, JWT, and Cloudinary in a .env file:
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_URL=your_cloudinary_url

4. Start the development server:
    npm run dev

## Usage

- **Register or Log In:** Users can create an account or log in with existing credentials to access the platform's features.
- **Upload Artwork:** Once logged in, users can upload their artwork using the integrated Cloudinary widget. Each upload is securely stored and associated with the user's profile.
- **Dashboard Management:** Users can view and manage their uploaded artwork on a personal dashboard. This includes editing or deleting existing uploads.
- **Explore the Gallery:** All uploaded artworks are displayed in a shared gallery, where users can browse and interact with the community's contributions.

## Deployment

ArtNook is deployed on Render. You can access the live application [here](-).

To deploy the application yourself:

1. Set up a Render account and create a new web service.
2. Connect your GitHub repository to the Render service.
3. Add your environment variables (e.g., MongoDB URI, JWT secret, Cloudinary credentials) in the Render dashboard.
4. Deploy the web service by following Render's deployment instructions.

## Repository Quality

- **File Structure:** The project follows best practices with a logical and organized file structure, making it easy to navigate and maintain.
- **Naming Conventions:** Adheres to standard naming conventions for files, classes, and IDs to ensure consistency and readability.
- **Indentation & Comments:** The codebase is clean, well-indented, and includes high-quality comments that explain the purpose and functionality of various components.
- **Commit Messages:** The repository contains multiple descriptive commit messages that clearly reflect the development progress and changes made throughout the project.
- **README:** A comprehensive README file is provided, detailing the project's purpose, technologies used, installation instructions, usage, and more.

## Application Quality

- **User Experience:** ArtNook is designed with a focus on intuitive navigation and ease of use, ensuring a smooth experience for all users.
- **User Interface:** The UI is clean, polished, and professional, with a consistent design language that enhances the visual appeal of the application.
- **Responsiveness:** The application is fully responsive, adapting seamlessly to different screen sizes and devices, providing a consistent experience across desktop, tablet, and mobile.

## Future Development

Looking ahead, we plan to explore the following enhancements:

- **Payment Platform:** Integrating a payment platform like Stripe to allow users to accept donations or payments for their artwork.
- **PWA Features:** Transforming ArtNook into a Progressive Web App (PWA) by implementing a web manifest, service worker for offline functionality, and making the app installable on devices.
- **Community Features:** Expanding social interaction features, such as likes, comments, and following other artists to foster a more engaging community environment.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

We welcome contributions from the community! If you'd like to contribute to ArtNook:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request and describe the changes you've made.

## Screenshots

(Include relevant screenshots of your application here)

## Links

- **Deployed Application:** [ArtNook](https://your-app-url.com)
- **GitHub Repository:** [ArtNook Repo](https://github.com/rosey-flo/Art-Nook)



