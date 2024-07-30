import { Link } from 'react-router-dom';

const Link_Button = ({ url, name }) => {
    return (
        <div>
            <Link
                to={url}
                className="group relative inline-flex items-center overflow-hidden rounded bg-gray-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
                <span className="absolute -left-full transition-all group-hover:left-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-move-right"
                    >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                    </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ml-4"> {name} </span>
            </Link>
        </div>
    );
};

export default Link_Button;
