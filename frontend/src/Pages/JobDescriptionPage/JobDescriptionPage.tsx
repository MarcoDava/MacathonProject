import { Link } from "react-router";

const JobDescriptionPage=()=>
{
    return(
        <div className="flex justify-center items-center h-screen flex-col gap-10">
            <h1 className="text-3xl font-bold">Job Description Page</h1>
            <p className="text-lg">Copy and paste the job description into here:</p>
            <input type="text" className="bg-[#FFFFFF] border border-gray-300 rounded-md p-2 w-full max-w-md" placeholder="Job Title" />
            <button>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md " to="/interview">Submit</Link>
            </button>
        </div>
    );
}

export default JobDescriptionPage;