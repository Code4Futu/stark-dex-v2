export const SocialIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M8.33334 10.3334C8.33334 9.78109 8.78106 9.33337 9.33334 9.33337H20.6667C21.219 9.33337 21.6667 9.78109 21.6667 10.3334C21.6667 10.8857 21.219 11.3334 20.6667 11.3334H9.33334C8.78106 11.3334 8.33334 10.8857 8.33334 10.3334Z"
        fill="url(#paint0_linear_305_1461)"
      />
      <path
        d="M8.33334 15C8.33334 14.4478 8.78106 14 9.33334 14H20.6667C21.219 14 21.6667 14.4478 21.6667 15C21.6667 15.5523 21.219 16 20.6667 16H9.33334C8.78106 16 8.33334 15.5523 8.33334 15Z"
        fill="url(#paint1_linear_305_1461)"
      />
      <path
        d="M8.33334 19.6667C8.33334 19.1144 8.78106 18.6667 9.33334 18.6667H20.6667C21.219 18.6667 21.6667 19.1144 21.6667 19.6667C21.6667 20.219 21.219 20.6667 20.6667 20.6667H9.33334C8.78106 20.6667 8.33334 20.219 8.33334 19.6667Z"
        fill="url(#paint2_linear_305_1461)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 27C21.6274 27 27 21.6275 27 15C27 8.37262 21.6274 3.00004 15 3.00004C8.37259 3.00004 3.00001 8.37262 3.00001 15C3.00001 21.6275 8.37259 27 15 27ZM15 29.6667C23.1002 29.6667 29.6667 23.1002 29.6667 15C29.6667 6.89986 23.1002 0.333374 15 0.333374C6.89983 0.333374 0.333344 6.89986 0.333344 15C0.333344 23.1002 6.89983 29.6667 15 29.6667Z"
        fill="url(#paint3_linear_305_1461)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_305_1461"
          x1="0.333344"
          y1="0.333374"
          x2="29.6667"
          y2="29.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color ? color : "#24C3BC"} />
          <stop offset="1" stop-color={color ? color : "#ADFFFB"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_305_1461"
          x1="0.333344"
          y1="0.333374"
          x2="29.6667"
          y2="29.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color ? color : "#24C3BC"} />
          <stop offset="1" stop-color={color ? color : "#ADFFFB"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_305_1461"
          x1="0.333344"
          y1="0.333374"
          x2="29.6667"
          y2="29.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color ? color : "#24C3BC"} />
          <stop offset="1" stop-color={color ? color : "#ADFFFB"} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_305_1461"
          x1="0.333344"
          y1="0.333374"
          x2="29.6667"
          y2="29.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color ? color : "#24C3BC"} />
          <stop offset="1" stop-color={color ? color : "#ADFFFB"} />
        </linearGradient>
      </defs>
    </svg>
  );
};
