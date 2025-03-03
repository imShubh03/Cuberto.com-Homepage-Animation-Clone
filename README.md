# Cuberto.com Homepage Animation Clone

A frontend developer assignment project that recreates key sections and animations from the Cuberto.com homepage.

## 🚀 Live Demo

[View Live Demo](https://cuberto-clone.vercel.app)

## ✨ Features

- **Custom Cursor**: Recreated Cuberto's signature custom cursor with hover effects
- **Smooth Animations**: Text reveal, scroll-triggered animations, and hover effects
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Loading Screen**: Animated loading screen with progress indicator
- **Interactive Navigation**: Mobile-friendly navigation with smooth transitions

## 🛠️ Technologies Used

- **Next.js**: React framework for building the application
- **Framer Motion**: For implementing smooth animations and transitions
- **Tailwind CSS**: For styling and responsive design
- **JavaScript**: For interactive elements

## 🔍 Sections Implemented

1. **Hero Section**: With staggered text reveal animations
2. **Services Section**: With hover animations and a marquee text effect
3. **Projects Section**: With image hover effects and smooth transitions
4. **Footer**: With staggered reveal animations
5. **Navigation**: With mobile-responsive menu and smooth transitions

## 💡 Implementation Details

### Custom Cursor

The custom cursor implementation uses Framer Motion to create a smooth-following cursor that changes size on hover over interactive elements. The cursor consists of two elements - a larger circle that follows the mouse with a slight delay and a smaller dot that follows more precisely.

### Text Animations

Text animations are implemented using Framer Motion's staggered animations. The text reveal effect in the hero section uses a combination of overflow hidden containers and y-axis translations to create a smooth upward reveal effect.

### Scroll-Triggered Animations

The `useInView` hook from Framer Motion is used to detect when elements enter the viewport, triggering animations only when they become visible to the user. This creates a pleasant scrolling experience as content animates in as you scroll down the page.

### Service Cards

Service cards feature hover animations that change the background color and slightly elevate the card. This is achieved using a combination of Tailwind CSS transitions and Framer Motion hover animations.

### Project Cards

Project cards include subtle image scale animations on hover and a smooth y-axis translation to create an elevated effect.

### Mobile Menu

The mobile navigation menu uses AnimatePresence and variants to create a smooth opening and closing animation with staggered item reveals.

## 🚧 Challenges and Solutions

### Challenge 1: Custom Cursor Performance

**Problem**: Initially, the custom cursor had performance issues on mobile devices and would sometimes lag during complex animations.

**Solution**: Optimized the cursor by using Framer Motion's performance-focused spring animations and adding conditional rendering to disable the custom cursor on touch devices.

### Challenge 2: Responsive Text Animations

**Problem**: Text animations that looked good on desktop didn't scale well to mobile devices.

**Solution**: Implemented responsive font sizes using Tailwind's responsive modifiers and adjusted animation parameters based on screen size.

### Challenge 3: Scroll Performance

**Problem**: Having too many animated elements triggered by scroll caused performance issues.

**Solution**: Implemented lazy loading of animations using the `useInView` hook with the `once: true` option to ensure animations only trigger once when they enter the viewport.

## 📱 Responsive Design

The clone is fully responsive with specific optimizations for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktops (> 1024px)

Media queries and Tailwind's responsive classes ensure that the design looks great on all screen sizes.

## 🏃‍♂️ Running Locally

1. Clone the repository
```bash
git clone https://github.com/yourusername/cuberto-clone.git
```


2. Install dependencies


```shellscript
cd cuberto-clone
npm install
```

3. Run the development server


```shellscript
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


Thought for 6 seconds### Cuberto.com Homepage Animation Clone

I'll help you complete this frontend developer assignment by recreating key sections from Cuberto's homepage with a focus on their signature animations. Let's build this with Next.js, Tailwind CSS, and Framer Motion.

```typescriptreact project="cuberto-clone"
...
```

Now, let's create a GitHub README file for this project:

```markdown project="Cuberto Clone" file="README.md"
...
```

2. Install dependencies


```shellscript
cd cuberto-clone
npm install
```

3. Run the development server


```shellscript
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


## 🚀 Deployment

The project is deployed on Vercel. Any changes pushed to the main branch will automatically trigger a new deployment.

## 📝 Future Improvements

- Add more sections from the Cuberto homepage
- Implement page transitions for multi-page navigation
- Add more interactive elements like parallax scrolling
- Optimize animations further for better performance on low-end devices


## 📄 License

This project is created for practice purposes.
