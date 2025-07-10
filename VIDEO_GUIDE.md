# 🎥 Video Upload Guide for Your Portfolio

## **📋 Video Upload Options**

### **Option 1: Direct Video Files (Best for small videos < 50MB)**

**Steps:**
1. **Save your video** in the `videos/` folder
2. **Supported formats:** MP4, WebM, OGV
3. **Recommended size:** Under 50MB for fast loading
4. **Resolution:** 1920x1080 or 1280x720

**Example:**
```html
<div class="video-container">
    <video controls>
        <source src="videos/your-project.mp4" type="video/mp4">
        <source src="videos/your-project.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
</div>
```

### **Option 2: YouTube Embed (Recommended for large videos)**

**Steps:**
1. **Upload to YouTube** (private or unlisted)
2. **Get the video ID** from the URL
3. **Embed in your HTML**

**Example:**
```html
<div class="video-container">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>
</div>
```

### **Option 3: Vimeo Embed (Professional option)**

**Steps:**
1. **Upload to Vimeo** (free account available)
2. **Get the video ID** from the URL
3. **Embed in your HTML**

**Example:**
```html
<div class="video-container">
    <iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen>
    </iframe>
</div>
```

## **🎬 How to Add Videos to Your Projects**

### **Step 1: Create Project Pages**

For each project, create a new HTML file in the `works/` folder:

```html
<!-- works/your-project.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Your Project - Yingxuan Ma</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <!-- Your navigation -->
    </nav>

    <main class="main-content">
        <div class="container">
            <a href="../index.html" class="back-link">← Back to Works</a>
            
            <div class="project-content">
                <h1>Your Project Title</h1>
                
                <!-- Your video here -->
                <div class="video-container">
                    <video controls>
                        <source src="../videos/your-video.mp4" type="video/mp4">
                    </video>
                </div>
                
                <!-- Project description -->
                <p>Your project description...</p>
            </div>
        </div>
    </main>
</body>
</html>
```

### **Step 2: Update Main Works Page**

In `index.html`, update your project links:

```html
<article class="work-item">
    <a href="works/your-project.html">
        <h2>Your Project Title</h2>
        <div class="work-image">
            <img src="path/to/thumbnail.jpg" alt="Project Description">
        </div>
    </a>
</article>
```

## **📱 Video Optimization Tips**

### **File Size Optimization:**
- **Compress videos** using HandBrake or FFmpeg
- **Target size:** 10-50MB for web
- **Format:** MP4 with H.264 codec
- **Resolution:** 1280x720 or 1920x1080

### **Loading Optimization:**
- **Use thumbnails** for video previews
- **Lazy loading** for multiple videos
- **Progressive loading** for large files

### **Mobile Optimization:**
- **Responsive design** (already included)
- **Touch-friendly controls**
- **Fast loading** on mobile networks

## **🎨 Video Styling**

The CSS already includes responsive video styling:

```css
.video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    margin: 30px 0;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
```

## **🚀 Quick Start Commands**

### **Add a video file:**
```bash
# Copy your video to the videos folder
cp /path/to/your/video.mp4 videos/
```

### **Create a new project page:**
```bash
# Copy the sample project
cp works/sample-project.html works/your-project.html
```

### **Edit the project page:**
```bash
# Open in TextEdit
open -a "TextEdit" works/your-project.html
```

## **📋 Video Content Ideas**

### **For Architectural Portfolios:**
1. **Process videos** - Show your design process
2. **3D walkthroughs** - Virtual tours of your projects
3. **Construction timelapses** - Building process
4. **Interactive demonstrations** - Software workflows
5. **Presentation videos** - Project presentations
6. **Fabrication videos** - Digital fabrication process

### **Video Length Guidelines:**
- **Process videos:** 1-3 minutes
- **Walkthroughs:** 2-5 minutes
- **Presentations:** 5-10 minutes
- **Tutorials:** 3-8 minutes

## **🔧 Troubleshooting**

### **Video not playing:**
- Check file format (MP4 recommended)
- Verify file path is correct
- Ensure file is in the videos/ folder

### **Video too large:**
- Compress using HandBrake
- Use YouTube/Vimeo instead
- Reduce resolution to 720p

### **Mobile issues:**
- Test on different devices
- Check mobile data usage
- Consider separate mobile video files

## **💡 Pro Tips**

1. **Create thumbnails** for each video
2. **Add descriptions** below videos
3. **Use consistent aspect ratios** (16:9 recommended)
4. **Include captions** for accessibility
5. **Optimize for fast loading**

---

**Ready to add your first video?** Start with the sample project page and customize it for your work! 🎬✨ 