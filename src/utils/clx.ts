type Clx = string | { [key: string]: unknown } | Clx[] | undefined;

/**
 * a utility for conditionally joining classNames together
 * @returns string
 */
export function clx(...classnames: Clx[]): string {
  const className = classnames.reduce<string>((prev, current) => {
    if (!current) {
      return prev;
    }

    if (typeof current === 'string') {
      return `${prev} ${current}`;
    }

    if (Array.isArray(current)) {
      return `${prev} ${clx(...current)}`;
    }

    if (typeof current === 'object') {
      const result = Object.entries(current)
        .map(([key, value]) => {
          if (value) return key;
        })
        .filter(Boolean)
        .join(' ');

      return `${prev} ${result}`;
    }

    throw new Error('error: not allowed, please provide either string, array, or object');
  }, '');

  // trim extra spaces
  return className.replace(/\s+/g, ' ').trim();
}
