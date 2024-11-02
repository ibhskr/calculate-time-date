export function timeAgo(dateString) {
  const date = new Date(dateString); // Input date
  const now = new Date(); // Current date

  const diffInSeconds = Math.floor((now - date) / 1000);
  // (now - date) we get in milliseconds / 1000 = we get in second

  const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
  const months = Math.floor(diffInSeconds / (3600 * 24 * 30));
  const weeks = Math.floor(diffInSeconds / (3600 * 24 * 7));
  const days = Math.floor(diffInSeconds / (3600 * 24));
  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor(diffInSeconds / 60);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `just now`;
  }
}
