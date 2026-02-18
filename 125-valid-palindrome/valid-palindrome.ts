function isPalindrome(s: string): boolean {
    const input = s.trim().toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    return (input === input.split('').reverse().join(''))
};