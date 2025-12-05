import React, { useState, useEffect } from 'react'
import { MapPin, MessageSquare, Download, Flag, Briefcase , User, Info  } from 'lucide-react'
import { Github, Instagram, Linkedin, Facebook } from 'lucide-react'; 
import { Sun, Moon } from 'lucide-react'
import profile from '../assets/profile.jpg'
import ContactModal from '../components/ContactModal';
import SkeletonProfile from '../components/SkeletonProfile';
import SkeletonCard from '../components/SkeletonCard';
import SkeletonAbout from '../components/SkeletonAbout';
import ComingSoonModal from "../components/ComingSoonModal";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

    const Portfolio = () => {
        const [activeTab, setActiveTab] = useState('projects')
        const [darkMode, setDarkMode] = useState(false);
        const [showImageModal, setShowImageModal] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const [showResumeModal, setShowResumeModal] = useState(false);
        const [loading, setLoading] = useState(true);

        const toggleDarkMode = () => {
            setDarkMode(prev => {
                const newMode = !prev;

                if (newMode) {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }

                return newMode;
            });
        };

        useEffect(() => {
            if (darkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }, [darkMode])

        useEffect(() => {
            localStorage.setItem('theme', darkMode ? 'dark' : 'light')
        }, [darkMode])

        const programmingLanguages = [
            'JavaScript', 'React.js', 'HTML', 'CSS',
            'TailwindCSS', 'Node.js', 'Express Js', 'Python', 'Git',
            'Github', 'Rest APIS'
        ]

        const projects = [
            { 
                title: 'AirTrav — Travel Sharing Web App', 
                description: 'AirTrav is a web application designed for travel enthusiasts to share and explore travel experiences around the world. AirTrav brings inspiration to travelers while building a global community fueled by real adventures.',
                web: 'https://zydece.pythonanywhere.com/',
                image: project1,
                tags: ['HTML', 'CSS', 'Python', 'Flask', 'SQLite']
            },
            { 
                title: 'Internship Portal System', 
                description: 'The Internship Portal System is a web application designed to connect students with internship opportunities easily and efficiently. It provides a dedicated space where students can browse available internships, submit applications, and track their status.',
                image: project2,
                tags: ['JavaScript', 'React Js', 'TailwindCSS', 'Express Js', 'Node Js']
            },
            { 
                title: 'Smartwatch E-commerce Web App', 
                description: 'A small e-commerce web application built with React, TailwindCSS, PHP, and MySQL. Users can browse smartwatches, add items to a cart, and view product details in a responsive and interactive interface.',
                image: project3,    
                tags: ['React', 'TailwindCSS', 'PHP', 'MySQL']
            }

        ]

        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }, []);


        return (
            <div className="min-h-screen dark:bg-gray-900 transition-colors">
                <div className="mx-auto">
                    <div className="p-4 flex items-center justify-between px-5 md:px-10 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-extrabold  text-gray-600 italic dark:text-gray-100 text-2xl">Zydece.</span>
                        <div className="flex items-center gap-4">
                            <div className='hidden md:block'>
                                <div className='flex justify-center items-center gap-4'>
                                    <button onClick={() => setShowModal(true)} className=" text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm cursor-pointer flex justify-center items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Send Message
                                    </button>
                                    <button onClick={() => setShowResumeModal(true)} className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm cursor-pointer">
                                        Resume
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <button onClick={toggleDarkMode}
                                    className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
                                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-b-2xl overflow-hidden transition-colors">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className='shadow-sm'>
                                {loading ? <SkeletonProfile /> : (
                                    <div className="col-span-1 space-y-6 p-4 md:p-8">
                                        <div className="flex flex-col items-center text-center">
                                            <img 
                                                onClick={() => setShowImageModal(true)} 
                                                src={profile} 
                                                alt="Profile" 
                                                className="w-32 h-32 rounded-full object-cover mb-4" 
                                            />
                                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Acalal, Abcede S.</h2>
                                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm mt-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>Pagadian City, Zamboanga del Sur, Philippines</span>
                                            </div>
                                            <p className="text-blue-600 text-sm mt-1">Aspiring Web Developer</p>

                                            <div className="flex gap-2 mt-6 w-full">
                                                <button 
                                                    onClick={() => setShowModal(true)} 
                                                    className="whitespace-nowrap flex-1 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-gray-700 dark:hover:bg-gray-600 ease-in-out duration-300 cursor-pointer">
                                                    <MessageSquare className="w-4 h-4" />
                                                    Send Message
                                                </button>

                                                <button onClick={() => setShowResumeModal(true)}
                                                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 ease-in-out duration-300 cursor-pointer"
                                                    >
                                                    <Download className="w-4 h-4" />
                                                    Resume
                                                </button>


                                                <button 
                                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 ease-in-out duration-300 cursor-pointer">
                                                    <Flag className="w-4 h-4" />
                                                </button>
                                            </div>

                                        </div>

                                        <div className="border-t pt-6 border-gray-300 dark:border-gray-700">
                                            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">EDUCATION</h3>
                                            <div className="flex flex-col gap-6">
                                                <div>
                                                    <div className="flex justify-between items-start mb-1 gap-4">
                                                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                                                            Zamboanga del Sur National High School
                                                        </h4>
                                                        <span className="text-xs text-blue-600 font-medium">JHS</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">Sta. Maria Pagadian City, Philippines</p>
                                                </div>

                                                <div>
                                                    <div className="flex justify-between items-start mb-1 gap-4">
                                                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                                                            Zamboanga del Sur National High School – Senior High
                                                        </h4>
                                                        <span className="text-xs text-blue-600 font-medium">SHS</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">ICT Strand (Information and Communications Technology)</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">Sta. Maria Pagadian City, Philippines</p>
                                                </div>

                                                <div>
                                                    <div className="flex justify-between items-start mb-1 gap-4">
                                                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                                                            Southern Mindanao Colleges
                                                        </h4>
                                                        <span className="text-xs text-blue-600 font-medium">Present</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">Bachelor of Science in Information Technology (BSIT)</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">San Francisco, Pagadian City, Philippines</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t pt-6 border-gray-300 dark:border-gray-700">
                                            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">
                                                TOOLS & TECHNOLOGIES
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {programmingLanguages.map((lang, i) => (
                                                    <div key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs rounded-full border border-gray-300 dark:border-gray-600">
                                                        {lang}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="col-span-2 space-y-6 md:p-6">
                                {loading ? <SkeletonAbout /> : (
                                    <div className='p-4 md:p-6 shadow-sm md:rounded-lg'>
                                        <div className='flex gap-2 items-center'>
                                            <Info className='w-5 h-5 dark:text-gray-200'/>
                                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">About Me</h2>
                                        </div>
                                        
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-justify md:text-left">
                                            Hi! I'm Abcede, an aspiring Web Developer from Pagadian City, Philippines. I love creating responsive and user-friendly web applications.  
                                            Passionate about learning new technologies and constantly improving my skills in front-end and back-end development.
                                        </p>
                                        <div className="mt-4 flex gap-3">
                                            <a
                                                href="https://www.facebook.com/abcede.sulani.acalal"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white border border-gray-300 dark:border-gray-600 p-1 rounded-md bg-gray-50 dark:bg-gray-700 transition"
                                            >
                                                <Facebook className="w-4 h-4" />
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/abcede-sulani-acalal-2b335a332/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white border border-gray-300 dark:border-gray-600 p-1 rounded-md bg-gray-50 dark:bg-gray-700 transition"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            <a
                                                href="https://github.com/Cedezy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white border border-gray-300 dark:border-gray-600 p-1 rounded-md bg-gray-50 dark:bg-gray-700 transition"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/abcedesulani/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white border border-gray-300 dark:border-gray-600 p-1 rounded-md bg-gray-50 dark:bg-gray-700 transition"
                                            >
                                                <Instagram className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                )}
                                <div className='shadow-sm md:rounded-lg p-4 flex flex-col gap-4'>
                                    <div className="flex gap-6 border-b border-gray-300 dark:border-gray-700">
                                        <button onClick={() => setActiveTab('projects')}
                                            className={`pb-3 px-2 text-sm font-medium cursor-pointer ${activeTab === 'projects' ? 'text-gray-800 dark:text-gray-100 border-b-2 border-gray-800 dark:border-gray-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                            Projects
                                        </button>
                                        <button onClick={() => setActiveTab('timeline')}
                                            className={`pb-3 px-2 text-sm font-medium cursor-pointer ${activeTab === 'timeline' ? 'text-gray-800 dark:text-gray-100 border-b-2 border-gray-800 dark:border-gray-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                            Experience
                                        </button>
                                    </div>
                                    
                                    {activeTab === 'projects' && (
                                        <div className="space-y-4">
                                            {loading
                                                ? [...Array(3)].map((_, idx) => <SkeletonCard key={idx} />)
                                                : projects.map((project, i) => (
                                                    <div 
                                                        key={i}
                                                        className="group rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 
                                                                flex flex-col sm:flex-row"
                                                    >
                                                    
                                                        <div className="relative w-full sm:w-64 h-48 sm:h-auto overflow-hidden bg-gray-200 dark:bg-gray-700">
                                                            <img 
                                                                src={project.image} 
                                                                alt={project.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        
                                                
                                                        <div className="p-4 flex flex-col justify-center flex-1">
                                                            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                                                                    {project.title}
                                                                </h4>
                                                                
                                                            </div>

                                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                {project.description}
                                                            </p>
                                                            <div className='mt-2 flex flex-col md:flex-row justify-between gap-4'>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.tags.map((tag, idx) => (
                                                                        <span 
                                                                            key={idx}
                                                                            className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                                                                        >
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                <div className="flex gap-2 items-center">       
                                                                    <a className="text-sm flex items-center gap-1 bg-gray-700 text-gray-50 px-2 py-1 rounded-sm" href="">
                                                                        <Github className="w-4 h-4" />
                                                                        Github
                                                                    </a> 
                                                                    <a className="text-sm hover:opacity-70" href={project.web}>Demo</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
                                    {activeTab === 'timeline' && (
                                        <div className="text-center py-10 flex flex-col items-center gap-4">
                                            <Briefcase className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                                Work Experience
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                                                No work experience yet — currently learning and building projects!
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showImageModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowImageModal(false)}>
                        <img src={profile}
                            alt="Profile"
                            className="max-w-full max-h-full rounded-md shadow-lg"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </div>
                )}
                <ContactModal open={showModal} onClose={() => setShowModal(false)} />
                <ComingSoonModal open={showResumeModal} onClose={() => setShowResumeModal(false)} />
            </div>
        )
    }

    export default Portfolio
