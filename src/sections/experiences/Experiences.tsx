import React, {useEffect, useState} from 'react';
import ExperienceCard from './ExperienceCard.tsx';
import {GITHUB_RAW_BASE} from '../../constants.ts';
import type { ExperienceItem } from '../../types.ts';


const Experiences: React.FC = () => {
    const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${GITHUB_RAW_BASE}/content/experiences.json?ts=${Date.now()}`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load experiences.json');
                return res.json();
            })
            .then((data: ExperienceItem[]) => {
                setExperiences(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-white">Loading experience...</p>;
    if (error) return <p className="text-red-400">Error: {error}</p>;

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Experiences</h2>
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp}/>
            ))}
        </section>
    );
};

export default Experiences;
