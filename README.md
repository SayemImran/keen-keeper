# 🧠 Keen Keeper

Keen Keeper is a modern friendship management web app that helps you stay connected with the people who matter most. Track interactions, manage contact goals, and visualize your communication habits — all in one place.

---

## 🚀 Live Features

- 👥 Manage your friends with detailed profiles  
- 📅 Track interactions like calls, texts, and video chats  
- 📜 View a timeline of all your communication history  
- 📊 Analyze your interaction patterns with visual charts  
- 🔔 Get instant feedback with toast notifications  
- 📱 Fully responsive across mobile, tablet, and desktop  

---

## 🛠️ Technologies Used

- **Next.js (App Router)** – Application framework  
- **React.js** – UI development  
- **Tailwind CSS** – Styling & responsiveness  
- **Recharts** – Data visualization (Pie Chart)  
- **Lucide React** – Icons  
- **React Hot Toast / Sonner** – Notifications  

---

## ✨ Key Features

### 🔝 Navbar
- Logo aligned to the left  
- Navigation links: Home, Timeline, Stats  
- Icons included for each link  
- Active route highlighting  

---

### 🎯 Banner Section
- Centered title and subtitle  
- CTA button (e.g., "Add a Friend") with icon  
- Summary cards displaying key insights  

---

### 👫 Friends Management
- Display friends from a JSON dataset  
- Each card includes:
  - Profile picture  
  - Name  
  - Days since last contact  
  - Tags  
  - Status (color-coded: overdue / almost due / on-track)  
- Responsive 4-column grid layout  
- Click to view detailed profile  

---

### 👤 Friend Details Page

#### Left Panel:
- Profile image, name, status  
- Tags, bio, and email  
- Action buttons:
  - ⏰ Snooze  
  - 📦 Archive  
  - 🗑️ Delete  

#### Right Panel:
- 📊 Stats Cards:
  - Days Since Contact  
  - Goal  
  - Next Due Date  

- 🎯 Relationship Goal Card  
- ⚡ Quick Check-In:
  - Call 📞  
  - Text 💬  
  - Video 📹  

---

### ⚡ Interaction Logging
- Clicking Call / Text / Video:
  - Adds a timeline entry instantly  
  - Includes current date & interaction type  
  - Displays toast notification  

---

### 📜 Timeline Page
- Displays all interaction logs  
- Each entry includes:
  - Date  
  - Icon (Call / Text / Video)  
  - Title (e.g., "Call with Alex")  

- 🔍 Filter by interaction type (Call / Text / Video)

---

### 📊 Friendship Analytics (Stats Page)
- Pie chart visualization using Recharts  
- Shows distribution of:
  - Calls  
  - Texts  
  - Video interactions  

---

### 🦶 Footer
- Clean and minimal footer based on design  

---

### 📱 Responsive Design
- Fully optimized for:
  - Mobile  
  - Tablet  
  - Desktop  

---

## ⚙️ Additional Requirements Implemented

- ✅ **404 Page** for invalid routes  
- ✅ Loading animation while fetching friends data  
- ✅ Toast notifications for interactions  
- ✅ Proper routing (no reload errors after deployment)  

---

## 🌟 Optional Enhancements

- 🔄 Sort timeline entries (Newest / Oldest)  
- 🔍 Search timeline by friend name or interaction type  

---


---

## 📌 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/keen-keeper.git

# Install dependencies
npm install

# Run the development server
npm run dev
```
## Developed by
Sayem Imran Khan 