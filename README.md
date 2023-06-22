# Dashboard for CRCS Portal
This project is the Dashboard for the CRCS (Central Registrar of Cooperative Societies) Portal. This Dashboard gives an user friendly experience by giving access to various features of CRCS portal including:
- User Registrar
- User Login
- Real-time status
- Data of registered users
- statistics - showing informative graphs 
- Settings - helping user to manage portal according to them


## Overview
The CRCS Portal Dashboard is built using the following technologies:

- Front-end:
    - SASS
    - JavaScript
    - React.js
    - React Styled Components
    - Express
- Back-end:
    - Node.js
- Database:
    - mySQL


## Features
CRCS portal includes various Features 

- Visualization: The CRCS Portal Dashboard incorporates various visualization techniques to present data, system statistics, and analytics in a visually compelling and easy-to-understand format. Visualizations enable users to grasp complex information quickly, identify patterns, and make informed decisions based on the data insights.

- Interactivity: The Dashboard offers interactive elements and functionalities that allow users to actively engage with the system, perform actions, and receive real-time feedback. The interactive features enhance user productivity, enable seamless task execution, and promote a dynamic user experience.
    - Efficient Task Execution
    - Real-Time Feedback
    - Customization and Personalization
    - Collaboration and Communication
    - Data Exploration and Analysis

