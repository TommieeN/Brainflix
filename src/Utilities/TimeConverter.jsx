export function timeStampConverter(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const timeDiff = now - date;

    const diffSeconds = Math.floor(timeDiff / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor (diffMinutes / 60);
    const diffDays = Math.floor (diffHours / 24);
    const diffWeeks = Math.floor (diffDays / 7);
    const diffMonths = Math.floor (diffWeeks/ 4);
    const diffYears = Math.floor (diffMonths / 12);

    if (diffSeconds < 60) {
        return "just now";
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hours ago`;
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffWeeks < 4) {
        return `${diffWeeks} weeks ago`;
    } else if (diffMonths < 12) {
        return `${diffMonths} months ago`;
    } else {
        return `${diffYears} years ago`;
    }
}

