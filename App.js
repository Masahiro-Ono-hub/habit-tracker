import React, { useState, useEffect } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Chart.jsを登録
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function App() {
  const [days, setDays] = useState(0);
  const [history, setHistory] = useState([]);

  // ランクを決める関数
  const getRank = (days) => {
    if (days >= 100) return 'レジェンド';
    if (days >= 50) return '勇者';
    if (days >= 20) return '戦士';
    if (days >= 7) return '初心者';
    return '見習い';
  };  

  // 起動時に保存データを読み込む
  useEffect(() => {
    const savedDays = localStorage.getItem('recordDays');
    const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
    if (savedDays) {
      setDays(Number(savedDays));
      setHistory(savedHistory);
    }
  }, []);

  // 記録ボタン
  const handleRecord = () => {
    const newDays = days + 1;
    const newHistory = [...history, { date: new Date().toLocaleDateString(), count: newDays }];
    setDays(newDays);
    setHistory(newHistory);
    localStorage.setItem('recordDays', newDays);
    localStorage.setItem('history', JSON.stringify(newHistory));
  };

  // const handleRecord = () => {
  //   const today = new Date().toLocaleDateString();
  //   if (history.some(item => item.date === today)) {
  //     alert('今日はすでに記録済みです！');
  //     return;
  //   }
  //   const newDays = days + 1;
  //   const newHistory = [...history, { date: today, count: newDays }];
  //   setDays(newDays);
  //   setHistory(newHistory);
  //   localStorage.setItem('recordDays', newDays);
  //   localStorage.setItem('history', JSON.stringify(newHistory));
  // };

  // リセットボタン
  const handleReset = () => {
    setDays(0);
    setHistory([]);
    localStorage.removeItem('recordDays');
    localStorage.removeItem('history');
  };

  // グラフデータ
  const chartData = {
    labels: history.map((item) => item.date),
    datasets: [
      {
        label: '記録日数',
        data: history.map((item) => item.count),
        borderColor: '#00ffcc',
        backgroundColor: 'rgba(0, 255, 204, 0.2)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={`App ${days > 0 ? 'glow' : ''}`}>
      <h1>禁ギャンブル記録アプリ</h1>
      <p>連続記録: {days} 日</p>
      <p>ランク: {getRank(days)}</p>
      <button onClick={handleRecord}>今日も我慢した！</button>
      <button onClick={handleReset}>リセットする</button>

      {history.length > 0 && (
        <div className="chart-container">
          <h2>成長の記録</h2>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

export default App;