- Key Metrics:
    ![WhatsApp Image 2023-06-22 at 5 54 10 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/46504c25-ac81-402d-8c04-2701b928858a)
    - Total Societies
    - Leading State
    - Leading Sector
    - Returns
    ![2](https://github.com/AnirbanOne/Dashboard/assets/124530952/bceacdec-88be-46cb-a8be-dd0588bc16f3)
    - Average Growth in Registration
    - Revenue
    ![3](https://github.com/AnirbanOne/Dashboard/assets/124530952/30013d30-0552-40ad-8cd1-cc47d7365f67)
    - User registration
    ![WhatsApp Image 2023-06-22 at 6 27 45 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/0550ebbf-ddb2-4960-82a6-568f6dfe3e54)
    - Stats
    ![WhatsApp Image 2023-06-22 at 6 48 36 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/1c9b5b8d-4e70-4414-8662-4c29e57ae846)
    ![WhatsApp Image 2023-06-22 at 6 50 31 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/2ec3ed29-3ad6-4418-a3fe-de7e7251b08b)

- Responsive Design: The Dashboard is designed to be responsive, providing an optimal viewing and interaction experience across a wide range of devices and screen sizes. The responsive design ensures that users can access and use the dashboard seamlessly from desktop computers, laptops, tablets, and mobile devices.
    - Desktop view
    ![WhatsApp Image 2023-06-22 at 5 54 10 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/46504c25-ac81-402d-8c04-2701b928858a)
    ![WhatsApp Image 2023-06-22 at 6 20 18 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/d88d9d6d-a167-458e-88ad-1b02cefe2c81)
    - Mobile view
  
    ![WhatsApp Image 2023-06-22 at 5 55 01 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/fd982400-c7bd-40b2-9eb3-14115bf06e3e)
    ![WhatsApp Image 2023-06-22 at 5 55 42 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/1a6299ea-daba-411a-9e7f-5f9e63526480)
    ![WhatsApp Image 2023-06-22 at 5 59 49 PM](https://github.com/AnirbanOne/Dashboard/assets/124530952/316df58c-768a-4ac3-97b8-1f522391fa1f)
    - Light and Dark Mode

- Data Analytics: Following queries in the the repository is responsible for the data analytics: 
    `api>routes>widgets.js`

    ```shell
    const query4 = `
      SELECT State, COUNT(*) AS state_occurrence,
        ((SELECT COUNT(*) FROM why.\`demo.csv\` WHERE State = t.State) / (
          (SELECT COUNT(*) FROM why.\`demo.csv\`) - 
          (SELECT COUNT(*) FROM why.\`demo.csv\` WHERE State = t.State)
        )) * 100 AS percentage
      FROM why.\`demo.csv\` t
      GROUP BY State
      HAVING COUNT(*) = (
        SELECT MAX(state_occurrence)
        FROM (
          SELECT COUNT(*) AS state_occurrence
          FROM why.\`demo.csv\`
          GROUP BY State
        ) subquery
      )`;
  
    const query5 = `
      SELECT \`Sector Type\`, COUNT(*) AS sector_occurrence,
        ((SELECT COUNT(*) FROM why.\`demo.csv\` WHERE \`Sector Type\` = t.\`Sector Type\`) / (
          (SELECT COUNT(*) FROM why.\`demo.csv\`) - 
          (SELECT COUNT(*) FROM why.\`demo.csv\` WHERE \`Sector Type\` = t.\`Sector Type\`)
        )) * 100 AS percentage
      FROM why.\`demo.csv\` t
      GROUP BY \`Sector Type\`
      HAVING COUNT(*) = (
        SELECT MAX(sector_occurrence)
        FROM (
          SELECT COUNT(*) AS sector_occurrence
          FROM why.\`demo.csv\`
          GROUP BY \`Sector Type\`
        ) subquery
      )`;
  
    const query6 = `
      SELECT 
          t1.year AS year,
          t1.user_count,
          ABS(((t1.user_count - t2.user_count_last_year) / t2.user_count_last_year) * 100) AS percentage_increase
      FROM 
          (SELECT 
               YEAR(\`Date of Registration\`) AS year,
               COUNT(*) AS user_count
           FROM 
               why.\`demo.csv\`
           GROUP BY 
               YEAR(\`Date of Registration\`)) t1
      JOIN 
          (SELECT 
               YEAR(\`Date of Registration\`) - 1 AS year_last_year,
               COUNT(*) AS user_count_last_year
           FROM 
               why.\`demo.csv\`
           WHERE 
               YEAR(\`Date of Registration\`) = YEAR(CURRENT_DATE) - 1
           GROUP BY 
               YEAR(\`Date of Registration\`) - 1) t2 ON t1.year = t2.year_last_year
      ORDER BY 
          t1.year ASC;
    `;
    
- User-Friendly Interface: The Dashboard is designed with a user-friendly interface, prioritizing ease of use, intuitiveness, and efficient interaction for users of varying technical backgrounds. The interface is designed to minimize the learning curve and enable users to navigate, understand, and utilize the features and functionalities of the dashboard with minimal effort.
    - Intuitive Navigation
      
    ![1](https://github.com/AnirbanOne/Dashboard/assets/124530952/242c7577-797e-4cb9-ad75-2d3a4618e3a0)
    - Clear and Concise Design
    - Consistent Design Patterns


## Packages and Libraries Used
The following packages and libraries are used in this project:

- `@emotion/react`: Provides CSS-in-JS capabilities for styling components.
- `@emotion/styled`: Enables styled components using Emotion.
- `@mui/icons-material` and `@mui/material`: Material-UI library for pre-built icons and UI components.
- `@mui/x-data-grid`: Data grid component for displaying tabular data.
- `axios`: HTTP client for making API requests.
- `react-burger-menu`: Creates a sidebar menu with a burger icon.
- `react-circular-progressbar`: Renders circular progress bars.
- `react-dom` and `react-router-dom`: React libraries for DOM rendering and routing.
- `recharts`: Data visualization library for creating charts and graphs.
- `sass`: CSS extension language for styling.
- `styled-components`: Enables styled components using CSS-in-JS approach.
- `web-vitals`: Library for measuring web performance metrics.


## Installation
To run the dashboard locally, follow these steps:

1. Clone the repository: `git clone https://github.com/AnirbanOne/Dashboard.git`
2. Navigate to the project directory: `cd dashboard-for-crcs-portal`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.


## Deployment
To deploy the dashboard for production, use the following command:

```shell
  npm run deploy

