import React, {useEffect, useState} from 'react';
import EductionCard from './EductionCard.tsx';
import {CONTENT_BASE} from '../../constants.ts';
import type {EducationItem} from '../../types.ts';


const Educations: React.FC = () => {
    const [experiences, setEducations] = useState<EducationItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${CONTENT_BASE}educations.json`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load educations.json');
                return res.json();
            })
            .then((data: EducationItem[]) => {
                setEducations(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-white">Loading educations...</p>;
    if (error) return <p className="text-red-400">Error: {error}</p>;

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Educations</h2>
            {experiences.map((exp, index) => (
                <EductionCard key={index} education={exp}/>
            ))}
        </section>
    );
};

export default Educations;
