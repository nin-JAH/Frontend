import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textareaClasses = cva(
  'w-full resize-vertical transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border focus:border-red-500',
        filled: 'border-0 focus:ring-2',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'px-2 py-1 text-sm min-h-[60px]',
        medium: 'px-3 py-2 text-base min-h-[80px]',
        large: 'px-4 py-3 text-lg min-h-[100px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const TextArea = ({
  // Required parameters with defaults
  placeholder = "Message",
  text_font_size = "10",
  text_font_family = "Inter",
  text_font_weight = "400",
  text_line_height = "13px",
  text_text_align = "left",
  text_color = "#b7b7b9",
  fill_background_color = "#ffffffbf",
  border_border = "1 solid #d9d9d9",
  border_border_radius = "10px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  rows = 4,
  cols,
  name,
  id,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const textareaStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    backgroundColor: fill_background_color,
    border: border_border?.replace(/(\d+)\s+solid/, '$1px solid'),
    borderRadius: border_border_radius,
  };

  // Safe change handler
  const handleChange = (event) => {
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      rows={rows}
      cols={cols}
      style={textareaStyles}
      className={twMerge(
        textareaClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default TextArea;