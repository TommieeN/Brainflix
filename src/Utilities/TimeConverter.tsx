export function timeStampConverter(timestamp: Date) {
    const date: Date = new Date(timestamp);
    const now: Date = new Date();
    const timeDiff: number = now.getTime() - date.getTime();

    const diffSeconds: number = Math.floor(timeDiff / 1000);
    const diffMinutes: number = Math.floor(diffSeconds / 60);
    const diffHours: number = Math.floor(diffMinutes / 60);
    const diffDays: number = Math.floor(diffHours / 24);
    const diffWeeks: number = Math.floor(diffDays / 7);
    const diffMonths: number = Math.floor(diffWeeks / 4);
    const diffYears: number = Math.floor(diffMonths / 12);

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
