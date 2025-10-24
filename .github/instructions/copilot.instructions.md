---
applyTo: '**'
---

# Project Instructions for AI Assistant

## Project Context
This is a Next.js e-commerce application with TypeScript and TSX, using SQL for database operations and Stripe for payments.

## File Naming Conventions

### Components (IMPORTANT - Always follow this)
- React component files: Use PascalCase - `ApplicationSettings.tsx`, `UserProfile.tsx`, `NavBar.tsx`
- Folders = lowercase/kebab-case (product-card/)
- **Always create components in PascalCase regardless of how the user types the request**
- **Always use .tsx extension for React components**

### Utilities and Helpers
- Utility files: Use camelCase - `dateUtils.ts`, `apiHelpers.ts`
- Utility folders: Use camelCase - `utils/`, `helpers/`

## Code Generation Guidelines

### API Integration
- **Always use Axios for API calls** - never use fetch or other HTTP libraries
- Create reusable API service functions with proper TypeScript types
- Implement proper error handling for API calls
- Use interceptors for common functionality (auth headers, error handling)
- Define request and response types for all API calls

### Variable and Function Naming
- Use descriptive, meaningful variable names - `userAuthToken` not `token`
- Function names should clearly describe their purpose - `calculateTotalPrice()` not `calc()`
- Boolean variables should be prefixed with `is`, `has`, `can` - `isLoggedIn`, `hasPermission`
- Constants should use UPPER_SNAKE_CASE - `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`

### No Hardcoded Values
- **Never hardcode values directly in components**
- Use environment variables for API endpoints, keys, and configuration
- Create constants files for static values - `src/constants/`
- Use configuration objects for repeated values
- Extract magic numbers into named constants

### Component Reusability
- **Always check for existing reusable components before creating new ones**
- Adapt existing components with props when possible
- Create generic, flexible components that can handle multiple use cases
- Use composition over duplication
- Make components configurable through props and adaptable to the request prompt

## Coding Standards
- **Use TypeScript with TSX syntax**
- Prefer functional components over class components
- Use proper TSX syntax and conventions
- Follow ESLint and Prettier configurations
- Define TypeScript interfaces and types for all props, state, and data structures
- Use strict TypeScript configuration

## Styling Guidelines
- **Always use Tailwind CSS for styling** - primary styling method
- Follow mobile-first responsive design
- Use CSS modules for component-specific styles only when Tailwind is insufficient
- Maintain consistent spacing using Tailwind scale
- Apply Tailwind utility classes consistently across all components

## Security Considerations
- Validate all user inputs
- Sanitize data before database operations
- Implement rate limiting for public endpoints
- Use TypeScript to enforce type safety and prevent runtime errors

## Testing Approach
- Write unit tests for utility functions
- Use React Testing Library for component tests
- Mock external API calls in tests
- Maintain >80% code coverage
- Type-check tests with TypeScript

## AI Instructions for File Creation
When creating files:
- **React components: Always use .tsx extension** (ApplicationSettings.tsx)
- **Utility files: Always use .ts extension** (dateUtils.ts)
- **Use TypeScript syntax and type annotations**
- Create components in appropriate folder structure
- Use modern TypeScript and ES6+ features

## AI Instructions for Code Generation
When generating code, always follow these principles:

### 1. TypeScript/TSX Only
- **Generate TypeScript code with TSX syntax**
- **Always include proper type annotations**
- Use modern TypeScript and ES6+ features
- Define interfaces for component props
- Use type inference where appropriate
- Avoid using `any` type - use proper typing or `unknown` when necessary

### 2. API Calls - Use Axios Only
- Implement all HTTP requests using Axios
- Define TypeScript interfaces for request and response types
- Add proper error handling and try-catch blocks
- Use Axios interceptors for common functionality
- Type Axios configurations and responses

### 3. No Hardcoded Values
- Extract all URLs, strings, numbers to constants or environment variables
- Store API endpoints in environment variables
- Create constants files for static data
- Use `const` assertions and `as const` for literal types

### 4. Proper Variable Naming
- Use descriptive, self-documenting variable names
- Follow TypeScript naming conventions
- Use meaningful function names that describe their purpose
- Prefix boolean variables appropriately (is, has, can, should)
- Use PascalCase for types and interfaces

### 5. Tailwind CSS Styling
- Apply Tailwind utility classes for all styling needs
- Use responsive design classes (sm:, md:, lg:, xl:)
- Implement mobile-first approach
- Maintain consistent spacing and typography scales

### 6. Reusable Components
- Before creating new components, suggest existing reusable alternatives
- Make components flexible through props configuration
- Design components to be adaptable to different use cases
- Create composition-friendly component APIs
- Ensure components can be customized based on the request prompt requirements
- Use generic types for reusable components when appropriate

### 7. TypeScript Best Practices
- Define clear interfaces for all props (`interface ComponentNameProps`)
- Use type unions and intersections appropriately
- Implement generic types for reusable functions and components
- Use utility types (Partial, Pick, Omit, Record, etc.)
- Define custom types for domain-specific data
- Use enums or const objects with `as const` for fixed sets of values
- Leverage discriminated unions for complex state management

## CRITICAL REMINDERS:
- **Always generate TypeScript/TSX code**
- **Use .tsx extension for components and .ts for utilities**
- **Always define interfaces/types for props, state, and data**
- **Include proper type annotations throughout the code**
- **Use strict TypeScript configuration**

## Layered Architecture (Current Project Structure)

Your project is organized using a strict layered architecture:

- **Data Layer:**
  - All API calls and data fetching are handled in `src/data/` (e.g., `projectRepository.ts`).
  - Uses Axios and a single API base URL (`API_BASE_URL`).
  - Define TypeScript interfaces for all API request/response types.

- **Domain (Service) Layer:**
  - Business logic, data transformation, and use-cases are handled in `src/domain/` (e.g., `projectService.ts`).
  - Keeps components and slices free of business logic.
  - Define types for domain models and business entities.

- **Presentation Layer:**
  - UI components are organized in `src/components/`.
  - Components only handle rendering and receive data via props/hooks.
  - All component props must be properly typed.

### Example Data Flow
1. Component (e.g., `Projects.tsx`) requests data via Redux (with typed actions and selectors).
2. Redux slice calls the repository in the data layer (with typed responses).
3. Repository fetches data from the API (with typed Axios requests).
4. Service layer transforms or maps the data (with typed transformations).
5. Component renders the processed data (with typed props).

### Benefits
- Improved modularity and maintainability.
- Easier to test and extend business logic.
- Clean separation between data access, business rules, and UI.
- Type safety throughout the entire application stack.
- Better IDE support and autocomplete.
- Catch errors at compile-time rather than runtime.