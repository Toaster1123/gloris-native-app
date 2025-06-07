export const parseSubject = (subject: string) => {
  const match = subject.match(/^(.+?)\s*\((.+)\)$/);

  if (match) {
    return {
      name: match[1].trim(),
      cabinet: match[2].trim(),
    };
  }
  return { name: subject, cabinet: '' };
};
