import Profile from "./profile"

export default {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: { control: "text" },
    memberStatus: { control: "text" },
    phone: { control: "text" },
    email: { control: "text" },
    address: { control: "text" },
    profileImage: { control: "text" },
  },
}

const Template = (args) => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
  name: "James Hawkins",
  memberStatus: "GOLD MEMBER",
  phone: "+12 345 678 92",
  email: "jameshawkins@mail.com",
  address: "Franklin Avenue, Corner St.London, 24125151",
  profileImage: "/placeholder.svg",
}

export const WithDifferentUser = Template.bind({})
WithDifferentUser.args = {
  name: "Sarah Johnson",
  memberStatus: "SILVER MEMBER",
  phone: "+1 555 123 4567",
  email: "sarah.j@example.com",
  address: "123 Main St, New York, NY 10001",
  profileImage: "/placeholder.svg",
}