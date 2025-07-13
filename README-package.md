# 🇳🇵 text-np

A React TypeScript component for real-time conversion of romanized Nepali text to Unicode Nepali. Type naturally in romanized Nepali and watch it convert to proper Nepali Unicode instantly!

## ✨ Features

- **Real-time Conversion**: Converts romanized Nepali to Unicode Nepali as you type
- **Smart Cursor Handling**: Maintains cursor position during conversion
- **Seamless Editing**: Edit text anywhere without breaking existing conversions
- **Word Boundary Detection**: Intelligent conversion that respects word boundaries
- **Longest Match Algorithm**: Uses the most specific conversion rules first
- **Mixed Content Support**: Handles Nepali, English, numbers, and punctuation seamlessly

## 📦 Installation

```bash
npm install text-np
```

## 🚀 Quick Start

### Basic Usage

```tsx
import React, { useState } from 'react';
import { NepaliTextBox } from 'text-np';
import 'text-np/style.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <NepaliTextBox
        value={text}
        onChange={setText}
        placeholder="Type in romanized Nepali..."
        rows={4}
        cols={50}
      />
      <p>Output: {text}</p>
    </div>
  );
}

export default App;
```

### Advanced Usage with Custom Styling

```tsx
import React, { useState } from 'react';
import { NepaliTextBox, type NepaliTextBoxProps } from 'text-np';
import 'text-np/style.css';

function CustomNepaliInput(props: NepaliTextBoxProps) {
  return (
    <NepaliTextBox
      {...props}
      className="my-custom-nepali-input"
      style={{
        fontFamily: 'Noto Sans Devanagari, Arial, sans-serif',
        fontSize: '16px',
        padding: '12px',
        borderRadius: '8px',
        border: '2px solid #007acc'
      }}
    />
  );
}
```

## 📝 API Reference

### NepaliTextBox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `""` | The current value of the text box |
| `onChange` | `(value: string) => void` | - | Callback fired when the value changes |
| `placeholder` | `string` | `"Type in romanized Nepali..."` | Placeholder text |
| `className` | `string` | `""` | Additional CSS class names |
| `rows` | `number` | `5` | Number of visible text lines |
| `cols` | `number` | `50` | Number of visible character widths |

All other standard HTML textarea attributes are also supported.

### Additional Exports

```tsx
import { 
  NepaliTextBox,
  type NepaliTextBoxProps,
  nepaliMapping,
  getSortedMappingKeys 
} from 'text-np';

// Access the romanized to Unicode mapping
console.log(nepaliMapping);

// Get sorted mapping keys for custom implementations
const sortedKeys = getSortedMappingKeys();
```

## 🎯 Conversion Examples

| Romanized Input | Unicode Output |
|----------------|----------------|
| `mero naam sakar ho` | `मेरो नाम सकर हो` |
| `mero naam namita ho` | `मेरो नाम नमिता हो` |
| `ma butawal ma basdachu` | `म बुतवल म बस्दछु` |
| `nepal ko rajakumari sundar chha` | `नेपाल को राजकुमारी सुन्दर छ` |
| `ma 25 barsha ko chu. om namah shivaya.` | `म २५ बर्ष को छु। ॐ नमः शिवाय।` |

## 🎨 Styling

The component comes with default styling. You can:

1. **Use the default styles**: Import `'text-np/style.css'`
2. **Override with custom CSS**: Add your own styles with higher specificity
3. **Use CSS-in-JS**: Pass styles via the `style` prop
4. **Use CSS modules**: Apply custom class names via the `className` prop

## 🔧 TypeScript Support

This package is written in TypeScript and includes type definitions. You get full IntelliSense support out of the box.

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please visit the [repository](https://github.com/bright-office/nepali-input) to contribute.

## 🐛 Issues

Found a bug or have a feature request? Please create an issue on [GitHub](https://github.com/bright-office/nepali-input/issues).
