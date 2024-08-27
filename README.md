```markdown
# Car Dealer App

This is a simple car dealer application built with Next.js. The app allows users to select a vehicle type and model year, and view the available models for that selection.

## Features

- Select vehicle type and model year.
- View available vehicle models based on the selection.
- Loading state handling during data fetching.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn** (v1.22 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/holus-bolus/car-dealer-app.git
   cd car-dealer-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Development

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the application at `http://localhost:3000`.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

This will create an optimized build in the `.next` directory.

## Starting the Production Server

After building the application, you can start the production server with:

```bash
npm start
```

or

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

## Folder Structure

```
.
├── app
│   ├── page.js         # HomePage component
│   ├── result          # Result page component
│   │   ├── [makeId]    # Dynamic routing for makeId
│   │   └── [year]      # Dynamic routing for year
├── public              # Static files like images
├── styles              # Global styles
├── .prettierrc         # Prettier configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```