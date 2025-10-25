const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return {
    words,
    minutes
  };
}
