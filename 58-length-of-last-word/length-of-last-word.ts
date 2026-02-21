function lengthOfLastWord(s: string): number {
    const trimmed = s.trim();
    let length = 0;
    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] !== ' ') length++;
        else if (length > 0) break;
    }
    return length;
};