export function options(issues, hideRancher) {
  if (!issues) {
    if (hideRancher) {
      return { };
    }
    issues = 'https://github.com/llmos-ai/dashboard/issues/new';
  } else if (hideRancher) {
    return { 'footer.issue': issues };
  }

  return {
    'footer.docs':   'https://1block.ai/docs/llmos',
    'footer.forums': 'https://forums.1block.ai/llmos',
    'footer.issue':  issues,
  };
}
