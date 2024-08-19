import * as React from "react"
import { JSX } from "react/jsx-runtime"
const VisualAssetSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1245}
    height={75}
    fill="none"
    {...props}
  >
    <path fill="#FF3991" d="M621 75-2.538 0H1244.54L621 75Z" />
  </svg>
)
export default VisualAssetSvg
