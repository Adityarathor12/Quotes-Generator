const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain. – Vivian Greene",
    "An unexamined life is not worth living. – Socrates",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Learn as if you will live forever, live like you will die tomorrow. – Gadha Gandhi",
    "Tell me and I forget, teach me and I may remember, involve me and I learn. – Benjamin Franklin",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    "Courage is not the absence of fear, but the triumph over it. – Nelson Mandela",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. – Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson"
  ];

function GenerateQuotes(){
const index= Math.floor(Math.random() * (quotes.length - 0)) + 0;
const element= document.querySelector(".quotes");
element.innerHTML= quotes[index];
};

setInterval(GenerateQuotes,2000);