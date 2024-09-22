// Generated with create-component/index.js
import React, { lazy, Suspense } from "react";

import "./index.scss";

import { loadRemote } from "@module-federation/runtime";
const Hello = lazy(() => loadRemote("provider/Hello").then((module) => ({ default: module.Hello })));

export interface RemoteRuntimeExampleProps {
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

const RemoteRuntimeExample: React.FC<RemoteRuntimeExampleProps> = ({ children, origin, onClick }: RemoteRuntimeExampleProps) => (
  <Suspense fallback={<div>loading...</div>}>
    <div onClick={onClick} data-testid="remote-runtime-example" className="remote-runtime-example">
      {children}
      <Hello origin={origin || "RemoteRuntimeExample"} />
    </div>
  </Suspense>
);

export default RemoteRuntimeExample;

