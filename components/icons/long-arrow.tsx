import { SVGProps } from "react";

export function LongArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 51 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Long Arrow</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.7706 11L39.7705 0V8.71033H0V12.9149H39.7705V22.0001L50.7706 11Z"
      />
    </svg>
  );
}
