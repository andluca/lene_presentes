import * as React from "react"
import { JSX } from "react/jsx-runtime"
const InstagramSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#FF3991"
      d="M25 15.625A9.375 9.375 0 1 0 34.375 25 9.385 9.385 0 0 0 25 15.625Zm0 15.625a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Zm9.375-26.563h-18.75A10.95 10.95 0 0 0 4.687 15.626v18.75a10.95 10.95 0 0 0 10.938 10.938h18.75a10.95 10.95 0 0 0 10.938-10.938v-18.75A10.95 10.95 0 0 0 34.374 4.687Zm7.813 29.688a7.813 7.813 0 0 1-7.813 7.813h-18.75a7.813 7.813 0 0 1-7.813-7.813v-18.75a7.813 7.813 0 0 1 7.813-7.813h18.75a7.813 7.813 0 0 1 7.813 7.813v18.75ZM37.5 14.844a2.344 2.344 0 1 1-4.689 0 2.344 2.344 0 0 1 4.689 0Z"
    />
  </svg>
)
export default InstagramSvg
