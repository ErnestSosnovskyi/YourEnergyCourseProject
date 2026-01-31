import { YourEnergyAPI } from './api';

const quoteText = document.querySelector('#quote-text');
const quoteAuthor = document.querySelector('#quote-author');

const api = new YourEnergyAPI();

// Функція для рендеру цитати
async function renderQuote() {
  const data = await api.getQuote();
  console.log('Quote data received:', data);
  
  if (data && data.quote && data.author) {
    quoteText.textContent = data.quote;
    quoteAuthor.textContent = data.author;    
  }
}