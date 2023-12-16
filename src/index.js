import React from 'react';
import ReactDOM from 'react-dom/client';

const arrItem = ['Doan Trinh','Thuy Anh','Ngoc Linh','Thuy Hanh']
const showArr = arrItem.map((item) => <p>{item}</p>)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(showArr);