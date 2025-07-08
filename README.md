# Architectural Portfolio Website

A clean, minimalist portfolio website for architectural designers, inspired by the Jakob Steensen website design. Built with HTML, CSS, and JavaScript.

## Features

- **Clean, minimalist design** - Focus on your work with plenty of whitespace
- **Responsive layout** - Looks great on desktop, tablet, and mobile
- **Smooth animations** - Subtle hover effects and loading animations
- **Professional typography** - Uses Inter font family for modern readability
- **SEO-friendly** - Proper HTML structure and meta tags

## Pages

1. **Works** (`index.html`) - Main portfolio page with project grid
2. **Shows** (`shows.html`) - Exhibitions and events
3. **Press** (`press.html`) - Media coverage and publications
4. **Conversations** (`conversations.html`) - Talks, podcasts, and interviews
5. **About** (`about.html`) - Bio, experience, and contact information

## Customization Guide

### 1. Personal Information

Update the following in all HTML files:
- Replace "Your Name" with your actual name
- Update contact information in `about.html`
- Change email, phone, and location details

### 2. Projects/Works

In `index.html`, update the works section:
```html
<article class="work-item">
    <a href="works/your-project.html">
        <h2>Your Project Title</h2>
        <div class="work-image">
            <img src="path/to/your/image.jpg" alt="Project Description">
        </div>
    </a>
</article>
```

### 3. Images

- Replace placeholder images with your actual project photos
- Recommended image size: 800x600px or similar aspect ratio
- Use high-quality JPG or PNG files
- Optimize images for web (compress them)

### 4. Content

Update the content in each page:
- **About page**: Your bio, education, experience, awards
- **Shows page**: Your exhibitions and events
- **Press page**: Your media coverage
- **Conversations page**: Your talks and interviews

### 5. Colors and Styling

The website uses a neutral color palette:
- Primary text: `#333`
- Secondary text: `#666`
- Background: `#fff`
- Borders: `#f0f0f0`

To change colors, edit the CSS variables in `styles.css`.

## File Structure

```
architectural-portfolio/
├── index.html              # Home/Works page
├── about.html              # About page
├── shows.html              # Shows page
├── press.html              # Press page
├── conversations.html      # Conversations page
├── styles.css              # All styling
├── script.js               # JavaScript functionality
└── README.md              # This file
```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get a custom domain (optional)

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

### Option 4: Traditional Web Hosting
Upload files to any web hosting service (Bluehost, HostGator, etc.)

## Next Steps: React/Next.js Version

To upgrade to React/Next.js for more advanced features:

1. **Install Node.js** (if not already installed):
   ```bash
   # On macOS with Homebrew
   brew install node
   
   # Or download from nodejs.org
   ```

2. **Create Next.js project**:
   ```bash
   npx create-next-app@latest my-portfolio --typescript --tailwind --eslint
   ```

3. **Benefits of React/Next.js version**:
   - Dynamic content management
   - Better performance
   - Easier updates
   - More interactive features
   - SEO optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize images** - Compress before uploading
2. **Minimize HTTP requests** - Combine CSS/JS files
3. **Use a CDN** - For faster loading globally
4. **Enable caching** - For returning visitors

## Accessibility

The website includes:
- Proper heading structure
- Alt text for images
- Focus indicators for keyboard navigation
- Semantic HTML elements
- Color contrast compliance

## License

This template is free to use for personal and commercial projects.

## Support

For questions or customization help, refer to the HTML/CSS documentation or consider upgrading to the React/Next.js version for more advanced features.

---

**Ready to launch your architectural portfolio!** 🏗️✨ 