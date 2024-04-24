const projectDetails = {
    "2014": {
        image: "path_to_image_2014.jpg",
        title: "Solar Power System: Haas Lab Solar Station",
        text: "Project Description: This project involved the design and installation of a standalone solar power system specifically for powering a workbench in Haas Lab, California State University Northridge. The system was strategically positioned to optimize sunlight absorption and minimize DC power loss, featuring two-axis tracking solar panels for maximum energy efficiency. Additional Component: A portable 'charging tree' was also developed. This was a solar-powered device designed to charge multiple mobile devices, showcasing sustainable energy application in a public setting."
    },
    "2015": {
        image: "path_to_image_2015.jpg",
        title: "Biodiesel Fuel Project",
        text: "Project Focus: The goal was to convert waste vegetable oils and fats into biodiesel fuel. This included setting up a system to collect waste vegetable oil from campus dining facilities, which was then processed into biodiesel. Solar-Powered Stirling Engine: Parallel research was conducted on a solar-powered Stirling engine, aimed at serving as a potential heat source to assist the biodiesel production process."
    },
    "2016": {
        image: "path_to_image_2016.jpg",
        title: "Biodiesel Fuel Project (continued)",
        text: "Continued Focus: This project furthered the biodiesel initiative from 2015, concentrating on refining the chemical treatment, washing, and drying processes essential for producing high-quality biodiesel. Engine Testing: A 10 HP diesel engine was selected and tested to operate on the produced biodiesel, validating the fuel's effectiveness and application potential."
    },
    "2020": {
        image: "path_to_image_2020.jpg",
        title: "Sustainable Mobile Home / 3D Printer Extruder",
        text: "Mobile Home: The design and manufacturing of a mobile tiny home powered by solar panels were undertaken. Key features included a rainwater collection system and solar power integration, providing a self-sustaining living environment. 3D Printer Extruder: A 3D printer extruder was developed to recycle plastic bottles into usable filament, promoting recycling and sustainable manufacturing practices."
    },
    "2021": {
        image: "path_to_image_2021.jpg",
        title: "Wind Turbine and 3D Printer Extruder (continued)",
        text: "3D Printer Extruder Development: Continuation of the extruder project focused on testing various types of plastics to improve the quality and usability of the produced filament. Renewable Energy System Design: A small wind turbine was designed and modeled to complement the existing solar energy systems. Additionally, a battery storage system was developed to store the energy generated from both the wind turbine and solar panels, ensuring a consistent and reliable power supply."
    },
    "2022": {
        image: "path_to_image_2022.jpg",
        title: "Biomass Fuel Cells and Solar Electrolyzers",
        text: "This project includes two main parts: biomass fuel cells and solar electrolyzers. Biomass Fuel Cells: Aimed at using biomass waste such as kitchen scraps and gardening refuse to produce biomass pellet fuel. Biomass pellets can be used to generate electricity, powering the solar electrolyzer system. Research was conducted on key processes such as biomass pretreatment, pellet pressing, and storage. Solar Electrolyzers: Designed and modeled a system that uses solar energy to electrolyze seawater to produce hydrogen and oxygen gases. The produced hydrogen can be stored and used as a clean fuel. The system includes solar panels, an electrolyzer, gas storage tanks, and other components. Explored methods to improve electrolysis efficiency, such as using anode and cathode catalysts."
    },
    // Include other years similarly
};

document.querySelectorAll('.timeline-years .year').forEach(year => {
    let hoverTimeout;

    year.addEventListener('click', function() {
        updateDetails(this.dataset.year);
        setYearActive(this);
    });

    year.addEventListener('mouseenter', function() {
        hoverTimeout = setTimeout(() => {
            updateDetails(this.dataset.year);
            setYearActive(this);
        }, 180);
    });

    year.addEventListener('mouseleave', function() {
        clearTimeout(hoverTimeout);
    });
});

function setYearActive(selectedYear) {
    document.querySelectorAll('.year').forEach(y => y.classList.remove('active'));
    selectedYear.classList.add('active');
}

function updateDetails(year) {
    const details = projectDetails[year];
    const image = document.querySelector('.project-image img');
    const title = document.querySelector('.project-title');
    const text = document.querySelector('.project-text');

    if (details) {
        image.src = details.image;
        title.textContent = details.title;
        text.textContent = details.text;
    }
}

// Initialize the latest year selected
const latestYear = document.querySelector('.year[data-year="2022"]');
if (latestYear) {
    updateDetails('2022');
    setYearActive(latestYear);
}