# 🏗️ How to Upload Your Works

## **📋 Quick Upload Methods**

### **Method 1: Drag & Drop (Easiest)**

1. **Open Finder** and navigate to your portfolio folder
2. **Drag your project images** to the `images/` folder
3. **Edit the HTML** to use your images

### **Method 2: Terminal Commands**

```bash
# Copy images from your computer
cp /path/to/your/project1.jpg images/
cp /path/to/your/project2.jpg images/

# Copy videos
cp /path/to/your/video.mp4 videos/
```

### **Method 3: Copy from External Drive**

```bash
# If your images are on a USB drive
cp /Volumes/USB_DRIVE/your_images/* images/
```

## **🎨 How to Update Your Works Page**

### **Step 1: Replace Project Images**

In `index.html`, find this section and update it:

```html
<article class="work-item">
    <a href="works/your-project.html">
        <h2>Your Real Project Title</h2>
        <div class="work-image">
            <img src="images/your-project-image.jpg" alt="Your Project Description">
        </div>
    </a>
</article>
```

### **Step 2: Create Individual Project Pages**

For each project, create a new file in the `works/` folder:

```bash
# Copy the sample project as a template
cp works/sample-project.html works/your-project.html
```

### **Step 3: Update Project Content**

Edit your project page with:
- **Project title**
- **Description**
- **Images**
- **Videos**
- **Process details**

## **📁 File Organization**

```
architectural-portfolio/
├── index.html              # Main works page
├── images/                 # Your project images
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── videos/                 # Your project videos
│   ├── project1.mp4
│   └── project2.mp4
├── works/                  # Individual project pages
│   ├── sample-project.html
│   ├── your-project1.html
│   └── your-project2.html
└── styles.css              # Styling
```

## **🎯 Step-by-Step Upload Process**

### **1. Prepare Your Images**
- **Format:** JPG, PNG, or WebP
- **Size:** 800x600px or larger
- **Quality:** High quality, but optimized for web
- **Naming:** Use descriptive names (e.g., `urban-design-project.jpg`)

### **2. Upload Images**
```bash
# Copy your images to the images folder
cp ~/Desktop/my-projects/*.jpg images/
```

### **3. Update the Main Page**
Edit `index.html` and replace the placeholder projects:

```html
<!-- Replace this -->
<article class="work-item">
    <a href="works/urban-innovation-center.html">
        <h2>Urban Innovation Center</h2>
        <div class="work-image">
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop" alt="Urban Innovation Center">
        </div>
    </a>
</article>

<!-- With this -->
<article class="work-item">
    <a href="works/your-real-project.html">
        <h2>Your Real Project Name</h2>
        <div class="work-image">
            <img src="images/your-project-image.jpg" alt="Your Project Description">
        </div>
    </a>
</article>
```

### **4. Create Project Pages**
For each project, create a detailed page:

```bash
# Create a new project page
cp works/sample-project.html works/your-project.html
```

### **5. Add Videos (Optional)**
```bash
# Copy your videos
cp ~/Desktop/my-videos/*.mp4 videos/
```

## **📱 Image Optimization Tips**

### **File Size Guidelines:**
- **Thumbnails:** 200-500KB
- **Project images:** 500KB-2MB
- **Hero images:** 1-3MB

### **Optimization Tools:**
- **Online:** TinyPNG, Squoosh
- **Mac:** Preview app (Export with reduced quality)
- **Terminal:** ImageOptim (free app)

### **Recommended Dimensions:**
- **Thumbnails:** 400x300px
- **Project images:** 800x600px
- **Hero images:** 1200x800px

## **🎬 Video Upload**

### **For Videos:**
1. **Save in `videos/` folder**
2. **Format:** MP4 (recommended)
3. **Size:** Under 50MB for web
4. **Resolution:** 1280x720 or 1920x1080

### **Video Embedding:**
```html
<div class="video-container">
    <video controls>
        <source src="../videos/your-video.mp4" type="video/mp4">
    </video>
</div>
```

## **🚀 Quick Commands**

### **Upload images:**
```bash
# Copy all images from a folder
cp /path/to/your/images/* images/

# Copy specific images
cp ~/Desktop/project1.jpg images/
cp ~/Desktop/project2.jpg images/
```

### **Create project pages:**
```bash
# Create a new project page
cp works/sample-project.html works/my-project.html

# Edit the new page
open -a "TextEdit" works/my-project.html
```

### **Update main page:**
```bash
# Edit the main works page
open -a "TextEdit" index.html
```

## **📋 Project Information to Include**

### **For Each Project:**
- **Title**
- **Year**
- **Description**
- **Process/Concept**
- **Technologies used**
- **Images (3-8 photos)**
- **Video (optional)**
- **Team members (if applicable)**

### **Example Project Structure:**
```
works/my-project.html
├── Project title
├── Description
├── Process video
├── Project images
├── Technical details
└── Back to works link
```

## **🔧 Troubleshooting**

### **Images not showing:**
- Check file path is correct
- Ensure image is in the `images/` folder
- Verify file format (JPG, PNG, WebP)

### **Large file sizes:**
- Compress images using online tools
- Reduce resolution
- Use WebP format for better compression

### **Videos not playing:**
- Check file format (MP4 recommended)
- Verify file is in `videos/` folder
- Test in different browsers

## **💡 Pro Tips**

1. **Use consistent naming** for your files
2. **Create thumbnails** for faster loading
3. **Optimize images** before uploading
4. **Test on mobile** devices
5. **Keep backups** of original files

---

**Ready to upload your works?** Start by copying your project images to the `images/` folder! 🎨✨ 