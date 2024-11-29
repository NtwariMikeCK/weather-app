# Weather App

## Overview
The Weather App is a user-friendly application that provides accurate and real-time weather information for any city worldwide.
By leveraging a robust weather API, the app delivers essential data such as temperature, humidity, wind speed, and general weather conditions, 
all wrapped in a clean and intuitive interface.

Access the live application here.
https://www.myschoolwork.tech/weather-app/

## Features
- **Real-Time Weather Data:** Get up-to-date weather information for any city.
- **Search Functionality:** Enter the name of a city to retrieve its current weather.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **User-Friendly Interface:** Clean, minimal, and intuitive layout for easy navigation.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **API:** OpenWeatherMap API for fetching real-time weather data.
- **Deployment:** Hosted using GitHub Pages.
- **Web-severs:** NGINX

## How It Works

### Search for a City:
- Type the name of the city in the search bar.
- Press "Enter" or click the "Search" button to view weather details.
### Display Weather Information:
- Current temperature (in Celsius).
- Weather conditions (e.g., cloudy, sunny, rainy).
- Wind speed and humidity levels.

## Getting Started

### 1. Prerequisites
Ensure you have the following installed:
1. A modern web browser (e.g., Chrome, Firefox).
2. Running the App Locally

**To run the app on your local machine:**

*Clone the repository:*

- bash, Copy code
**1. git clone https://github.com/NtwariMikeCK/Weather-App.git**
- Navigate to the project directory:
**2. cd Weather-App**
- Open the index.html file in your browser.

### 2. API Key Setup

- The app uses the OpenWeatherMap API for weather data. To set it up:
- Visit OpenWeatherMap to register and get an API key.
- Replace the placeholder YOUR_API_KEY in the JavaScript file with your actual API key.
- **Api-Endpoint :** "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kigali&appid="
- **Api-key :** **"5e14b4d50630fb643c75e93847a8bd33"**
  

## Deployment
This application is deployed using web-01 and web-02 servers with lb-01 to distribute traffic between the two servers.

steps:
1. Upload your app files to the server, Using SCP or SFTP to copy your app code to the server.
   - **scp -r /path/to/weather-app ubuntu@server-ip:/var/www/weather-app**
2. Edit the Nginx configuration file using a text editor:
   - **sudo vi /etc/nginx/sites-available/default**
3. Add a new location block to serve your Weather App:
   - **#Add this block for the Weather App**
   - **location /weather-app {**
       -**root /var/www/;**
       -**index index.html;**
   - **}**
4. Check for syntax errors in your updated configuration:
   - **sudo nginx -t**
5. If no errors are found, reload Nginx to apply the changes:
   - **sudo systemctl reload nginx**

## Challenges Faced:

**- API Integration:**
    Successfully handled API key security by avoiding exposure in the public repository.
**- Error Handling:**
    Implemented user-friendly messages for invalid inputs or failed API requests.
**- Responsive Design:**
    Ensured the app works seamlessly on both desktop and mobile devices.

## Future Improvements:

- **Weather Forecast:** Add a 7-day forecast feature for selected cities.
- **Location-Based Weather:** Use the browser's geolocation API to show weather for the user's current location.
- **Advanced Visualizations:** Include charts and graphs for temperature trends and other metrics.

## Credits

- **API:** OpenWeatherMap
- **Icons:** Weather icons provided by Flaticon (if applicable).
- **Deployment:** Hosted via GitHub Pages.
