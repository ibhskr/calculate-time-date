### Time And Date Calculate Package

This is a simple JavaScript based package that takes a date string and returns how much time has passed since that date in a human-readable format, such as "2 hours ago", "3 days ago", etc. You can use it in any web development project to display time differences dynamically.

## Features

- Convert any valid date string to a time-ago format.
- Returns time in the most meaningful unit (years, months, weeks, days, hours, or minutes).
- Returns "just now" if the input date is less than a minute ago.

## Usage

### Installation

If you're using this as an npm package, install it by running:

```bash
npm i calculate-time-date
```

Importing and Using the Function

Import the timeAgo function and pass a valid date string to it:

```javascript
import { timeAgo } from "calculate-time-date";

// Example usage:
const date = "2024-10-28T19:37:35.899+00:00"; // ISO string
console.log(timeAgo(date)); // Output: "4 days ago" (or whatever is appropriate)
```

Example

```javascript
import { timeAgo } from "calculate-time-date";

console.log(timeAgo("2024-11-02T10:10:35.899+00:00")); // Output: "4 hours ago"
console.log(timeAgo("2023-11-02T10:10:35.899+00:00")); // Output: "1 year ago"
console.log(timeAgo("2024-10-31T12:00:00.000+00:00")); // Output: "2 days ago"
```
