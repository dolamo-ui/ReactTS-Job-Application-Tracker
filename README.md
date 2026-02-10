# 💼 CareerTrack - Job Application Tracker

<div align="center">
  <img src="screenshots/home.png" alt="CareerTrack Home" width="800"/>
  
  ### Master Your Job Applications
  
  The only platform designed to help you organize your career journey, land your dream job, and optimize every interview phase.
  
  [![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.29.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  
  [Live Demo](https://react-ts-job-application-tracker-nu.vercel.app/) • [Report Bug](https://github.com/yourusername/careertrack/issues) • [Request Feature](https://github.com/yourusername/careertrack/issues)
  
</div>

---

## ✨ Features

### 🎯 Job Application Management
- **Track Applications** - Monitor all job applications in one centralized dashboard
- **Status Updates** - Track progress from Applied → Interview → Offer → Accepted/Rejected
- **Company Profiles** - Save company details, positions, and salary information
- **Application Notes** - Add personalized notes and reminders for each application
- **Timeline Tracking** - View when you applied and follow-up dates

### 🔐 User Authentication
- **Secure Login** - Email and password authentication
- **Social Login** - Sign in with Google or LinkedIn
- **User Registration** - Create new accounts with validation
- **Password Recovery** - Reset forgotten passwords
- **Session Management** - Persistent login sessions

### 📊 Smart Dashboard
- **Application Statistics** - View total applications, interview rate, and success metrics
- **Visual Analytics** - Charts and graphs showing your job search progress
- **Quick Actions** - Add new applications with one click
- **Search & Filter** - Find applications by company, position, or status
- **Responsive Design** - Works seamlessly on all devices



### 🎨 Modern UI/UX
- **Smooth Animations** - Powered by Framer Motion
- **Clean Interface** - Intuitive and professional design
- **Dark/Light Theme** - Comfortable viewing in any environment
- **Mobile Responsive** - Optimized for desktop, tablet, and mobile

---

## 📸 Screenshots

<div align="center">
  
  ### Landing Page
  <img width="1909" height="4930" alt="image" src="https://github.com/user-attachments/assets/b7257c43-8947-42b5-adcd-3aa6ad93f17a" />

  
  *Master your job applications with our intelligent platform*
  
  ### Login Portal
 <img width="1909" height="1344" alt="image" src="https://github.com/user-attachments/assets/21fbb80d-e3c4-413a-9bbe-94e7fc3eda6d" />

  
  *Secure authentication with social login options*
  
</div>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **npm** or **yarn** package manager
- **json-server** (for mock backend) - We'll install this in the setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/careertrack.git
   cd careertrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install JSON Server globally (for the mock API)**
   ```bash
   npm install -g json-server
   # or
   yarn global add json-server
   ```

---

## 🗄️ Running the Database (JSON Server)

The application uses `json-server` to simulate a REST API with authentication endpoints.

### Step 1: Start the JSON Server

Open a **new terminal window** and run:

```bash
json-server --watch db.json --port 3000
```

This will start the mock API server at `http://localhost:3000`




## 🏃 Running the Application

After starting the JSON Server, open a **new terminal window** and start the React app:

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

### Running Both Servers

You need **two terminal windows**:

**Terminal 1 - JSON Server (Backend)**
```bash
json-server --watch db.json --port 3000
```

**Terminal 2 - React App (Frontend)**
```bash
npm run dev
```

---



## 🛠️ Built With

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.3 | UI framework |
| **TypeScript** | 5.8.2 | Type safety |
| **Vite** | 6.2.0 | Build tool and dev server |
| **Framer Motion** | 12.29.0 | Animations |
| **React Router DOM** | 7.13.0 | Client-side routing |
| **Lucide React** | 0.563.0 | Icon library |
| **JSON Server** | Latest | Mock REST API |

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `json-server --watch db.json --port 3000` | Start mock API server |

---



## 🎯 Key Features Explained

### Application Tracking System

Track every stage of your job search:

1. **Applied** - Initial application submitted
2. **Interview** - In the interview process
3. **Offer** - Received job offer
4. **Accepted** - Accepted the position
5. **Rejected** - Application unsuccessful

### Statistics Dashboard

View important metrics:
- **Total Applications** - Track how many jobs you've applied to
- **Interview Rate** - Percentage of applications leading to interviews
- **Days to Hire** - Average time from application to offer
- 

---

## 🔐 Authentication Flow

### Registration Process
1. User fills out registration form
2. Validation checks (email format, password strength)
3. POST request to `/users` endpoint
4. User created in database
5. Automatic login and redirect to dashboard

### Login Process
1. User enters email and password
2. GET request to `/users?email={email}`
3. Password verification
4. Session token generated
5. User data stored in localStorage
6. Redirect to dashboard


---





### Filtering Applications by User

```typescript
// Get all applications for user ID 1
fetch('http://localhost:3000/applications?userId=1')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🎨 Customization

### Changing Theme Colors

Edit the color scheme in your components:

```typescript
// Primary brand color
const primaryColor = '#2563EB'; // Blue

// Accent color
const accentColor = '#7C3AED'; // Purple

// Success color
const successColor = '#10B981'; // Green
```

### Adding New Application Statuses

Update the status options in `types.ts`:

```typescript
export type ApplicationStatus = 
  | 'Applied' 
  | 'Interview' 
  | 'Offer' 
  | 'Accepted' 
  | 'Rejected'
  | 'Withdrawn'  // Add new status
  | 'On Hold';   // Add new status
```

---

## 🐛 Troubleshooting

### Issue: JSON Server Not Starting

**Solution:**
```bash
# Install json-server globally
npm install -g json-server

# Or use npx (no global install needed)
npx json-server --watch db.json --port 3000
```



### Issue: Database Changes Not Saving

**Solution:**
- Make sure `db.json` is not read-only
- Check file permissions
- Ensure JSON Server is running with `--watch` flag

### Issue: Cannot Login

**Solution:**
- Verify JSON Server is running on port 3000
- Check browser console for API errors
- Verify user exists in `db.json`
- Clear browser localStorage: `localStorage.clear()`

---

## 🚀 Deployment

### Deploy Frontend to Vercel

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```






## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for UI
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [JSON Server](https://github.com/typicode/json-server) - Mock REST API
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📞 Support

Having trouble? Here's how to get help:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information

---

## 💡 Tips for Using CareerTrack

### Best Practices
- ✅ Add applications immediately after applying
- ✅ Update status as soon as you hear back
- ✅ Set reminders for follow-ups (7-10 days)
- ✅ Track all communications in notes
- ✅ Save job descriptions for interview prep
- ✅ Note the recruiter's name and contact info

### Success Tips
- 📊 Apply to 10-15 jobs per week
- 📧 Follow up on applications after 1 week
- 🎯 Tailor your resume for each position
- 💼 Prepare questions for every interview

---

<div align="center">
  
  ### ⭐ Star this repo if you find it useful!
  
  Made with ❤️ by job seekers, for job seekers
  
  **CareerTrack** - Your journey to the dream job starts here
  
  [Get Started Now](https://react-ts-job-application-tracker-nu.vercel.app/) 🚀
  
</div>
