# Handy Nepali TextBox

A React TypeScript component for real-time conversion of romanized Nepali text to Unicode Nepali. Type naturally in romanized Nepali and watch it convert to proper Nepali Unicode instantly!

## Features

- **Real-time Conversion**: Converts romanized Nepali to Unicode Nepali as you type
- **Smart Cursor Handling**: Maintains cursor position during conversion
- **Seamless Editing**: Edit text anywhere without breaking existing conversions
- **Word Boundary Detection**: Intelligent conversion that respects word boundaries
- **Longest Match Algorithm**: Uses the most specific conversion rules first
- **Mixed Content Support**: Handles Nepali, English, numbers, and punctuation seamlessly

## Demo

Try the live demo by running the development server:

```bash
npm run dev
```

## 🛠️ Usage

```tsx
import NepaliTextBox from "./NepaliTextBox";

function MyComponent() {
  const [text, setText] = useState("");

  return (
    <NepaliTextBox
      value={text}
      onChange={setText}
      placeholder="Type romanized Nepali..."
      rows={5}
    />
  );
}
```

## Component Props

| Prop          | Type                      | Default                         | Description                      |
| ------------- | ------------------------- | ------------------------------- | -------------------------------- |
| `value`       | `string`                  | `''`                            | Controlled value of the textarea |
| `onChange`    | `(value: string) => void` | `undefined`                     | Callback fired when text changes |
| `placeholder` | `string`                  | `'Type in romanized Nepali...'` | Placeholder text                 |
| `className`   | `string`                  | `''`                            | Additional CSS class             |
| `rows`        | `number`                  | `5`                             | Number of textarea rows          |
| `cols`        | `number`                  | `50`                            | Number of textarea columns       |

## 🔧 How It Works

1. **Input Detection**: Listens for text input events
2. **Boundary Analysis**: Identifies word boundaries using spaces and punctuation
3. **Pattern Matching**: Uses the longest matching substring from the mapping
4. **Smart Conversion**: Converts text while preserving cursor position
5. **Real-time Updates**: Updates the display instantly


## 📦 Installation & Setup

```bash
# Clone and download the project(not yet published to npm)
npm install
npm run dev
```

## 🎨 Customization

The component comes with built-in CSS that can be customized:

Wanna use your own preferred nepali font?
paste this Matangi Unicode Nepali font for example
```css
@import url('https://fonts.googleapis.com/css2?family=Matangi:wght@300..900&display=swap');
```
and add this font-family style 
```css
  font-family: "Matangi", sans-serif;
```
in your css file to change the font.

```css
.nepali-textbox {
  /* Your custom styles here */
  font-family: "Noto Sans Devanagari", Arial, sans-serif;
  font-size: 16px;
  /* ... */
}
```

## Technical Highlights

- **TypeScript**: Fully typed for better development experience
- **Accessibility**: Keyboard support
- **Controlled Input** Input value is controlled


## License

This project is created as a demonstration. Feel free to use and modify as needed.

## 🔗 Built With

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Noto Sans Devanagari](https://fonts.google.com/noto/specimen/Noto+Sans+Devanagari) - Nepali Font


