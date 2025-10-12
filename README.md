# Next.js + Stack Auth + Shadcn UI Starter Template

A modern, production-ready starter template for building secure web applications with Next.js App Router, Stack Auth authentication, and beautiful Shadcn UI components.

## Features

- **Next.js 15** with App Router and Turbopack for blazing-fast development
- **Stack Auth** for secure, production-ready authentication
  - Email/password authentication
  - OAuth providers support
  - User management dashboard
  - Session handling with secure cookies
- **Shadcn UI** - A complete collection of accessible, customizable UI components
- **TypeScript** for type-safe development
- **Tailwind CSS 4** for modern styling
- **Biome** for fast linting and formatting
- **React Hook Form + Zod** for form validation
- **Lucide Icons** for beautiful iconography

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- A **Stack Auth** account (free to create at [stack-auth.com](https://stack-auth.com))

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

Or use your preferred package manager:

```bash
yarn install
# or
pnpm install
# or
bun install
```

### 2. Set Up Stack Auth

#### Create a Stack Auth Account

1. Go to [stack-auth.com](https://stack-auth.com)
2. Sign up for a free account
3. Create a new project
4. Navigate to your project settings

#### Get Your API Keys

In your Stack Auth dashboard:

1. Go to **Settings** or **API Keys**
2. Copy the following three values:
   - `Project ID`
   - `Publishable Client Key`
   - `Secret Server Key`

### 3. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Stack Auth credentials:

```env
# Stack Auth Configuration
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_publishable_key_here
STACK_SECRET_SERVER_KEY=your_secret_key_here
```

**Important**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

Or with your preferred package manager:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

## Project Structure

```
nextjs-stack-auth/
├── src/
│   ├── app/
│   │   ├── handler/
│   │   │   └── [...stack]/        # Stack Auth route handlers
│   │   ├── layout.tsx              # Root layout with Stack provider
│   │   ├── page.tsx                # Home page with auth logic
│   │   └── loading.tsx             # Loading states
│   ├── components/
│   │   ├── ui/                     # Shadcn UI components
│   │   ├── AuthenticatedView.tsx   # Content shown to logged-in users
│   │   └── UnauthenticatedView.tsx # Content shown to guests
│   ├── stack/
│   │   ├── client.tsx              # Stack Auth client configuration
│   │   └── server.tsx              # Stack Auth server configuration
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn, etc.)
│   └── hooks/
│       └── use-mobile.ts           # Mobile detection hook
├── .env.example                    # Example environment variables
├── .env.local                      # Your local environment variables (create this)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Customizing Views for Authenticated and Unauthenticated Users

The template includes two main view components that you can customize:

#### Authenticated View

Edit [src/components/AuthenticatedView.tsx](src/components/AuthenticatedView.tsx) to customize what authenticated users see:

```tsx
'use client';

import type { User } from "@stackframe/stack";

interface AuthenticatedViewProps {
  user: User;
}

export function AuthenticatedView({ user }: AuthenticatedViewProps) {
  return (
    <div className="container mx-auto p-8">
      <h1>Welcome back, {user.displayName || user.primaryEmail}!</h1>
      {/* Add your authenticated content here */}
    </div>
  );
}
```

The `user` object provides access to:
- `user.id` - Unique user identifier
- `user.displayName` - User's display name
- `user.primaryEmail` - User's email address
- `user.profileImageUrl` - User's profile picture URL
- And more - see [Stack Auth documentation](https://docs.stack-auth.com)

#### Unauthenticated View

Edit [src/components/UnauthenticatedView.tsx](src/components/UnauthenticatedView.tsx) to customize the landing page for guests:

```tsx
'use client';

export function UnauthenticatedView() {
  return (
    <div className="container mx-auto p-8">
      <h1>Welcome to Our App</h1>
      <p>Please sign in to continue</p>
      {/* Add your landing page content here */}
    </div>
  );
}
```

### Adding Shadcn UI Components

This template includes a comprehensive set of Shadcn UI components. To use them in your components:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

To add additional Shadcn components, visit [ui.shadcn.com](https://ui.shadcn.com) and follow their installation instructions.

### Accessing User Information

Use Stack Auth hooks to access user data and authentication state:

```tsx
'use client';

import { useUser, useStackApp } from "@stackframe/stack";

export function MyComponent() {
  const user = useUser(); // Returns user object or null
  const stackApp = useStackApp();

  const handleSignOut = async () => {
    await stackApp.signOut();
  };

  if (!user) {
    return <div>Not signed in</div>;
  }

  return (
    <div>
      <p>Email: {user.primaryEmail}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
```

## Available Scripts

### Development

```bash
npm run dev          # Start development server with Turbopack
```

### Production

```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run Biome linter
npm run format       # Format code with Biome
```

## Stack Auth Features

### Built-in Authentication UI

Stack Auth provides pre-built authentication UI components:

- Sign in page
- Sign up page
- Password reset
- Email verification
- User profile settings
- Account settings

Access these at: `http://localhost:3000/handler/sign-in`

### Customizing Authentication Behavior

Configure Stack Auth in [src/stack/client.tsx](src/stack/client.tsx):

```tsx
import { StackClientApp } from "@stackframe/stack";

export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",
  // Add more configuration options here
});
```

### Server-Side Authentication

For server components and API routes, use Stack Auth server configuration from [src/stack/server.tsx](src/stack/server.tsx).

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository to Vercel
3. Add your environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_STACK_PROJECT_ID`
   - `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`
   - `STACK_SECRET_SERVER_KEY`
4. Deploy!

For other platforms, build with `npm run build` and deploy the `.next` folder.

### Important Deployment Notes

1. **Environment Variables**: Ensure all environment variables are set in your deployment platform
2. **Stack Auth Configuration**: Update your Stack Auth project settings with your production domain
3. **Callback URLs**: Add your production URLs to Stack Auth's allowed callback URLs

## Troubleshooting

### Authentication Not Working

- Verify all three environment variables are set correctly in `.env.local`
- Ensure you've restarted the development server after adding environment variables
- Check that your Stack Auth project is active and not in development mode

### "Invalid API Key" Error

- Double-check that you copied the correct keys from Stack Auth
- Ensure there are no extra spaces or quotes in your `.env.local` file
- Verify you're using the keys from the correct Stack Auth project

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Clear Next.js cache: `rm -rf .next`
- Restart your development server

### Components Not Styling Correctly

- Ensure Tailwind CSS is properly configured
- Check that you've imported the component correctly
- Verify your `globals.css` file includes Tailwind directives

## Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Stack Auth Documentation](https://docs.stack-auth.com) - Complete Stack Auth guide
- [Shadcn UI Documentation](https://ui.shadcn.com) - UI component documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS reference

## Contributing

This is an open-source template. Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

This template is open source and available under the [MIT License](LICENSE).

## Support

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the documentation links above
3. Open an issue on GitHub
4. Join the Stack Auth Discord community

---

Happy coding! If you found this template helpful, please consider giving it a star.
