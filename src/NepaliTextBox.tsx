import React, { useState, useRef, useCallback, useEffect } from "react";
import { nepaliMapping, getSortedMappingKeys } from "./nepaliMapping";

type  NepaliTextBoxProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: number;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>

export const NepaliTextBox = ({
  value = "",
  onChange,
  placeholder = "Type in romanized Nepali...",
  className = "",
  rows = 5,
  cols = 50,
  ...props
}: NepaliTextBoxProps) => {
  const [text, setText] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sortedKeys = useRef(getSortedMappingKeys());

  // Convert romanized text to Nepali
  const convertToNepali = useCallback(
    (inputText: string, cursorPosition: number) => {
      let result = inputText;
      let newCursorPosition = cursorPosition;

      // Sort keys by length (longest first) for proper matching
      for (const romanKey of sortedKeys.current) {
        const nepaliChar =
          nepaliMapping[romanKey as keyof typeof nepaliMapping];

        // Find all occurrences of the romanized text
        let searchIndex = 0;
        while (searchIndex < result.length) {
          const index = result.indexOf(romanKey, searchIndex);
          if (index === -1) break;

          // Check if this replacement would affect cursor position
          const replacementEndPos = index + romanKey.length;

          // Only convert if it's a complete word boundary or separated by space/punctuation
          const beforeChar = index > 0 ? result[index - 1] : " ";
          const afterChar =
            replacementEndPos < result.length ? result[replacementEndPos] : " ";

          const isWordBoundary =
            /[\s\u0900-\u097F।॥]/.test(beforeChar) &&
            (/[\s\u0900-\u097F।॥]/.test(afterChar) ||
              replacementEndPos === result.length);

          if (isWordBoundary) {
            // Perform the replacement
            result =
              result.substring(0, index) +
              nepaliChar +
              result.substring(replacementEndPos);

            // Adjust cursor position if needed
            if (cursorPosition >= replacementEndPos) {
              newCursorPosition =
                newCursorPosition - romanKey.length + nepaliChar.length;
            } else if (cursorPosition > index) {
              // Cursor is in the middle of the converted text
              newCursorPosition = index + nepaliChar.length;
            }

            searchIndex = index + nepaliChar.length;
          } else {
            searchIndex = index + 1;
          }
        }
      }

      return { convertedText: result, newCursorPosition };
    },
    []
  );

  // Handle text changes
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const cursorPosition = e.target.selectionStart || 0;

    // Convert the text
    const { convertedText, newCursorPosition } = convertToNepali(
      newText,
      cursorPosition
    );

    setText(convertedText);
    onChange?.(convertedText);

    // Set cursor position after state update
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.selectionStart = newCursorPosition;
        textareaRef.current.selectionEnd = newCursorPosition;
      }
    }, 0);
  };

  // Handle key events for better user experience
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
  };

  // Sync external value changes
  useEffect(() => {
    if (value !== text) {
      setText(value);
    }
  }, [value, text]);

  return (
    <div className={`nepali-textbox-container ${className}`}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="nepali-textbox"
        spellCheck={false}
        {...props}
      />
    </div>
  );
};

export default NepaliTextBox;
