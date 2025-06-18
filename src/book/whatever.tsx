import React, { useState } from 'react';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import BookClosedImage from '../assets/book-closed';
import BookOpenImage from '../assets/book-open';
import buttonPng from '../components/ui/button.png';
import inputPng from '../components/ui/input.png';
import './whatever.css';

export default function BookOfWhatever() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsOpen(true);
    setLoading(true);
    setTimeout(() => {
      setResponse('早點洗洗睡吧');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="center-container">
      {isOpen && (
        <div className="response-text">
          {loading ? '這個嘛...' : response}
        </div>
      )}
      <div>
        {isOpen ? <BookOpenImage className="book-img" /> : <BookClosedImage className="book-img" />}
      </div>
    <div className="input-row">
      <img src={inputPng} alt="input-bg" className="input-bg-img" />
      <div className="input-absolute-content">
        <Input
          className="input-style"
          placeholder="輸入你的煩惱或提問..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
        />
        <Button
          className="button-style"
          onClick={handleSearch}
        >
          <img src={buttonPng} alt="查詢" className="button-img" />
        </Button>
      </div>
    </div>
  </div>
  );
}