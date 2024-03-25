import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Icon3(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.917 8.333c0-3.142 0-4.714 1.037-5.69S6.661 1.667 10 1.667h.644c2.718 0 4.076 0 5.02.665.27.19.51.416.713.67.706.889.706 2.168.706 4.725V9.85c0 2.469 0 3.704-.39 4.69-.629 1.585-1.957 2.835-3.642 3.427-1.047.367-2.36.367-4.983.367-1.499 0-2.249 0-2.847-.21-.963-.338-1.722-1.052-2.081-1.958-.223-.563-.223-1.269-.223-2.68V8.333z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M17.083 10a2.778 2.778 0 01-2.777 2.778c-.555 0-1.21-.097-1.749.047-.48.129-.854.503-.982.982-.144.54-.047 1.194-.047 1.749a2.778 2.778 0 01-2.778 2.777M6.667 5.833H12.5M6.667 9.167h2.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon3
