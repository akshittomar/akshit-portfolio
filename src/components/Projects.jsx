import React from 'react';
import img from './imgg.jpg'
import img2 from './book.jpg'
import './pro.css'
const projects = [
    {
        name: 'Major Project: Office-Boy',
        tag:"Frontend",
        imageSrc: 'src/components/imgg.jpg',
        techniques: ['React JS', 'Context API','Adobe Express', 'JWT Authentication(No external API used)' ,'Socket.io','Azure App Service','Azure DevOps'],
        description: 'Streamline projects, collaborate effortlessly, with our all-in-one professional app. Manage tasks, communicate with clients, and stay organized with ease. Join now and experience the future of project management!',
        width:"100%",
        link:"https://office-boy.azurewebsites.net"
    },
    {
        name: 'My-Notes',
        tag:"Frontend",
        imageSrc: 'src/components/download5.png',
        techniques: ['React JS', 'Redux Tool Kit', 'Auth0 Authentication','Google Api Service','Azure App Service','Azure DevOps'],
        description: 'I have crafted a sophisticated online notes storing application that seamlessly organizes and preserves your valuable notes.This platform enables you to effortlessly store, update, and delete your notes with absolute ease and efficiency.It comes with 2 modes dark and night mode . ',
        link:"https://my-notes.azurewebsites.net",
        width:"73%"
    },
    {
        name: 'Office-Boy Backend',
        imageSrc: 'src/components/membership.png',
        techniques: ['Node JS', 'Express JS', 'MongoDB Atlas','Render.com','JWT Authentication'],
        description: 'Office-Boy backend deployed on render.com and cloud storage is provided my MongoDB Atlas. I have used JWT authentication to secure user Login/Sign Up.',
        tag:"Backend",
        link:"https://office-boy-backend.onrender.com/home",
        link2:"",
        
    },
    {
        name: 'Project 2',
        
        imageSrc: './imgg.jpg',
        techniques: ['Node.js', 'Express', 'MongoDB'],
        description: 'This project does...',
    },
    {
        name: 'Project 2',
        imageSrc: './imgg.jpg',
        techniques: ['Node.js', 'Express', 'MongoDB'],
        description: 'This project does...',
    },
    {
        name: 'Project 2',
        imageSrc: './imgg.jpg',
        techniques: ['Node.js', 'Express', 'MongoDB'],
        description: 'This project does...',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="container pro">
            <h1 className="my-4">Live Deployed Projects</h1>
            <div className='row' style={{justifyContent:"space-between", alignItems:"center"}}>
            {projects.map((project, index) => (
                <div className=" mb-4" key={index} style={{width:"39%"}}>
                    <div className=" d-flex align-items-center">
                        <img
                            src={project.imageSrc}
                            alt={`Project ${index + 1}`}
                            className=" img-fluid"
                            style={{ width: `${project.width}` }}
                        />
                    </div>
                    <div className="col-md-10">
                        <h6>{project.name} <a href={project.link}><i style={{color:"grey"}} className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></a></h6>({project.tag})<br/><strong>Technologies Used:</strong>
                        <ul className="list-inline">
                            {project.techniques.map((technique, index) => (
                                <li key={index} className="list-inline-item">
                                    {index+1}. {technique}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="dropdown">
                            <button className="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Description
                            </button>
                            <ul className="dropdown-menu" style={{wordBreak:"break-all",maxWidth:"77%"}}>
                                <><p className="dropdown-item" style={{wordBreak:"break-word",whiteSpace:"break-spaces"}}>{project.description}</p></>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
           </div>
        </div>
    );
};

export default Projects;
