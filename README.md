# 🚀 Smart Data Table (Angular 17+)

A high-performance, scalable data table built with modern Angular features, designed to efficiently handle large datasets (10,000+ rows) with smooth rendering and responsive UI.

---

## 🔗 Live Demo

👉 https://smartdatatable.netlify.app

## 📂 GitHub Repository

👉 https://github.com/ShakimAhamed/SmartDataTable

---

## 📖 Overview

This project demonstrates how to build a performant and scalable frontend application using **modern Angular architecture**. It focuses on optimizing rendering performance, managing state reactively, and building reusable UI components.

The application simulates a real-world enterprise scenario where large datasets must be displayed and manipulated efficiently.

---

## ✨ Key Features

- ⚡ **High Performance Rendering**
  - Virtual scrolling using Angular CDK
  - Efficient DOM updates with `trackBy`
  - Optimized change detection using `OnPush`

- 🔁 **Reactive State Management (Signals)**
  - `signal()` for state
  - `computed()` for derived data (filtering, sorting, pagination)
  - `effect()` for side effects

- 🔍 **Advanced Data Handling**
  - Client-side filtering (search)
  - Dynamic sorting (ID, Name, Value)
  - Pagination with configurable page size

- 🎨 **Modern UI**
  - Responsive layout using Tailwind CSS
  - Clean and minimal design
  - Interactive table with hover states

- 🔗 **RxJS Integration**
  - Demonstrates interoperability using `toSignal()`

---

## 🧠 Architecture & Design Decisions

### 🔹 Signals-Based State Management

Instead of relying solely on RxJS or external libraries, this project uses Angular Signals for:

- Simpler state handling
- Automatic UI updates
- Reduced boilerplate

### 🔹 Performance Optimization Strategy

To handle large datasets:

- Virtual scrolling limits DOM nodes
- `OnPush` reduces unnecessary change detection cycles
- `trackBy` prevents full re-renders

### 🔹 Separation of Concerns

- `data.service.ts` → Data generation / API simulation
- `table.store.ts` → State management (signals)
- `app.ts` → UI interaction logic

---

## 🛠️ Tech Stack

- **Angular 17+ (Standalone Components)**
- **TypeScript**
- **Angular CDK (Virtual Scroll)**
- **RxJS**
- **Tailwind CSS**

---

## 📊 Performance Considerations

This application is optimized for performance:

- Handles **10,000+ rows** smoothly
- Minimizes DOM rendering using virtual scroll
- Avoids unnecessary re-renders with `OnPush`
- Uses computed signals to efficiently derive state

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShakimAhamed/SmartDataTable.git
cd smart-data-table
```
