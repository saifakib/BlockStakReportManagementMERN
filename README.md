# Report Management API

The Report Management API is designed to manage reports and user authentication. This document provides an overview of the available endpoints and their functionalities.

## Authentication

### Register

- **Endpoint:** `/api/v1/auth/register`
- **Method:** `POST`
- **Description:** Allows users to register by providing their information such as name, email, phone, password, address, profession, favoriteColors, and isAdmin.
- **Authentication:** Not required.

### Login

- **Endpoint:** `/api/v1/auth/login`
- **Method:** `POST`
- **Description:** Allows registered users to log in by providing their email and password.
- **Authentication:** Not required.

### Refresh Token

- **Endpoint:** `/api/v1/auth/refreshToken`
- **Method:** `POST`
- **Description:** Refreshes the access token using a valid refresh token.
- **Authentication:** Not required.

## Reports

### Get All Reports

- **Endpoint:** `/api/v1/reports`
- **Method:** `GET`
- **Description:** Retrieves a list of all reports.
- **Authentication:** Required.

### Create a Report

- **Endpoint:** `/api/v1/reports`
- **Method:** `POST`
- **Description:** Creates a new report by providing report details such as name, email, phone, address, profession, and favoriteColors.
- **Authentication:** Required.
- **Authorization:** Required (Admin only).

### Update a Report

- **Endpoint:** `/api/v1/reports/:id`
- **Method:** `PUT`
- **Description:** Updates an existing report by providing report details such as name, email, phone, address, profession, and favoriteColors. Requires the report's ID as a parameter.
- **Authentication:** Required.
- **Authorization:** Required (Admin only).

### Delete a Report

- **Endpoint:** `/api/v1/reports/:id`
- **Method:** `DELETE`
- **Description:** Deletes an existing report. Requires the report's ID as a parameter.
- **Authentication:** Required.
- **Authorization:** Required (Admin only).


--
Before you begin, ensure you have met the following requirements:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB

### Run this Project
   ```bash
   git clone https://github.com/saifakib/BlockStakReportManagementMERN.git
   cd your-project-name
   npm install
   npm run dev
   ```

### Postman Collection

To test the API endpoints, you can use the provided Postman collection. Import the collection into Postman to access pre-configured requests.

- [Postman Collection](https://www.postman.com/fuchisia/workspace/report-management-api)


