const {format_date, format_url} = require('../utils/helpers')

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
    
    expect(format_date(date)).toBe('3/20/2020');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://dell.com/page/1');
    const url2 = format_url('https://www.abc.com/abcdef/');
    const url3 = format_url('https://www.xyz.com?q=damnit');
  
    expect(url1).toBe('dell.com');
    expect(url2).toBe('abc.com');
    expect(url3).toBe('xyz.com');
  });