# Booking Flow - Take Home Project

A simplified public booking page implementation for a spa appointment system, built with Next.js, React Hook Form, and Tailwind CSS.

## 🚀 Live Demo

https://booking-flow-4mdk.vercel.app/

## 📋 Project Overview

This project implements a three-step booking flow for spa appointments:
1. **Contact Information** - Collect user details and reason for visit
2. **Payment Information** - Secure payment details and cancellation policy
3. **Confirmation** - Success confirmation with booking details

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Form Management**: React Hook Form v7.60.0
- **UI Components**: Custom components with responsive design
- **Build Tool**: Turbopack for development

## 🔧 Development Setup

### Prerequisites
- Node.js 20.15.0+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 💻 Development Flow
I structured my work in separate pull requests to reflect how I typically collaborate in real-life projects. Each PR includes meaningful commit messages and PR descriptions where I explain assumptions, tradeoffs, and context.

Here are the PRs in the order they were created:

1. [feat: add spa info card](https://github.com/anyruiz/booking-flow/pull/1)
2. [feat: personal info form](https://github.com/anyruiz/booking-flow/pull/2)
3. [feat: payment page](https://github.com/anyruiz/booking-flow/pull/3)
4. [feat: confirmation page](https://github.com/anyruiz/booking-flow/pull/4)

Each pull request builds on top of the previous one to demonstrate incremental development, clear separation of concerns, and communication of context and decisions through comments and commit messages.

## 🏗️ Architecture & Implementation

### Project Structure
```
src/
├── app/
│   ├── (booking-flow)/         # Route group for booking flow
│   │   ├── contact/            # Contact information step
│   │   ├── payment/            # Payment information step
│   │   ├── confirmation/       # Confirmation step
│   │   └── layout.tsx          # Shared layout with form context
├── components/                 # Reusable UI components
├── assets/                     # Static assets (logos, icons)
└── types.ts                    # TypeScript type definitions
```

### Key Features

#### 1. Form State Management
- Uses `react-hook-form` with `FormProvider` for global form state
- Form validation with error handling for all required fields
- Persistent form data across navigation steps

#### 2. Responsive Design
- Mobile-first approach with responsive breakpoints
- Tablet layout follows mobile behavior (as per assumptions)
- Desktop layout with side-by-side spa info and form

#### 3. Component Architecture
- **SpaInfoCard**: Displays spa center information with logo and contact details
- **TextInput**: Reusable input component with error handling
- **TextArea**: Multi-line input for reason for visit
- **Button**: Consistent button styling across the app
- **BottomBar**: Fixed bottom navigation shared between two pages

#### 4. Navigation Flow
- Client-side routing with Next.js App Router
- Form validation prevents progression until all fields are valid
- Automatic transition to confirmation page on successful submission

#### 5. Data Flow
- **Form Initialization**: Default values set in `FormProvider`
- **User Input**: Real-time validation on blur events
- **Navigation**: Form data persists across route changes
- **Submission**: Final data logged to console and redirects to confirmation

## 🔍 Assumptions I made

- All spa data is provided by the backend and can be rendered as-is, without the need for transformation.
- I assumed all the spa info is always available and properly formatted, in a production scenario, we would need to handle missing or incomplete data gracefully. For example, by displaying fallback text or a default image when the spa center logo is not available.
- Since there are no tablet-specific mockups, I assumed the tablet layout should follow the mobile behaviour and styling.
- I assumed the Figma design is intentional in omitting the Book appointment title on desktop. However, in a real-life scenario, I would confirm this with design and or product, as this kind of layout inconsistency could be accidental.
- I noticed all form fields use the placeholder Input text, which doesn't provide meaningful guidance to the user. I assumed this was a placeholder placeholder (pun intended 😄), and in a real scenario, I would request clearer content or suggest defaults like `Enter your [input name here]`,to improve accessibility and usability.
- The error message styles were not included in the design; however, I chose to display them below each input using standard form feedback patterns. In a production scenario, I’d collaborate with design to define proper styles, colours, and placement.
- I assumed that the bottom bar with the `Continue button` is intentionally included in the design for desktop screens, even though it duplicates the functionality of the `Book appointment` button. In a real project, I would clarify this with design and/or product to avoid potential UX redundancy.
- I noticed the Figma design includes an additional informational block that appears only on mobile viewports on the confirmation page. I assumed this was intentional, however, due to time constraints, I didn’t implement this section. In a real-life scenario, I would clarify with design and/or product whether this block is intended to be visible only on mobile and whether it is essential to the user experience.

## ⚖️ Trade-offs I considered

### Time vs. Perfection
- **Simplified Validation**: I implemented the minimum required validation making all the fields required, instead of a comprehensive validation using proper tools like zod or yup.
- **Component Reusability**: Due to time constraints, I wasn't able to extract the Checkbox into a reusable component or fully match its styling with the Figma designs.
- **Error Handling**: The errors displayed don't follow advanced UX patterns
- **Accessibility**: Basic accessibility features without comprehensive a11y audit

### Design vs. Functionality
- **Layout Responsiveness**: The CVV and expiry date inputs are slightly misaligned in smaller viewports, which affects the layout responsiveness.
- **Visual Polish**: Some design details were sacrificed for core functionality:
  - Validation error messages in the payment form inputs currently break the layout due to the spacing between the fields. I decided not to spend more time on this and prioritized completing the payment page instead. 
  - I didn't implement the masking functionality to format the text inside the credit card inputs info.
- **Animation**: I implemented only basic transitions or micro-interactions (like border color change on hover) to be able to focus on the core flow.

### Technical Debt
- **Type Safety**: Could benefit from stricter TypeScript configurations
- **Testing**: No test coverage due to time constraints
- **Performance**: No optimization beyond basic Next.js defaults

## 🚫 Out of Scope Items

### Technical Limitations
- **Backend Integration**: No actual API calls or data persistence
- **Payment Processing**: No real payment platform integration
- **Email Notifications**: No actual email sending functionality
- **Session Management**: No user authentication or session handling

### Design Enhancements
- **Advanced Animations**: No page transitions or loading states
- **Advanced Validation**: No real-time credit card validation or formatting
- **Accessibility**: No comprehensive a11y audit or screen reader optimization

## 📲 SMS Opt-In Scope Change – My Approach

If asked to add an SMS opt-in checkbox to the Contact Information screen, here’s how I would approach it:

### Implementation Approach
1. Add a new `smsOptIn: boolean` field to the form’s default values and submission payload.
2. Render a checkbox input with appropriate labeling and styling consistent with the existing form.
3. Treat the field as optional unless otherwise specified in the requirements.
4. Ensure the checkbox value is included in the final booking object and displayed on the confirmation screen if relevant.

### Communication 
1. **Acknowledge & Clarify**: Immediately acknowledge the request and ask key follow-up questions, such as:
- Should the checkbox be required or optional?
- What label should be used for the checkbox?
- When and how will SMS communication be used?

2. **Assess & Communicate Scope**
- Evaluate the impact on the current scope and timeline (this change is low-complexity, so likely minimal).
- Communicate a rough time estimate (likely under 1 hour for implementation only — this does not include time for QA, legal review, design approval, or copywriting).
- Confirm whether new designs or copy updates are needed.
