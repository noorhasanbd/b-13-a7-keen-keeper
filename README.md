
Project Name: Keen-Keeper
Description: This is a friendship management app with three pages (Home, Timeline and Stats)

**Technologies Used:** 
For creation of the web app - I have used followwing technologies 
1. React.js for frontend design
2. React Route for navigating between pages home, friendDetail, timeline and stats
3. React Toast for interactive notification when button is clicked
4. Tailwind and daisy UI for modern and clean layout
5. Recharts for representing data on Stats page
6. Context Api for handling data globally
7. localStorage for storing data into browser localStorage

**Key Features**
1.  **Friendship Analytics (Stats):** A dynamic Pie Chart that visualizes the communication breakdown (Calls vs. Texts vs. Video Calls) using Recharts.
2.  **Persistent Interaction Timeline:** Call, Text and Video call log are shown in this page.
3.  **Dynamic Friend Data:** Friend Data is fetched from json data filee. Friends summary is presented in homepage with clickable cards which redirects to friend detail layout
4.  **Smart Status Tracking:** Visual indicators ("On-Track", "Almost Due", "Overdue") based on real data to help prioritize who to contact next.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
