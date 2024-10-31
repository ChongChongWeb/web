import React from 'react';
import ReactDOM from 'react-dom/client'; // 从 react-dom/client 导入 createRoot
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // 使用 createRoot
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}