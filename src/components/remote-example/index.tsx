// Generated with create-component/index.js
import React from "react";

import "./index.scss";

import { Hello } from "provider/Hello";
import Button, { ButtonProps } from "../button";
export interface RemoteExampleProps extends ButtonProps {
  /**
   * children
   */
  children?: React.ReactNode

  /**
   * tell me where are you from
   */
  origin?: string

  /**
   * click event
   */
  onClick?: ((event: MouseEvent<HTMLDivElement>) => void) | undefined
}

const RemoteExample: React.FC<RemoteExampleProps> = ({ label, children, origin, onClick }: RemoteExampleProps) => (
  <div onClick={onClick} data-testid="remote-button" className="remote-button">
    <Button label={label} />
    {children}
    <Hello origin={origin || "RemoteExample"} />
  </div>
);

export default RemoteExample;

