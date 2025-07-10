# 📁 Project Organization Guide

## **🎯 How to Set Up Your Projects**

### **Step 1: Create Your Project Folders**

On your Desktop, create a folder called `Website`, then add project folders inside:

```
Desktop/
└── Website/
    ├── Urban Innovation Center/
    ├── Sustainable Residential Complex/
    ├── Cultural Museum Project/
    └── Digital Fabrication Study/
```

### **Step 2: Add Project Content**

For each project folder, add:

**Required Files:**
- `description.txt` - Project description (see template below)
- `*.jpg` or `*.png` - Project images

**Optional Files:**
- `video.mp4` - Project video
- `process.pdf` - Process documentation
- `drawings.pdf` - Technical drawings

### **Step 3: Create Description Files**

Copy the template and customize for each project:

```bash
# Copy the template
cp description-template.txt ~/Desktop/Website/Your-Project-Name/description.txt

# Edit the description
open ~/Desktop/Website/Your-Project-Name/description.txt
```

### **Step 4: Run the Script**

```bash
# Generate all project pages automatically
./read-projects.sh
```

## **📋 Description File Format**

Create a `description.txt` file in each project folder:

```
Project Name: Urban Innovation Center

Description:
This project explores the intersection of computational design and urban transformation. The building emerges through algorithmic processes that respond to site conditions, creating a space that evolves with its environment and users.

Process:
- Site analysis and parametric modeling
- Digital fabrication prototyping
- Community engagement workshops
- Iterative design refinement

Technologies Used:
- Rhino + Grasshopper
- 3D printing and laser cutting
- Interactive visualization
- Sustainable materials

Year: 2024
Duration: 6 months
Location: New York, NY
Team: Solo project

Additional Notes:
This project was developed as part of my RISD thesis exploring karmic transformation in architecture.
```

## **🖼️ Image Requirements**

**Supported Formats:**
- JPG, JPEG, PNG, GIF, WebP

**Recommended Sizes:**
- **Thumbnails:** 400x300px
- **Project images:** 800x600px or larger
- **Hero images:** 1200x800px

**Naming Convention:**
- Use descriptive names: `main-view.jpg`, `process-1.jpg`, `detail-shot.png`
- Avoid spaces: use hyphens or underscores

## **🎬 Video Support**

**For videos:**
1. Save as MP4 format
2. Keep under 50MB for web
3. Name descriptively: `project-walkthrough.mp4`

## **📄 PDF Support**

**For PDFs:**
1. Save in the project folder
2. Name descriptively: `technical-drawings.pdf`
3. Link in the description if needed

## **🚀 Quick Setup Commands**

### **Create a new project:**
```bash
# Create project folder
mkdir ~/Desktop/Website/"Your Project Name"

# Copy template
cp description-template.txt ~/Desktop/Website/"Your Project Name"/description.txt

# Edit description
open ~/Desktop/Website/"Your Project Name"/description.txt
```

### **Add images:**
```bash
# Copy images to project folder
cp ~/Desktop/your-images/*.jpg ~/Desktop/Website/"Your Project Name"/
```

### **Generate website:**
```bash
# Run the script to create project pages
./read-projects.sh
```

## **📁 Example Project Structure**

```
Desktop/Website/
├── Urban Innovation Center/
│   ├── description.txt
│   ├── main-view.jpg
│   ├── process-1.jpg
│   ├── process-2.jpg
│   ├── detail-shot.png
│   └── walkthrough.mp4
├── Sustainable Residential Complex/
│   ├── description.txt
│   ├── exterior-view.jpg
│   ├── interior-view.jpg
│   └── site-plan.pdf
└── Digital Fabrication Study/
    ├── description.txt
    ├── prototype-1.jpg
    ├── prototype-2.jpg
    └── fabrication-process.mp4
```

## **🎯 What the Script Does**

When you run `./read-projects.sh`:

1. **Reads all folders** in `Desktop/Website/`
2. **Creates project pages** in `works/` folder
3. **Copies images** to `images/project-name/` folder
4. **Generates HTML** with your descriptions and images
5. **Maintains consistent styling** across all projects

## **📝 Tips for Great Descriptions**

### **Keep it Concise:**
- 2-3 paragraphs maximum
- Focus on key concepts
- Include process and technologies

### **Highlight Your Theme:**
- Mention "karmic transformation"
- Emphasize computational design
- Include technology focus

### **Include Technical Details:**
- Software used (Rhino, Grasshopper, etc.)
- Fabrication methods
- Materials and processes

## **🔧 Troubleshooting**

### **Images not showing:**
- Check file format (JPG, PNG, etc.)
- Ensure images are in the project folder
- Verify file names don't have spaces

### **Description not loading:**
- Make sure `description.txt` exists
- Check file encoding (use plain text)
- Verify file is in the project folder

### **Script not working:**
- Ensure `Desktop/Website/` folder exists
- Check that project folders contain files
- Verify script permissions: `chmod +x read-projects.sh`

---

**Ready to organize your projects?** Start by creating your first project folder on Desktop! 🏗️✨ 