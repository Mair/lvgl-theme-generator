import * as React from "react";
import styled from "styled-components";

export const Button = styled.button<{ state: LVGLStates }>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: ${(props) => `${props.theme.borderRadius}px`};
  max-height: 30px;
  border-width:3px;

  /* Color the border and text with theme.main */
  border-color: ${(props) => {
    switch (props.state) {
      case "LV_STATE_DEFAULT":
        return props.theme.colorPrimary;
      case "LV_STATE_CHECKED":
        return props.theme.colorPrimary;
    }
  }};
  color: ${(props) => {
    switch (props.state) {
      case "LV_STATE_DEFAULT":
        return "#000000";
      case "LV_STATE_CHECKED":
        return "#ffffff";
    }
  }};
  background-color: ${(props) => {
    switch (props.state) {
      case "LV_STATE_DEFAULT":
        return "auto";
      case "LV_STATE_CHECKED":
        return props.theme.colorPrimary;
    }
  }};
`;
