#!/bin/bash

# Script to read projects from current directory and generate project pages
echo "🏗️ Reading projects from current directory..."

# Create pdfs folder if it doesn't exist
mkdir -p pdfs

# Loop through each project folder (excluding system folders and files)
for project_folder in */; do
    if [ -d "$project_folder" ] && [[ ! "$project_folder" =~ ^(images|videos|works|\.git|\.DS_Store|index\.rtfd) ]]; then
        project_name=$(basename "$project_folder")
        echo "📁 Processing project: $project_name"
        
        # Create project page
        project_file="works/$project_name.html"
        
        # Check if description file exists
        description_file="$project_folder/description.txt"
        if [ -f "$description_file" ]; then
            description=$(cat "$description_file")
        else
            description="A project exploring the karmic process of transformation and emergence through architectural design."
        fi
        
        # Create the project HTML file
        cat > "$project_file" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$project_name - Yingxuan Ma</title>
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        .project-content {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .project-header {
            margin-bottom: 60px;
        }
        
        .project-title {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 1rem;
            color: #333;
        }
        
        .project-description {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.7;
            margin-bottom: 2rem;
        }
        
        .project-images {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .project-image {
            border-radius: 4px;
            overflow: hidden;
        }
        
        .project-image img {
            width: 100%;
            height: auto;
            transition: transform 0.3s ease;
        }
        
        .project-image:hover img {
            transform: scale(1.02);
        }
        
        .back-link {
            display: inline-block;
            margin-bottom: 40px;
            color: #666;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .back-link:hover {
            color: #333;
        }
        
        .back-link::before {
            content: "← ";
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-brand">
                <a href="../index.html">Yingxuan Ma</a>
            </div>
            <ul class="nav-menu">
                <li><a href="../index.html" class="nav-link">Works</a></li>
                <li><a href="../shows.html" class="nav-link">Shows</a></li>
                <li><a href="../press.html" class="nav-link">Press</a></li>
                <li><a href="../conversations.html" class="nav-link">Conversations</a></li>
                <li><a href="../about.html" class="nav-link">About</a></li>
            </ul>
        </div>
    </nav>

    <main class="main-content">
        <div class="container">
            <a href="../index.html" class="back-link">Back to Works</a>
            
            <div class="project-content">
                <header class="project-header">
                    <h1 class="project-title">$project_name</h1>
                    <p class="project-description">$description</p>
                </header>

                <section class="project-images">
EOF

        # Add images from the project folder
        for image in "$project_folder"*.{jpg,jpeg,png,gif,webp}; do
            if [ -f "$image" ]; then
                image_name=$(basename "$image")
                echo "    <div class=\"project-image\">
        <img src=\"../images/$project_name/$image_name\" alt=\"$project_name - $image_name\">
    </div>" >> "$project_file"
                
                # Copy image to images folder
                mkdir -p "images/$project_name"
                cp "$image" "images/$project_name/"
            fi
        done

        # Close the HTML file
        cat >> "$project_file" << EOF
                </section>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Yingxuan Ma. All rights reserved.</p>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>
</html>
EOF

        echo "✅ Created project page: $project_file"
    fi
done

echo "🎉 All projects processed!"
echo "📁 Check the works/ folder for your project pages"
echo "📁 Check the images/ folder for your project images" 