export const growthClubCardData = {
  logo: "/images/discovery/1851-growth-club-blue.png",
  title: "Buying A Franchise is Tough. We Make It Easier.",
  description:
    "Finding the right franchise has never been easier. Growth Club is here to help.",
  ctas: [
    {
      label: "Get A Login",
      href: "/growth-club/login",
      variant: "primary",
    },
    {
      label: "Schedule A Call",
      href: "/schedule-call",
      variant: "secondary",
    },
    {
      label: "Login",
      href: "/login",
      variant: "ghost",
    },
  ],
  filters: {
    title: "Find A Franchise Opportunity",
    industryOptions: [
      { label: "Lawn Care", value: "lawn-care" },
      { label: "Food & Beverage", value: "food-beverage" },
      { label: "Home Services", value: "home-services" },
      { label: "Fitness", value: "fitness" },
    ],
    investmentRange: {
      min: 1000,
      max: 100000,
    },
    applyCta: {
      label: "Apply Filter",
    },
  },
};
