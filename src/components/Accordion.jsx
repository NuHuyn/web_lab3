import React, { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <Panel title="Panel 1" isActive={activeIndex === 0} onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}>
        <p>Content of panel 1</p>
      </Panel>

      <Panel title="Panel 2" isActive={activeIndex === 1} onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}>
        <p>Content of panel 2</p>
      </Panel>
    </div>
  );
}
