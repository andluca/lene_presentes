import * as React from "react"
import { JSX } from "react/jsx-runtime"
interface Props {
    colorWhats: string;
}
const WhatsSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={66}
    height={66}
    fill="none"
    {...props}
  >
    <path
      fill={props.colorWhats}
      d="m51.619 38.263-10-5a2.5 2.5 0 0 0-2.5.156l-4.59 3.062a12.673 12.673 0 0 1-5-5l3.062-4.59a2.499 2.499 0 0 0 .156-2.5l-5-10A2.5 2.5 0 0 0 25.5 13 12.5 12.5 0 0 0 13 25.5 27.532 27.532 0 0 0 40.5 53 12.5 12.5 0 0 0 53 40.5a2.5 2.5 0 0 0-1.381-2.237ZM40.5 48A22.525 22.525 0 0 1 18 25.5a7.5 7.5 0 0 1 6.028-7.356l3.588 7.187-3.053 4.544a2.5 2.5 0 0 0-.229 2.347 17.647 17.647 0 0 0 9.422 9.422 2.5 2.5 0 0 0 2.369-.206l4.566-3.044 7.187 3.587A7.5 7.5 0 0 1 40.5 48ZM33 .5A32.5 32.5 0 0 0 4.306 48.275L.76 58.915a5 5 0 0 0 6.325 6.326l10.641-3.547A32.501 32.501 0 1 0 33 .5Zm0 60a27.46 27.46 0 0 1-13.769-3.69 2.499 2.499 0 0 0-2.044-.21L5.5 60.5l3.897-11.688a2.5 2.5 0 0 0-.206-2.043A27.5 27.5 0 1 1 33 60.5Z"
    />
  </svg>
)
export default WhatsSvg
