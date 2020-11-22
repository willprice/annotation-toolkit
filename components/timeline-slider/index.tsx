import React, { useState } from "react";

export interface TimelineSliderArgs {
  min: number;
  max: number;
  step: number;
}

const TimelineSlider = ({ min, max, step }: TimelineSliderArgs) => {
  const [value, setValue] = useState(0);

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onInput={(e) => setValue(Number(e.currentTarget.value))}
    />
  );
};

// class TimelineSlider2 extends  React.Component {
//     constructor(props : any) {
//         super(props)
//         this.state = {
//             value: 0
//         }
//     }

//     render() {
//         return (
//             <input
//                 type="range"
//                 min={this.props.min}
//                 max={this.props.max}
//                 step={this.step}
//                 value={this.state.value}
//                 onInput={e => this.setState({ value: Number(e.currentTarget.value) })}
//             />
//         )
//     }
// }

export default TimelineSlider;
