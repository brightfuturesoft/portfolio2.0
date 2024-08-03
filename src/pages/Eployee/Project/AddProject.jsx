
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { base_url } from '../../../layout/Title';
import uploadImage from '../../../Hook/ImageUpload';
import Select from 'react-select';

const data = [
    {
        "category": "Front-End",
        "technologies": [
            { "value": "html", "label": "HTML", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg" },
            { "value": "css", "label": "CSS", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
            { "value": "javascript", "label": "JavaScript", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
            { "value": "typescript", "label": "TypeScript", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" },
            { "value": "react", "label": "React", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { "value": "vue", "label": "Vue.js", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
            { "value": "angular", "label": "Angular", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
            { "value": "svelte", "label": "Svelte", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" },
            { "value": "preact", "label": "Preact", "imageUrl": "https://logowik.com/content/uploads/images/preact4245.logowik.com.webp" },
            { "value": "lit", "label": "Lit", "imageUrl": "https://logowik.com/content/uploads/images/lit1871.logowik.com.webp" },
            { "value": "jquery", "label": "jQuery", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg" },
            { "value": "backbone", "label": "Backbone", "imageUrl": "https://logowik.com/content/uploads/images/851_backbone.jpg" },
            { "value": "ember", "label": "Ember", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Ember.js_Logo_and_Mascot.png" },
            { "value": "dojo", "label": "Dojo", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/8/8c/Dojo_toolkit_logo.png" },
            { "value": "extjs", "label": "Ext JS", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/6/69/Ext_Logo.svg" },
            { "value": "tailwindcss", "label": "Tailwind CSS", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            { "value": "bootstrap", "label": "Bootstrap", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
            { "value": "materialui", "label": "Material UI", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Material_Design_Logo.svg" },
            { "value": "antdesign", "label": "Ant Design", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Ant_Design_Logo.svg" },
            { "value": "foundation", "label": "Foundation", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Foundation_Logo.png" },
            { "value": "semanticui", "label": "Semantic UI", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Semantic_UI_logo.png" },
            { "value": "bulma", "label": "Bulma", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Bulma.png" }
        ]
    },
    {
        "category": "Back-End",
        "technologies": [
            { "value": "nodejs", "label": "Node.js", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { "value": "python", "label": "Python", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
            { "value": "ruby", "label": "Ruby", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
            { "value": "php", "label": "PHP", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
            { "value": "java", "label": "Java", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
            { "value": "csharp", "label": "C#", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
            { "value": "go", "label": "Go", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
            { "value": "scala", "label": "Scala", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/8/85/Scala_logo.png" },
            { "value": "kotlin", "label": "Kotlin", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
            { "value": "elixir", "label": "Elixir", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/Elixir_logo.png" },
            { "value": "erlang", "label": "Erlang", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/59/Erlang-logo.png" },
            { "value": "dart", "label": "Dart", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" },
            { "value": "expressjs", "label": "Express.js", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
            { "value": "django", "label": "Django", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
            { "value": "ruby_on_rails", "label": "Ruby on Rails", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
            { "value": "laravel", "label": "Laravel", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
            { "value": "symfony", "label": "Symfony", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Symfony_logo.svg" },
            { "value": "spring", "label": "Spring", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
            { "value": "aspnet", "label": "ASP.NET", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png" },
            { "value": "flask", "label": "Flask", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
            { "value": "pyramid", "label": "Pyramid", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Pylons_project_logo.png" },
            { "value": "sinatra", "label": "Sinatra", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sinatra-logo.svg" },
            { "value": "phoenix", "label": "Phoenix", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Phoenix_logo.png" },
            { "value": "playframework", "label": "Play Framework", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Play_Framework_logo.png" },
            { "value": "dropwizard", "label": "Dropwizard", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Dropwizard_Logo.png" },
            { "value": "vertx", "label": "Vert.x", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Vert.x_Logo.png" }
        ]
    },
    {
        "category": "Databases",
        "technologies": [
            { "value": "mysql", "label": "MySQL", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
            { "value": "postgresql", "label": "PostgreSQL", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
            { "value": "sqlite", "label": "SQLite", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" },
            { "value": "mongodb", "label": "MongoDB", "imageUrl": "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp" },
            { "value": "firebase", "label": "Firebase", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
            { "value": "cassandra", "label": "Cassandra", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg" },
            { "value": "redis", "label": "Redis", "imageUrl": "https://upload.wikimedia.org/wikipedia/en/6/6a/Redis_Logo.svg" },
            { "value": "couchbase", "label": "Couchbase", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Couchbase_Logo.svg" },
            { "value": "neo4j", "label": "Neo4j", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Neo4j_logo.svg" },
            { "value": "elasticsearch", "label": "Elasticsearch", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg" }
        ]
    },
    {
        "category": "Mobile App Development",
        "technologies": [
            { "value": "react_native", "label": "React Native", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React_Native_Logo.png" },
            { "value": "flutter", "label": "Flutter", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flutter_logo_2021.png" },
            { "value": "ionic", "label": "Ionic", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ionic_Logo.svg" },
            { "value": "xamarin", "label": "Xamarin", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/43/Xamarin_logo.png" },
            { "value": "kotlin_native", "label": "Kotlin/Native", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
            { "value": "swift", "label": "Swift", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Swift_logo.svg" },
            { "value": "swiftui", "label": "SwiftUI", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/SwiftUI_logo.png" }
        ]
    },
    {
        "category": "UI/UX Design",
        "technologies": [
            { "value": "figma", "label": "Figma", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Figma_logo.png" },
            { "value": "adobe_xd", "label": "Adobe XD", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Adobe_XD_logo.png" },
            { "value": "sketch", "label": "Sketch", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Sketch_Logo.svg" },
            { "value": "invision", "label": "InVision", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/InVision_Logo.png" },
            { "value": "framer", "label": "Framer", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/Framer_logo.png" },
            { "value": "uxpin", "label": "UXPin", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/21/UXPin_Logo.png" },
            { "value": "zeplin", "label": "Zeplin", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/35/Zeplin_logo.png" },
            { "value": "propie", "label": "ProtoPie", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/ProtoPie_logo.png" }
        ]
    },
    {
        "category": "Other",
        "technologies": [
            { "value": "git", "label": "Git", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
            { "value": "npm", "label": "npm", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" },
            { "value": "yarn", "label": "Yarn", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Yarn-logo.svg" },
            { "value": "webpack", "label": "Webpack", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg" },
            { "value": "babel", "label": "Babel", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg" },
            { "value": "typescript_compiler", "label": "TypeScript Compiler", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_Logo.svg" },
            { "value": "docker", "label": "Docker", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg" },
            { "value": "kubernetes", "label": "Kubernetes", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
            { "value": "aws", "label": "AWS", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { "value": "gcp", "label": "GCP", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Google_Cloud_logo.svg" },
            { "value": "azure", "label": "Azure", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" }
        ]
    }
]






const AddProject = () => {
    const { user } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false)


    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    // Flatten the data for react-select and include category information
    const options = data.flatMap(category =>
        category.technologies.map(tech => ({
            ...tech,
            category: category.category,
            value: tech.value,
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={tech.imageUrl} alt={tech.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                    {tech.label}
                </div>
            )
        }))
    );

    const handleChange = (selectedOptions) => {
        const selected = selectedOptions.map(option => ({
            name: option.label.props.children[1], // Extract name from label
            imageUrl: option.imageUrl,
            category: option.category
        }));
        setSelectedTechnologies(selected);
    };




    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setFileName(file.name);
        }
    };

    const navigate = useNavigate()

    const dataSubmit = async (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const projectType = form.projectType.value
        const image = form.photo.files[0]
        const meta_tag = title
        const message = form.message.value
        const photo = await uploadImage(image);
        const formatTitleToURL = (title) => {
            return title
                .toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^\w\-]+/g, '');
        };


        const stripHtmlTags = (html) => {
            // Create a new DOM parser
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const unwantedTags = ['style', 'title'];
            unwantedTags.forEach(tag => {
                const elements = doc.getElementsByTagName(tag);
                while (elements.length) {
                    elements[0].parentNode.removeChild(elements[0]);
                }
            });

            // Get plain text from the document body
            return doc.body.textContent || '';
        };
        const plainTextMessage = stripHtmlTags(message);

        const project = {
            project_name: title,
            description: message,
            projectType,
            meta_tag,
            meta_description: plainTextMessage,
            image_url: photo,
            url: formatTitleToURL(title),
            publisher: user,
            technologies: selectedTechnologies,
            date: new Date().toDateString(),

        }

        console.log(project, 'project');

        fetch(`${base_url}/project/add-project`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.success) {
                    Swal.fire(data.message, ' ', 'success')
                    form.reset()
                    navigate('/dashboard/project-management')
                }
            })


    }


    return (
        <div className='py-20 bg-gray-900 text-white '>
            <div className=' mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <h1 className='text-2xl font-bold mt-10 text-center'>Publish a project for you and next</h1>
                <div className='p-10 border-2 rounded-xl m-10' >
                    <form onSubmit={dataSubmit} className="space-y-4 text-black">
                        <div>
                            <label className="sr-only" htmlFor="title">
                                Title
                            </label>
                            <input required
                                className="w-full rounded-lg bg-gray-900 text-white placeholder:text-gray-600 border-gray-200 p-3 text-sm"
                                placeholder="Title"
                                type="text"
                                id="title"
                                name='title'
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="title">
                                Project Type
                            </label>
                            <select className="w-full rounded-lg bg-gray-900 text-white placeholder:text-gray-600 border-gray-200 p-3 text-sm" name="projectType" id="">
                                <option value="website">Website</option>
                                <option value="app">Software</option>
                                <option value="uiDesign">UI/UX</option>
                            </select>
                        </div>
                        <div>

                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center w-full  p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer  rounded-xl"
                            >
                                {previewUrl ? <img src={previewUrl} alt="File Preview" className="mt-2 w-8 h-8" /> :
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                    </svg>
                                }
                                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                                    {fileName ? fileName : ' Upload Picture'}
                                </h2>
                                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                    Upload Your Photo Only.
                                </p>
                                <input required
                                    id="dropzone-file"
                                    type="file"
                                    name='photo'
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>

                            {/* Display the file preview */}

                        </div>



                        <div>
                            <JoditEditor name='message'
                                id="message" rows={20} className='rounded jodit-bg  h-[510px] t jodit-editor' />
                        </div>
                        <br />
                        <Select
                            options={options}
                            isMulti
                            placeholder="Select multiple technologies..."
                            onChange={handleChange}
                        />
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                {loading ? 'Loading..' : 'Publish Blog'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProject;