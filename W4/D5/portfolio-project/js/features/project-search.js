function projectSearch(data = projectsData) {
    const projectsContainer = document.getElementById("projects-container");
    if(!projectsContainer){
        console.log("Projects not found");
        return;
    }
    
    projectsContainer.innerHTML = "";
    
    data.forEach(function(project){
        const code = document.createElement("div");
        code.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        const iconData = document.createElement("span");
        iconData.className = "text-2xl text-white font-bold";
        iconData.textContent = project.status; // Show status in the box
        
        iconBox.appendChild(iconData);

        const projectName = document.createElement("h3");
        projectName.className ="text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-2";
        projectDescription.textContent = project.description;
    
        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm font-bold text-green-800";
        // .join converts the technology array into a string
        projectTechnologies.textContent = project.technologies.join(", ");

        code.appendChild(iconBox);
        code.appendChild(projectName);
        code.appendChild(projectDescription);
        code.appendChild(projectTechnologies);
        projectsContainer.appendChild(code);
    });
}

// SEARCH BAR LOGIC
const searchInput = document.getElementById("project-search");

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    
    const filtered = projectsData.filter(project => {
        return project.name.toLowerCase().includes(term) || 
               project.category.toLowerCase().includes(term) ||
               project.technologies.some(t => t.toLowerCase().includes(term));
    });

    projectSearch(filtered); // Re-run display with filtered data
});

// Initial Load
document.addEventListener("DOMContentLoaded", () => projectSearch());