
# 🛡️ Asset Reliability Monitoring System (ARMS)

### _Predict. Prevent. Perform._

[![Live Demo](https://img.shields.io/badge/Live_Demo-arms--supabase.vercel.app-2ea44f?style=for-the-badge&logo=vercel&logoColor=white)](https://arms-supabase.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()
[![Built with](https://img.shields.io/badge/Built_with-Next.js_&_Supabase-000?style=for-the-badge&logo=next.js&logoColor=white)]()

![ARMS Hero Banner](https://via.placeholder.com/1200x400/0a192f/4a9eff?text=ARMS+-+Asset+Reliability+Monitoring+System)

## 🧠 The Big Picture

In the world of industrial operations, **unplanned downtime is the enemy**. ARMS is your digital sentinel — a modern, cloud-native system that continuously watches over your critical assets, interprets their health signals, and empowers your team with actionable reliability insights.

**Think of it as a "fitness tracker" for your machinery and infrastructure.**

> 🔐 **Live Demo Access:** [https://arms-supabase.vercel.app/](https://arms-supabase.vercel.app/)  
> *Enter your credentials to explore the dashboard (demo credentials available upon request).*

---

## ✨ Features at a Glance

| Module | What it does | Why it matters |
| :--- | :--- | :--- |
| 📊 **Condition Monitoring** | Tracks real-time asset parameters (vibration, temp, pressure) | Catch anomalies before they become failures |
| 📈 **Performance Analytics** | Visualizes trends & efficiency metrics | Optimize maintenance intervals & energy use |
| 🔔 **Reliability Alerts** | Intelligent, context-aware notifications | Reduce noise, focus on critical actions |
| 🗂️ **Asset Registry** | Centralized digital twin of your equipment | Single source of truth for maintenance teams |
| 📉 **MTBF/MTTR Tracking** | Automates reliability KPIs | Prove ROI of your reliability program |

---

## 🚀 Tech Stack

This isn't your grandfather's CMMS. Built for speed, scale, and developer joy:

- **Frontend:** Next.js 14 (App Router), Tailwind CSS, shadcn/ui
- **Backend & DB:** Supabase (PostgreSQL, Auth, Realtime)
- **Deployment:** Vercel
- **Auth:** Supabase Auth (Magic Link / Email & Password)
- **Charts:** Recharts / Tremor

```mermaid
graph LR
    A[User] --> B[Vercel / Next.js]
    B --> C[Supabase Auth]
    B --> D[Supabase API]
    D --> E[(PostgreSQL)]
    D --> F[Realtime WebSocket]
    F --> B
