import SotuShop from "./Sotushop"

export default {
  title: "SOTU Shop/SotuShop",
  component: SotuShop,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    userName: { control: "text" },
  },
}

// Default template
const Template = (args) => <SotuShop {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
  userName: "John",
}

// Different user story
export const DifferentUser = Template.bind({})
DifferentUser.args = {
  userName: "Sarah",
}

// Mobile view story (uses the same component but with a note about viewing in mobile size)
export const MobileView = Template.bind({})
MobileView.args = {
  userName: "John",
}
MobileView.parameters = {
  viewport: { defaultViewport: "mobile1" },
  docs: {
    description: {
      story: "View the SOTU Shop interface on a mobile device.",
    },
  },
}

