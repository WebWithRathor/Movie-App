# Movie App

Movie App is a React application that integrates the TMDB API to allow users to search for and browse movies with infinite scrolling. This app uses Redux Toolkit for state management, React Router for navigation, Axios for API requests, and the React Infinite Scroller component for infinite scrolling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- Browse movies with infinite scrolling
- Search movies
- Responsive design
- State management with Redux Toolkit
- Navigation with React Router
- API requests with Axios

## Technologies Used

- React
- Redux Toolkit
- React Router
- Axios
- TMDB API
- React Infinite Scroller
- Tailwind CSS (Responsive Design)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/WebWithRathor/Movie-App.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Movie-App
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

- Browse movies with infinite scrolling.
- Use the search bar to find specific movies.

## Project Structure

Here is a brief overview of the project's structure:


- **public/**: Contains static files like `index.html`.
- **src/**: Contains the main source code for the application.
  - **components/**: Contains reusable components like `MovieCard` and `SearchBar`.
  - **pages/**: Contains page components like `Home`.
  - **redux/**: Contains Redux slices and the store configuration.
  - **App.js**: The root component of the application.
  - **index.js**: The entry point of the application.

## Contributing

Contributions are welcome! If you have any ideas, feel free to fork the repository and submit a pull request. Please make sure to follow the code style and include tests for any new features or bug fixes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request


## Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Infinite Scroller](https://www.npmjs.com/package/react-infinite-scroller)

