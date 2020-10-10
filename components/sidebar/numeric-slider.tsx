import * as React from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";

const ValueSlider = styled.input.attrs({ type: "range" })<{ value: number }>`
  margin: 3px;
  width: 36px;
  height: 14px;
  padding: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
`;

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  name: string;
  min: number;
  max: number;
}
export const Slider = (props: SliderProps) => {
  return (
    <Container>
      {props.name}
      <ValueSlider
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
      {props.value}
    </Container>
  );
};
