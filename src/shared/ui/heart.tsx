import React from 'react';

export const Heart = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 0a4 4 0 00-4 4v20a4 4 0 004 4h20a4 4 0 004-4V4a4 4 0 00-4-4H4zm10 9.54s1.41-2.17 3.24-2.49c4.54-.79 6.41 3.18 5.65 6.13-1.35 5.27-8.89 9.87-8.89 9.87s-7.54-4.6-8.89-9.86c-.75-2.95 1.12-6.93 5.65-6.13C12.59 7.38 14 9.54 14 9.54z"
        fill="#008EFF"
      />
    </svg>
  );
};
