import React from 'react';
import HotelMenu from './HotelMenu';

export default {
  title: 'Components/HotelMenu',
  component: HotelMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showAmount: { control: 'boolean' },
    showFilter: { control: 'boolean' },
    hotelId: { control: 'text' },
    menuId: { control: 'text' },
  },
};

// Mock data for stories
const mockCategories = [
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'lunch', name: 'Lunch' },
  { id: 'dinner', name: 'Dinner' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' }
];

const mockMenuItems = [
  { id: '1', name: 'Continental Breakfast', description: 'Assorted pastries, fruits, and coffee', price: 12.99, category: 'breakfast', image: '/placeholder.svg?height=100&width=100' },
  { id: '2', name: 'American Breakfast', description: 'Eggs, bacon, toast, and hash browns', price: 14.99, category: 'breakfast', image: '/placeholder.svg?height=100&width=100' },
  { id: '3', name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing', price: 10.99, category: 'lunch', image: '/placeholder.svg?height=100&width=100' },
  { id: '4', name: 'Club Sandwich', description: 'Triple-decker sandwich with chicken, bacon, and vegetables', price: 13.99, category: 'lunch', image: '/placeholder.svg?height=100&width=100' },
  { id: '5', name: 'Grilled Salmon', description: 'Fresh salmon with seasonal vegetables', price: 22.99, category: 'dinner', image: '/placeholder.svg?height=100&width=100' },
  { id: '6', name: 'Filet Mignon', description: '8oz tenderloin with mashed potatoes', price: 29.99, category: 'dinner', image: '/placeholder.svg?height=100&width=100' },
  { id: '7', name: 'Chocolate Cake', description: 'Rich chocolate cake with vanilla ice cream', price: 8.99, category: 'desserts', image: '/placeholder.svg?height=100&width=100' },
  { id: '8', name: 'Coffee', description: 'Freshly brewed coffee', price: 3.99, category: 'beverages', image: '/placeholder.svg?height=100&width=100' },
  { id: '9', name: 'Fresh Juice', description: 'Orange, apple, or pineapple', price: 4.99, category: 'beverages', image: '/placeholder.svg?height=100&width=100' },
];

// Template for all stories
const Template = (args) => <HotelMenu {...args} />;

// Default story with all features enabled
export const Default = Template.bind({});
Default.args = {
  hotelId: '67755367f599964c96e23fee',
  menuId: 'default-menu',
  showAmount: true,
  showFilter: true,
  initialCategories: mockCategories,
  initialMenuItems: mockMenuItems,
};

// Story with prices hidden
export const HiddenPrices = Template.bind({});
HiddenPrices.args = {
  ...Default.args,
  showAmount: false,
};

// Story with filters hidden
export const HiddenFilters = Template.bind({});
HiddenFilters.args = {
  ...Default.args,
  showFilter: false,
};

// Story with loading state (empty initial data)
export const Loading = Template.bind({});
Loading.args = {
  hotelId: '67755367f599964c96e23fee',
  menuId: 'loading-menu',
  initialCategories: [],
  initialMenuItems: [],
};

// Story that matches the URL parameters in the request
export const MatchingUrlParams = Template.bind({});
MatchingUrlParams.args = {
  hotelId: '67755367f599964c96e23fee',
  menuId: 'custom-menu',
  showAmount: true,
  showFilter: false,
  initialCategories: mockCategories,
  initialMenuItems: mockMenuItems,
};