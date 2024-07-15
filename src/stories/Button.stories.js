import React from "react";
import Button, {
  ButtonColor,
  ButtonShape,
  ButtonSize,
  ButtonType,
} from "../components/Button/Button";
// Define a default export for the story
export default {
  title: "Button",
  component: Button,
};

// Create a template for the Button stories
//const Template = (args) => <Button {...args} />;

// Define the Size story
export const Size = () => (
  <div className="storybook_container">
    <h3>Default Size</h3>
    <Button
      type={ButtonType.Filled}
      color={ButtonColor.Black}
      text={"Click me"}
      onClick={() => console.log("Button clicked")}
    />
    <h3>Compact Size</h3>
    <Button
      type={ButtonType.Filled}
      color={ButtonColor.Black}
      size={ButtonSize.Compact}
      text={"Click me"}
      onClick={() => console.log("Button clicked")}
    />
  </div>
);
export const Color = () => (
  <div className="storybook_container">
    <Button
      type={ButtonType.Filled}
      color={ButtonColor.Default}
      text={"Click me"}
      onClick={() => console.log("Button clicked")}
    />
    <Button
      type={ButtonType.Filled}
      color={ButtonColor.Primary}
      text={"Click me"}
      onClick={() => console.log("Button clicked")}
    />
    <Button
      type={ButtonType.Filled}
      color={ButtonColor.Black}
      text={"Click me"}
      onClick={() => console.log("Button clicked")}
    />
    <Button
      type={ButtonType.Filled}
      color={ButtonColor.Secondary}
      text={"Click me"}
      onClick={() => console.log("Button clicked")}
    />
  </div>
);
