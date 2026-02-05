
# 🌦️ Weather Intelligence Web Application

A **production-ready weather intelligence platform** that provides **real-time, hourly, and 7-day weather forecasts** using reliable external APIs with four parameters - **Feels Like temp, Humidity, WindSpeed and Pressure**. The application is built with a strong focus on **performance, reliability, and clean UI/UX**, ensuring a fast and seamless user experience across devices.

🔗 **Live Demo:** _https://weather-app-preet-monga.netlify.app/_

(As the API is trial time-based, it might not work properly. Some features may not display correctly.

Here is the screenshot -

<img width="1578" height="969" alt="image" src="https://github.com/user-attachments/assets/6a8ceb65-5fb1-4e30-862d-36612147e509" />

Also, there is a video on my LinkedIn to see how it works - 

_https://www.linkedin.com/feed/update/urn:li:activity:7327587704660025345/_


---

## 🚀 Features

- 🌍 **Real-Time Weather Data**  
  Fetches live weather conditions for any location using WeatherAPI.

- ⏱️ **Hourly & 7-Day Forecasts**  
  Displays short-term and extended forecasts with structured and readable UI.

- ⚡ **Optimized Asynchronous Data Flow**  
  Implements async JavaScript for low-latency data fetching and smooth UI updates.

- 🛡️ **Robust Error Handling**  
  Handles invalid locations, API failures, and network issues with graceful fallback states.

- 📱 **Fully Responsive Design**  
  Mobile-first layout ensuring consistent experience across desktops, tablets, and phones.

- 🧩 **Clean & Maintainable Codebase**  
  Modular structure with clear separation of concerns for scalability and easy maintenance.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **API:** WeatherAPI  
- **Architecture:** API-driven, asynchronous client-side rendering  

---

## 📂 Project Structure
├── index.html # Application entry point

├── style.css # Styling and responsive layout

├── script.js # Core logic, API integration, async handling

└── README.md # Project documentation

---

## ⚙️ How It Works

1. User enters a city or location.
2. The application sends an asynchronous request to **WeatherAPI**.
3. API responses are validated and processed.
4. Weather data is dynamically rendered on the UI.
5. Errors (invalid input, network issues) are handled gracefully.

---

## 🔧 Setup & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/PreetMongaPM/WeatherApp.git
2. Navigate to the project directory and open index.html in a browser.

(No backend or server setup required)

📈 Future Enhancements

- Location auto-detection using Geolocation API

- API response caching to reduce redundant calls

- Dark mode support

- Temperature unit toggle (°C / °F)

- Backend integration for analytics and logging

👨‍💻 Author

Preet Monga

**GitHub**: https://github.com/PreetMongaPM

**LinkedIn**: https://linkedin.com/in/preetmongapm

📄 License
This project is licensed under the MIT License.
