export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      role="img"
      aria-hidden="true"
    >
      <circle cx="48" cy="48" r="46" fill="#0c0a08" />
      <circle cx="48" cy="48" r="43.5" fill="none" stroke="#de9c21" strokeWidth="2.2" />
      <path
        d="M33 30c7-10 23-10 30 0 3 4 3 9-1 13-7 6-9 9-9 16v2H43v-2c0-7-2-10-9-16-4-4-4-9-1-13z"
        fill="#de9c21"
      />
      <path
        d="M44 34c3-3 9-2 11 3"
        fill="none"
        stroke="#0c0a08"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="48" cy="48" r="3" fill="#0c0a08" />
      <path d="M22 74h52" stroke="#de9c21" strokeWidth="3" />
      <path
        d="M24 77h7l2 5h-7zM35 77h7l2 5h-7zM46 77h7l2 5h-7zM57 77h7l2 5h-7zM68 77h6l2 5h-6z"
        fill="#de9c21"
      />
    </svg>
  );
}
