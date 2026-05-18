# AI Resume Ranker

A production-ready MVP for ranking candidate resumes against job descriptions using AI/NLP matching.

## Architecture
- **Frontend**: Next.js 15+ (App Router), React 19, Tailwind CSS, Zustand, Framer Motion
- **Backend**: Express.js, Node.js, Multer, PDF-Parse, Custom Match Engine
- **Deployment Structure**: Designed for Vercel (Frontend) and Render/Railway (Backend).

## Setup & Local Development

### 1. Server (Backend)
Navigate to the server directory:
```bash
cd server
npm install
npm run dev
```
The server will run on `http://localhost:5000`

### 2. Client (Frontend)
Open a new terminal and navigate to the client directory:
```bash
cd client
npm install
npm run dev
```
The frontend will run on `http://localhost:3000`

## Features
- **Upload Multiple Resumes**: Parses PDFs directly.
- **Skill Extraction**: Matches required JD skills against candidate resumes (including keyword variations).
- **Experience Calculation**: Extracts months of experience intelligently.
- **Score Generation**: Sorts candidates based on percentage match.
- **Beautiful UI**: Preserved animated Aurora background and modern dark-mode aesthetic.

## Deployment
1. Deploy `server` directory on Render/Railway.
2. Deploy the root directory on Vercel. Set `Root Directory` in Vercel settings to `client`, or rely on `vercel.json`. Update the proxy rewrite in `vercel.json` to point to your live backend API URL.
