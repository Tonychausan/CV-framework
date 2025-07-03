import React, { useEffect, useState } from "react";
import { GITHUB_RAW_BASE } from "../../constants.ts";
import type { AboutMeData } from "../../types.ts";

const AboutMe: React.FC = () => {
    const [data, setData] = useState<AboutMeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${GITHUB_RAW_BASE}/content/aboutme.json?ts=${Date.now()}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load aboutme.json");
                return res.json();
            })
            .then((json: AboutMeData) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-400">Error: {error}</p>;

    return (
        <div className="text-white text-center">
            <img
                src={`${GITHUB_RAW_BASE}/content/profile_picture.png`}
                alt="Profile"
                className="w-75 h-75 md:w-100 md:h-100 rounded-full mx-auto mb-4 shadow-lg object-cover"
            />
            <h1 className="text-xl font-bold mb-4">{data?.name}</h1>
            <h2 className="text-xl font-bold mb-4">{data?.role}</h2>

            <a
                href={`mailto:${data?.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white hover:bg-gray-100 transition mb-2"
                aria-label="Email"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 4h16v16H4z" fill="none" />
                    <polyline points="4,4 12,13 20,4" />
                </svg>
            </a>

            <p className="text-sm leading-relaxed">{data?.description}</p>
        </div>
    );
};

export default AboutMe;
