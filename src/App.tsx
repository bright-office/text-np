import { useState } from "react";
import NepaliTextBox from "./NepaliTextBox";
import "./NepaliTextBox.css";

function App() {
  const [currentText, setCurrentText] = useState("");

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h1>🇳🇵 Nepali TextBox Demo</h1>
        <p>Real-time conversion from romanized Nepali to Unicode Nepali</p>
      </div>
      <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold">Opensource Package from BrightSoftware Pvt Limited</h2>
            <div>
                <NepaliTextBox
                    placeholder="Type Capital H for halanta"
                    style={{resize: 'none', padding: '10px'}}
                    rows={1}
                    value={currentText}
                    onChange={setCurrentText}
                />
            </div>
        </div>

        </div>
  );
}

export default App;
