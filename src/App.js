import { useEffect, useState } from "react";
import "./App.css";
import { FaFacebookF, FaQuoteLeft, FaTwitter } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState();
  const [color, setColor] = useState("5f9ea0");

  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };

  const getQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
      headers: {
        "X-Api-Key": "lzdKQxwcIwVGjvjr2dDFXA==J38lXvsBuxdONftJ",
      },
    })
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
      headers: {
        "X-Api-Key": "lzdKQxwcIwVGjvjr2dDFXA==J38lXvsBuxdONftJ",
      },
    })
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);
  console.log(quote);

  const styles = {
    color: {
      color: "#" + color,
    },
    back: {
      backgroundColor: "#" + color,
    },
  };
  return (
    <div className="App" style={styles.back}>
      <div id="quote-box">
        {/* Quote */}
        <div className="quote" style={styles.color}>
          <span>
            {" "}
            <FaQuoteLeft />
          </span>{" "}
          {quote[0].quote}
        </div>
        <div className="author">
          <p style={styles.color}> - {quote[0].author}</p>
        </div>
        <div className="share">
          <div className="socials">
            <a href="/" style={styles.back}>
              <FaTwitter />
            </a>
            <a href="/" style={styles.back}>
              <FaFacebookF />
            </a>
          </div>
          <a
            style={styles.back}
            href="#
            "
            className="button"
            onClick={() => {
              generateColor();
              getQuote();
              console.log(quote);
            }}
            id="new-quote"
          >
            New Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
