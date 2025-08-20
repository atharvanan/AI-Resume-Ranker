# AI Resume Ranker

AI Resume Ranker is a web application that uses **Artificial Intelligence** to evaluate and rank resumes against a given job description. It helps recruiters, HR teams, startups, and job seekers by providing clear, skill-based insights to make hiring smarter, faster, and fairer.

---

## ❓ Why This Project?
Recruiters often receive hundreds of resumes, making it difficult to quickly identify the best candidates.  
This project solves that by automatically matching resume skills with job description skills, highlighting **matched vs missing skills** and ranking resumes based on relevance and experience.  
It saves **time, effort, and improves hiring decisions**.

---

## 🚀 Features
- Upload multiple resumes in **PDF format**.
- Enter **comma-separated IT skills** for the job description (e.g., `React.js, Node.js, AWS, Docker`).
- Instantly view:
  - Matching skills ✅
  - Missing skills ❌
  - Resume scores 📊
  - Candidate experience (if detected).
- Beautiful and interactive **dashboard-style results**.
- **About section** describing platform benefits.

---

## 🛠️ Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- Framer Motion (animations)
- Axios (API calls)

### Backend:
- Node.js (Express.js)
- pdf-lib / pdfjs-dist (PDF parsing)
- Custom Skill Matching Logic

### Database / Skills Source:
- `skills-database.js` (Custom curated skill set)

---

## 📂 Project Structure

```
AI-Resume-Ranker/
│── backend/
│   ├── app.js                # Main backend (API + Resume Scoring)
│   ├── skills-database.js    # Skillset source file
│
│── frontend/
│   ├── src/
│   │   ├── App.js            # Main frontend UI
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Styling (Tailwind + custom styles)
│
│── README.md                 # Project documentation
│── package.json              # Dependencies
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/atharvanan/AI-Resume-Ranker
cd AI-Resume-Ranker
```

### 2. Install Dependencies

For Backend:
```bash
cd backend
npm install
```

For Frontend:
```bash
cd frontend
npm install
```

### 3. Run the Application

Start Backend:
```bash
cd backend
node app.js
```

Start Frontend:
```bash
cd frontend
npm start
```

---

## 📊 How It Works
1. User uploads resumes (`.pdf` format).
2. User pastes **comma-separated IT skills** in the JD box.
3. Backend extracts text from resumes and compares with provided skills.
4. Results are calculated:
   - ✅ Matching skills
   - ❌ Missing skills
   - 📈 Resume score (based on skill match %)
   - ⏳ Experience (if mentioned in resume)
5. Results displayed in a **beautiful, interactive dashboard**.

---

## 🎯 Use Cases
- **Recruiters** → Quickly shortlist candidates with precision.
- **HR Teams** → Save hours in manual screening.
- **Job Seekers** → Check your resume against job postings before applying.

---

## 🎥 Demo Video

[▶️ Watch the demo video on Google Drive](https://drive.google.com/file/d/1A2m_cC7TI9ab5vWVVaE4-A8Wxmih2JJC/view?usp=sharing)

---

## 📌 Future Improvements
- Multi-format resume parsing (DOCX, TXT).
- Export results as PDF/CSV.
- Add user authentication for recruiters/job seekers.
- Enhance dashboard with charts & filtering.
- Optimize for large-scale resume uploads.
- Expand support for non-IT skills (e.g., Marketing, Finance, Healthcare).

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork, submit issues, or create PRs.

---

## 👨‍💻 Author
Built by Atharva Nandurkar (https://github.com/atharvanan) 🚀
